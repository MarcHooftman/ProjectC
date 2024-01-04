import Layout from "../../../../components/Layout";
import "./edit_profile.scss";

import { useContext, useEffect, useState } from "react";
import { useGraphData } from "../../../../hooks/useGraphData";
import IProfile from "../../../../interfaces/IProfile";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../../../utils/getApiUrl";

const EditProfile = () => {
  const { graphData } = useGraphData();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    if (graphData) {
      fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const profileData = data as IProfile;
          setProfile(profileData);
          setRole(profileData.role || "");
          setPhoneNumber(profileData.phoneNumber || "");
          setBio(profileData.bio || "");
        });
    }
  }, [graphData]);

  const [role, setRole] = useState<string>(profile?.role || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    profile?.phoneNumber || ""
  );
  const [bio, setBio] = useState<string>(profile?.bio || "");

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...profile,
        Role: role,
        PhoneNumber: phoneNumber,
        Bio: bio,
      };

      console.log("Request Payload:", JSON.stringify(payload));

      const response = await fetch(`${getApiUrl()}/profile/${profile?.id}`, {
        method: "PUT",
        headers: {
          "ngrok-skip-browser-warning": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Profile updated successfully");
        alert("Profiel succesvol bijgewerkt");
        // Redirect to the profile page or perform any other actions as needed
        navigate("/profile");
      } else {
        console.error("Failed to update profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Layout role="edit-profile-page">
      <h1 className="blue-text my-5">Profiel bewerken</h1>
      <div className="container mt-5">
        <div className="card shadow-lg bg-antes-primary">
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="Role">Functie</label>
                <input
                  type="text"
                  className="form-control"
                  id="Role"
                  name="Role"
                  value={role || ""}
                  onChange={handleRoleChange}
                  placeholder={role || ""}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="PhoneNumber">Telefoonnummer (optioneel)</label>
                <input
                  type="text"
                  className="form-control"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  value={phoneNumber || ""}
                  onChange={handlePhoneNumberChange}
                  placeholder={phoneNumber || ""}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="Bio">Bio</label>
                <textarea
                  className="form-control"
                  id="Bio"
                  name="Bio"
                  value={bio || ""}
                  onChange={handleBioChange}
                  placeholder={bio || ""}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4 fw-bold">
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
