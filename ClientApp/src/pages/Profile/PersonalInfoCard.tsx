import { Card, Table } from "react-bootstrap";
import IProfile from "../../interfaces/IProfile";
import pfp from "../../assets/profile-icon.svg";

interface Props {
  profile?: IProfile | null;
  className?: string;
}

const PersonalInfoCard = ({ profile, className = "" }: Props) => {
  //console.log(graphData)
  return (
    <Card
      className={"personalia shadow-lg d-flex px-0 bg-antes-primary".concat(
        " ",
        className
      )}
    >
      <Card.Body className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <img className="pfp" src={pfp} alt="profile picture" />

          <Table className="d-flex gap-4 mx-5 profile-table justify-content-center align-items-center">
            <tbody>
              <tr>
                <th className="text-end text-light">Naam</th>
                <td className="text-light">{profile?.fullName}</td>
              </tr>
              <tr>
                <th className="text-end text-light">Email</th>
                <td className="text-light">{profile?.email}</td>
              </tr>

              {profile?.role && profile?.role.trim() !== "" && (
                <tr>
                  <th className="text-end text-light">Functie</th>
                  <td className="text-light">{profile?.role}</td>
                </tr>
              )}

              {profile?.dateOfBirth && profile?.dateOfBirth.trim() !== "" && (
                <tr>
                  <th className="text-end text-light">Geboortedatum</th>
                  <td className="text-light">{profile?.dateOfBirth}</td>
                </tr>
              )}

              {profile?.phoneNumber && profile?.phoneNumber.trim() !== "" && (
                <tr>
                  <th className="text-end text-light">Telefoonnummer</th>
                  <td className="text-light">{profile?.phoneNumber}</td>
                </tr>
              )}

              {profile?.department && profile?.department.trim() !== "" && (
                <tr>
                  <th className="text-end text-light">Afdeling</th>
                  <td className="text-light">{profile?.department}</td>
                </tr>
              )}

              <tr>
                <th className="text-end text-light">Lid sinds</th>
                <td className="text-light">{profile?.memberSince}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {profile?.bio && profile?.bio !== "" && (
          <div>
            <strong>Bio</strong>
            <p className="card-text">{profile?.bio}</p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PersonalInfoCard;
