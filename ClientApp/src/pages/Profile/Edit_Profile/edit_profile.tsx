import Layout from "../../../components/Layout";
import "./edit_profile.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { callMsGraph, callMsGraphPhoto } from "../../../graph";
import useGraphData from "../../../hooks/useGraphData";
import IProfile from "../../../interfaces/IProfile";
import useFetch from "../../../hooks/useFetch";

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

    const { graphData, graphDataPhoto } = useGraphData();

    const { loading, data, error } = useFetch(`https://localhost:7185/api/profile/by-email/${graphData?.mail}`);

    // // Initialize prevProfile with the existing data
    // const [prevProfile, setPrevProfile] = useState({
    //     ID: data?.ID,
    //     UserID: data?.UserID,
    //     FullName: data?.FullName,
    //     Bio: data?.Bio,
    //     MemberSince: data?.MemberSince,
    //     LastLogin: data?.LastLogin,
    //     Role: data?.Role,
    //     DateOfBirth: data?.DateOfBirth,
    //     Department: data?.Department,
    //     ProfilePictureID: data?.ProfilePictureID,
    //     PhoneNumber: data?.PhoneNumber,
    // });

    // Initialize prevProfile and editedProfile as null
    const [prevProfile, setPrevProfile] = useState<IProfile | null>(null);
    const [editedProfile, setEditedProfile] = useState<IProfile | null>(null);

    useEffect(() => {
        if (data) {
            setPrevProfile(data);
            setEditedProfile(data);
        }
    }, [data]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Update editedProfile with the existing data and the changes
        setEditedProfile((currentProfile: any) => ({
            ...currentProfile, // Spread the current state
            [name]: value, // Add or update the specific field with the new value
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const payload = {
                ...prevProfile,
                Role: editedProfile?.Role,
                PhoneNumber: editedProfile?.PhoneNumber,
                Bio: editedProfile?.Bio,
            };

            console.log("Request Payload:", JSON.stringify(payload));

            const response = await fetch(`https://localhost:7185/api/profile/${data?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log("Profile updated successfully");
                // Redirect to the profile page or perform any other actions as needed
            } else {
                console.error('Failed to update profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Layout>
            <h1 className="blue-text my-5">Profiel bewerken</h1>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group mt-3">
                                <label htmlFor="Role">Functie</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Role"
                                    name="Role"
                                    value={editedProfile?.Role || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="PhoneNumber">Telefoonnummer (optioneel)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="PhoneNumber"
                                    name="PhoneNumber"
                                    value={editedProfile?.PhoneNumber || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="Bio">Bio</label>
                                <textarea
                                    className="form-control"
                                    id="Bio"
                                    name="Bio"
                                    value={editedProfile?.Bio || ""}
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