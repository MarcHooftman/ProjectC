import Layout from "../components/Layout";
import HomeInfoBox from "../components/HomeInfoBox";
import { Button } from "reactstrap";
import "./Profile.scss";

//random data
const randomData = ["Gepost: 2", "Collega's: 3", "Aantal Reacties: 4"];
const profileIcon = require("../assets/profile-icon.png");
const name = "Naam Achternaam";
const functie = "functie: zorgverlener";
const gebdatum = "geboortedatum: xx-xx-xxx";
const email = "test@testing.nl";

const Profile = () => {
  return (
    <Layout dark={false}>
      <div className="profile-box">
        <HomeInfoBox
          title="Algemene prestaties"
          contextlist={randomData}
        ></HomeInfoBox>
      </div>

      <div className="profile-info">
        <div className="profile-info-header">
          <img
            className="profileIcon"
            src={profileIcon}
            alt="profile picture"
          />
          <div className="name">
            <div>
              <h1>{name}</h1>
              <p>{functie}</p>
              <p>{gebdatum}</p>
              <p>{email}</p>
              <p>lid sinds xx-xx-xxxx</p>
            </div>
          </div>
        </div>
        <p className="bio">
          <div>
            <strong>Bio</strong>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
          quod eum cumque aspernatur? Fuga est earum eos laudantium minus
          eligendi tempore ullam, sequi sint ab unde? Labore, provident porro.
          Suscipit in soluta numquam dolores maiores id, culpa sequi
          exercitationem nihil consequatur inventore blanditiis aliquam iste
          labore expedita eveniet optio velit eligendi odit dolor vero error
          voluptas?
        </p>
      </div>
    </Layout>
  );
};

export default Profile;
