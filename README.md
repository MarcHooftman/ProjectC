1. To run this project locally run `docker compose up` in the project directory
2. in the `src` folder create a `.env` if its not exists and put `REACT_APP_LOCAL_API` on `true`
3. run dotnet run in the project directory

**NOTE**: when running with `REACT_APP_LOCAL_API` set to false, you can run `npm start` in the `ClientApp` directory without starting a local backend server

**testing**
when runnning test use `npm test` in the `ClientApp` directory
**Warning**
running E2E test with docker won't work, use the public api to run E2E test. put `REACT_APP_LOCAL_API` on `false`
don't run all E2E test at once, this will trigger sercurity from preventing many requests in a short period and the tests wil fail.
