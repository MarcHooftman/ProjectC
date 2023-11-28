import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react'
import { loginRequest } from '../authConfig';
import { callMsGraph, callMsGraphPhoto } from '../graph';

const useGraphData = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const loggedIn = useIsAuthenticated();
    const { instance, accounts } = useMsal();

    const [graphData, setGraphData] = useState<IGraphData | null>(null);
    const [graphDataPhoto, setGraphDataPhoto] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
            callMsGraphPhoto(response.accessToken).then(response => setGraphDataPhoto(response));
        });
    }


    useEffect(() => {
        if (loggedIn) {
            RequestProfileData()
            setLoading(false);
        }

    }, [loggedIn])

    return { loading, graphData, graphDataPhoto };

}

export default useGraphData;