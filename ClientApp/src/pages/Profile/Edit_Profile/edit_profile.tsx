import Layout from "../../../components/Layout";
import "./edit_profile.scss";
import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../../graph";


const EditProfile = () => {
    const { accounts, instance } = useMsal();

    const [graphData, setGraphData] = useState<any | null>(null); // Adjust 'any' based on the MS Graph response structure
    const [editedProfile, setEditedProfile] = useState<any>({
        // Adjust these properties based on the MS Graph response structure
        id: 0,
        displayName: "",
        jobTitle: "",
        givenName: "",
        surname: "",
        mail: "",
        mobilePhone: "",
        aboutMe: "",
    });

    useEffect(() => {
        // Fetch the user's data from MS Graph API
        instance
            .acquireTokenSilent({
                account: accounts[0],
            })
            .then((response: any) => {
                callMsGraph(response.accessToken).then((graphResponse) => {
                    setGraphData(graphResponse);
                    setEditedProfile({
                        // Map the properties from MS Graph response to editedProfile
                        id: graphResponse.id,
                        displayName: graphResponse.displayName,
                        jobTitle: graphResponse.jobTitle,
                        givenName: graphResponse.givenName,
                        surname: graphResponse.surname,
                        mail: graphResponse.mail,
                        mobilePhone: graphResponse.mobilePhone,
                        aboutMe: graphResponse.aboutMe,
                    });
                });
            })
            .catch((error: any) => {
                console.error("Error fetching user data:", error);
            });
    }, [accounts, instance]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send the editedProfile data to the API or update it as needed.
        // ...

        ////////////////////////////////////////////////////////////////////////////
        // This is to test, make an API request in the completed version.
        console.log("Edited Profile Data:", editedProfile);
        ////////////////////////////////////////////////////////////////////////////

        // Commented out to test with a console.log, redirecting resets the browser console.
        // Redirect to the profile page after the form is submitted
        // navigate('/profile');
    };

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
                                    value={editedProfile.jobTitle}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="displayName">Weergavenaam</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="displayName"
                                    name="displayName"
                                    value={editedProfile.displayName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Add more input fields as needed */}
                            <div className="form-group mt-3">
                                <label htmlFor="mobilePhone">Telefoonnummer (optioneel)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobilePhone"
                                    name="mobilePhone"
                                    value={editedProfile.mobilePhone || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="aboutMe">Over mij</label>
                                <textarea
                                    className="form-control"
                                    id="aboutMe"
                                    name="aboutMe"
                                    value={editedProfile.aboutMe}
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