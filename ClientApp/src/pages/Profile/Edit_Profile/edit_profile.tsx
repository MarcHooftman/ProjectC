import React, { useState } from "react";
import Layout from "../../../components/Layout";
import "./edit_profile.scss";

import IProfile from "../IProfile";

// Change to the data of logged in person
const EditProfile = () => {
    const initialProfile: IProfile = {
        fullName: "Voornaam Achternaam",
        role: "Functie",
        dateOfBirth: "2001-01-01",
        email: "nep@anteszorg.com",
        memberSince: "05-10-2023",
        // phoneNumber is optional
        phoneNumber: "",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quod eum cumque aspernatur? Fuga est earum eos laudantium minus eligendi tempore ullam, sequi sint ab unde? Labore, provident porro. Suscipit in soluta numquam dolores maiores id, culpa sequi exercitationem nihil consequatur inventore blanditiis aliquam iste labore expedita eveniet optio velit eligendi odit dolor vero error voluptas?",
        department: "HR",
    };

    // State to store the edited profile data
    const [editedProfile, setEditedProfile] = useState<IProfile>(initialProfile);

    // Function to handle form submission
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send the editedProfile data to the API or update it as needed.

        ////////////////////////////////////////////////////////////////////////////
        // This is to test, make an API request in completed version.
        console.log("Edited Profile Data:", editedProfile);
        ////////////////////////////////////////////////////////////////////////////

        // Commented out to test with a console.log, redirecting resets browser console.
        // Redirect to the profile page after the form is submitted
        //window.location.href = '/profile';
    };

    // Function to handle input changes (both text inputs and text areas)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setEditedProfile((prevProfile: IProfile) => {
            if (name === 'phone') {
                return {
                    ...prevProfile,
                    phoneNumber: value,
                };
            }

            return {
                ...prevProfile,
                [name]: value,
            };
        });
    };

    // // Function to handle profile picture changes
    // const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0]; // Get the selected file
    //     if (file) {
    //         setEditedProfile((prevProfile: IProfile) => ({
    //             ...prevProfile,
    //             profilePicture: file, // Set the selected file as the profile picture
    //         }));
    //     }
    // };

    return (
        <Layout dark={false}>
            <h1 className="blue-title my-5">Update Profiel</h1>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            {/* <div className="form-group">
                                <label htmlFor="profilePicture">Profielfoto wijzigen:</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    accept="image/*" // Allow only image files
                                    onChange={handleProfilePictureChange}
                                />
                            </div> */}
                            <div className="form-group mt-3">
                                <label htmlFor="role">Functie</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    name="role"
                                    value={editedProfile.role}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="dateOfBirth">Geboortedatum</label>
                                <input
                                    type="date" // Use date input type
                                    className="form-control"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={editedProfile.dateOfBirth}
                                    onChange={handleInputChange}
                                    placeholder={editedProfile.dateOfBirth}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="phone">Telefoonnummer (optioneel)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={editedProfile.phoneNumber || ''} // Use a default empty string if phoneNumber is null
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className="form-group mt-3">
                                <label htmlFor="department">Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="department"
                                    name="department"
                                    value={editedProfile.department}
                                    onChange={handleInputChange}
                                />
                            </div> */}
                            <div className="form-group mt-3">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    className="form-control"
                                    id="bio"
                                    name="bio"
                                    value={editedProfile.bio}
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