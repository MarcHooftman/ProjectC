import { Card, Table } from "react-bootstrap";
import IProfile from "./IProfile";

interface Props {
    pfp?: string;
    profile?: IProfile;
}

const PersonalInfoCard = ({ profile, pfp = require("../../assets/profile.png") }: Props) => {
    return (
        <Card className="personalia shadow-lg d-flex">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img className="pfp" src={pfp} alt="profile picture" />

                    <Table className="d-flex gap-4 mx-5 justify-content-end profile-table">
                        <tbody>
                            <tr>
                                <th className="text-end">Naam</th><td>{profile?.fullName}</td>
                            </tr>
                            <tr>
                                <th className="text-end">Functie</th><td>{profile?.role}</td>
                            </tr>
                            <tr>
                                <th className="text-end">Geboortedatum</th><td>{profile?.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <th className="text-end">Email</th><td>{profile?.email}</td>
                            </tr>
                            {profile?.phoneNumber !== '' && (
                                <tr>
                                    <th className="text-end">Telefoonnummer</th><td>{profile?.phoneNumber}</td>
                                </tr>
                            )}
                            <tr>
                                <th className="text-end">Afdeling</th><td>{profile?.department}</td>
                            </tr>
                            <tr>
                                <th className="text-end">Lid sinds</th><td>{profile?.memberSince}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <strong>Bio</strong>
                <p className="card-text">
                    {profile?.bio}
                </p>
            </Card.Body>
        </Card >
    )
}

export default PersonalInfoCard