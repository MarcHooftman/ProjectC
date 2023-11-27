import Layout from "../../../components/Layout";
import "./edit_profile.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { callMsGraph, callMsGraphPhoto } from "../../../graph";


const EditProfile = () => {
    const loggedIn = useIsAuthenticated();
    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
    }

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    }



    const [graphData, setGraphData] = useState<IGraphData | null>(null);
    const [photo, setPhoto] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
            callMsGraphPhoto(response.accessToken).then(response => setPhoto(response));
        });
    }

    useEffect(() => {
        if (loggedIn) {
            RequestProfileData()
            console.log(graphData)
            console.log(photo)
        }

    }, [loggedIn])

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send the editedProfile data to the API or update it as needed.
        // ...

        ////////////////////////////////////////////////////////////////////////////
        // This is to test, make an API request in the completed version.
        //console.log("Edited Profile Data:", editedProfile);
        ////////////////////////////////////////////////////////////////////////////

        // Commented out to test with a console.log, redirecting resets the browser console.
        // Redirect to the profile page after the form is submitted
        // navigate('/profile');
    };

    const [editedProfile, setEditedProfile] = useState<any>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setEditedProfile((prevProfile: any) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <Layout>
            <h1 className="blue-text my-5">Profiel bewerken</h1>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group mt-3">
                                <label htmlFor="jobTitle">Functie</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={graphData?.jobTitle || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className="form-group mt-3">
                                <label htmlFor="dateOfBirth">Geboortedatum (Optioneel)</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={editedProfile.dateOfBirth}
                                    onChange={handleInputChange}
                                />
                            </div> */}
                            {/* Add more input fields as needed */}
                            <div className="form-group mt-3">
                                <label htmlFor="mobilePhone">Telefoonnummer (optioneel)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobilePhone"
                                    name="mobilePhone"
                                    value={graphData?.mobilePhone || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    className="form-control"
                                    id="bio"
                                    name="bio"
                                    value={graphData?.displayName || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">
                                Wijzigingen opslaan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EditProfile;