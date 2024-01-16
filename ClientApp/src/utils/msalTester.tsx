import { EventCallbackFunction, EventMessage, EventType, IPublicClientApplication, InteractionType, LogLevel, Logger } from "@azure/msal-browser";

import { AccountInfo, AuthenticationResult, AuthError } from '@azure/msal-browser';

import { waitFor} from '@testing-library/react'

interface ITestRunner {
    spyOn: Function,
    expect: Function,
    resetAllMocks: Function,
    waitingFor: Function
}

class MsalReactTesterPlugin {

    public static TestRunner: ITestRunner = {
        spyOn: typeof jest !== 'undefined' ? jest.spyOn : () => { },
        expect: typeof jest !== 'undefined' ? expect : () => { },
        resetAllMocks: typeof jest !== 'undefined' ? jest.resetAllMocks : () => { },
        waitingFor: typeof jest !== 'undefined' ? waitFor : () => { }
    };


    public static init(testRunner: ITestRunner = null) {
        if (testRunner) {
            MsalReactTesterPlugin.TestRunner = testRunner;
        }
    }
}

const TEST_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJzY3AiOiJVc2VyLlJlYWQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jb250b3NvIiwiYXBwX2Rpc3BsYXluYW1lIjoiYXBwbGljYXRpb24tbmFtZSIsInRpZCI6InRlbmFudC1pZCIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJYWCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMCIsInVuaXF1ZV9uYW1lIjoiam9obi5kb2VAY29udG9zby5jb20iLCJuYmYiOiIxNjU2NTk5NjI2IiwiYXBwaWQiOiJhcHAtaWQiLCJuYW1lIjoiSm9obiBEb2UiLCJleHAiOiIxNjU2NjA0NzY3IiwiaWF0IjoiMTY1NjU5OTYyNiIsImVtYWlsIjoiam9obi5kb2VAY29udG9zby5jb20ifQ.ftOvEUhqEFKWxIcxcYsgstgldO-31hIVwEhQ0hwwqWg';

//
// Token parsed is equal to :
//
/**

 {
  "alg": "HS256"
 }.{
  "aud": "00000003-0000-0000-c000-000000000000",
  "iss": "https://sts.windows.net/contoso",
  "nbf": "1656599626",
  "iat": "1656599626",
  "exp": "1656604767",
  "app_displayname": "application-name",
  "tid": "tenant-id",
  "tenant_region_scope": "XX",
  "unique_name": "john.doe@contoso.com",
  "appid": "app-id",
  "name": "John Doe",
  "email": "john.doe@contoso.com",
  "scp": "User.Read"
}.[Signature]

 
 */

const defaultTestAccountInfo: AccountInfo = {
  homeAccountId: "home-account-id",
  localAccountId: "local-account-id",
  environment: 'login.windows.net',
  tenantId: "tenant-id",
  username: 'john.doe@contoso.com',
  name: 'John Doe',
};

const defaultTestAuthenticationResult: AuthenticationResult = {
  authority: 'https://login.microsoftonline.com',
  uniqueId: 'unique-id',
  tenantId: 'tenant-id',
  scopes: ['openid', 'profile'],
  idToken: 'test-id-token',
  idTokenClaims: {},
  accessToken: TEST_ACCESS_TOKEN,
  fromCache: false,
  correlationId: 'test-correlation-id',
  expiresOn: new Date(Date.now() + 3600000),
  account: defaultTestAccountInfo,
  tokenType: 'Bearer',
};

const defaultTestAuthError: AuthError = {
  errorCode: 'test-error-code',
  errorMessage: 'test-error-message',
  subError: '',
  correlationId: '',
  setCorrelationId: function (correlationId: string): void {
    this.correlationId = correlationId;
  },
  name: 'test-error',
  message: 'test-message',
};

class MsalTester {
    private _eventCallbacks: EventCallbackFunction[] = [];
	private _handleRedirectSpy: any;
	private _loginRedirectSpy: any;
	private _loginPopupSpy: any;
	private _logoutRedirectSpy: any;
	private _logoutPopupSpy: any;
	private _testAccountInfo: AccountInfo;
	private _testAuthenticationResult: AuthenticationResult;
	private _testRunner: ITestRunner

    client: IPublicClientApplication;
	accounts: AccountInfo[] = [];
	activeAccount: AccountInfo | null = null;
	error: AuthError;

    constructor(testAccountInfo = defaultTestAccountInfo, testAuthenticationResult = defaultTestAuthenticationResult, testAuthError = defaultTestAuthError) {
        this._testRunner = MsalReactTesterPlugin.TestRunner;

        this.client = MsalTester.GetNewClient(testAccountInfo, testAuthenticationResult);
        this._testAccountInfo = testAccountInfo;
        this._testAuthenticationResult = testAuthenticationResult;

        this.error = testAuthError;
    }

    async actAwait(interval?: number): Promise<void>
	{
		let awaiter = (interval?: number): Promise<void> => new Promise((r, _) => setTimeout(r, interval));
		await awaiter(interval);
	}

    async isLogged() {
		this.accounts = [this._testAccountInfo];
		this.activeAccount = this._testAccountInfo;
		// ensuring that render (that should come right after) will not be too fast
		// and raise an error with act() => ....
		await this.actAwait(1);
	}

    async isNotLogged() {

		this.accounts = [];
		this.activeAccount = null;
		// ensuring that render (that should come right after) will not be too fast
		// and raise an error with act() => ....
		await this.actAwait(1);
	}

    spyMsal() {
		let eventId = 0;
		this._testRunner.spyOn(this.client, 'addEventCallback').mockImplementation((callbackFn: any) => {
			this._eventCallbacks.push(callbackFn);
			eventId += 1;
			return eventId.toString();
		});

		// send a message to say "hey we made redirect start then end"
		this._handleRedirectSpy = this._testRunner.spyOn(this.client, 'handleRedirectPromise').mockImplementation(() => {

			const eventStart: EventMessage = {
				eventType: EventType.HANDLE_REDIRECT_START,
				interactionType: InteractionType.Redirect,
				payload: null,
				error: null,
				timestamp: 10000,
			};


			this._eventCallbacks.forEach((callback) => {
				callback(eventStart);
			});


			const eventEnd: EventMessage = {
				eventType: EventType.HANDLE_REDIRECT_END,
				interactionType: InteractionType.Redirect,
				payload: null,
				error: null,
				timestamp: 10000,
			};

			this._eventCallbacks.forEach(async (callback) => {
				callback(eventEnd)
			});

			return Promise.resolve(null);
		});

		this._loginRedirectSpy = this._testRunner.spyOn(this.client, 'loginRedirect').mockImplementation(async (request) => {

			this.accounts = [this._testAccountInfo];
			this.activeAccount = this._testAccountInfo;

			const eventMessage: EventMessage = {
				eventType: EventType.LOGIN_SUCCESS,
				interactionType: InteractionType.Redirect,
				payload: this._testAuthenticationResult,
				error: null,
				timestamp: 10000,
			};

			this._eventCallbacks.forEach((callback) => {
				callback(eventMessage);
			});

			return Promise.resolve();
		});

		this._loginPopupSpy = this._testRunner.spyOn(this.client, "loginPopup").mockImplementation(async (request) => {

			this.accounts = [this._testAccountInfo];
			this.activeAccount = this._testAccountInfo;

			const eventMessage: EventMessage = {
				eventType: EventType.LOGIN_SUCCESS,
				interactionType: InteractionType.Popup,
				payload: this._testAuthenticationResult,
				error: null,
				timestamp: 10000
			};

			this._eventCallbacks.forEach((callback) => {
				callback(eventMessage);
			});

			return Promise.resolve(this._testAuthenticationResult);
		});

		this._logoutRedirectSpy = this._testRunner.spyOn(this.client, 'logoutRedirect').mockImplementation(async (request: any) => {
			this.accounts = [];
			this.activeAccount = null;

			const eventMessage: EventMessage = {
				eventType: EventType.LOGOUT_SUCCESS,
				interactionType: InteractionType.Redirect,
				payload: this._testAuthenticationResult,
				error: null,
				timestamp: 10000,
			};

			this._eventCallbacks.forEach((callback) => {
				callback(eventMessage);
			});

			return Promise.resolve();

		});

		this._logoutPopupSpy = this._testRunner.spyOn(this.client, 'logoutPopup').mockImplementation(async (request: any) => {
			this.accounts = [];
			this.activeAccount = null;

			const eventMessage: EventMessage = {
				eventType: EventType.LOGOUT_SUCCESS,
				interactionType: InteractionType.Popup,
				payload: this._testAuthenticationResult,
				error: null,
				timestamp: 10000,
			};

			this._eventCallbacks.forEach((callback) => {
				callback(eventMessage);
			});

			return Promise.resolve();

		});

		this._testRunner.spyOn(this.client, 'getAllAccounts').mockImplementation(() => this.accounts);
		this._testRunner.spyOn(this.client, 'getActiveAccount').mockImplementation(() => this.activeAccount);
		this._testRunner.spyOn(this.client, 'setActiveAccount').mockImplementation((account) => (this.activeAccount = account));
	}

    resetSpyMsal() {
		this._testRunner.resetAllMocks();
		this.accounts = [];
		this.activeAccount = null;
		this._eventCallbacks = [];
	}

    static GetNewClient(testAccountInfo: AccountInfo, testAuthenticationResult: AuthenticationResult): IPublicClientApplication {
        let logger = new Logger({
			loggerCallback: (_level: LogLevel, _message: string, _containsPii: boolean) => { },
			piiLoggingEnabled: false,
			logLevel: LogLevel.Error,
			correlationId: 'mock_test',
		});

		return {
			initialize: () => Promise.resolve(),
			acquireTokenPopup: () => Promise.resolve(testAuthenticationResult),
			acquireTokenRedirect: () => Promise.resolve(),
			acquireTokenSilent: () => Promise.resolve(testAuthenticationResult),
			acquireTokenByCode: () => Promise.resolve(testAuthenticationResult),
			getAllAccounts: () => [testAccountInfo],
			getAccountByHomeId: () => testAccountInfo,
			getAccountByUsername: () => testAccountInfo,
			getAccountByLocalId: () => testAccountInfo,
			handleRedirectPromise: () => Promise.resolve(testAuthenticationResult),
			loginPopup: () => Promise.resolve(testAuthenticationResult),
			loginRedirect: () => Promise.resolve(),
			logout: () => Promise.resolve(),
			logoutRedirect: () => Promise.resolve(),
			logoutPopup: () => Promise.resolve(),
			ssoSilent: () => Promise.resolve(testAuthenticationResult),
			addEventCallback: () => null,
			removeEventCallback: () => { return },
			addPerformanceCallback: () => '',
			removePerformanceCallback: () => false,
			enableAccountStorageEvents: () => { return },
			disableAccountStorageEvents: () => { return },
			getTokenCache: () => null,
			setLogger: (_l: Logger) => { return logger },
			setActiveAccount: () => { return },
			getActiveAccount: () => testAccountInfo,
			initializeWrapperLibrary: () => { return },
			setNavigationClient: () => { return },
			getLogger: () => logger,
			getConfiguration: () => null,
			hydrateCache: (...params:any) => Promise.resolve(),
		};
	};
}

export { MsalTester };