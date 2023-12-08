import { Card, Table } from "react-bootstrap";
import IProfile from "../../interfaces/IProfile";

interface Props {
    pfp?: string;
    profile?: IProfile | null;
    className?: string;
}

const PersonalInfoCard = ({ profile, pfp = require("../../assets/profile.png"), className = '' }: Props) => {
    //console.log(graphData)
    return (
        <Card className={"personalia shadow-lg d-flex".concat(" ", className)}>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img className="pfp" src={pfp} alt="profile picture" />

                    <Table className="d-flex gap-4 mx-5 justify-content-end profile-table">
                        <tbody>
                            <tr>
                                <th className="text-end blue-text">Naam</th><td className="blue-text">{profile?.fullName}</td>
                            </tr>
                            <tr>
                                <th className="text-end blue-text">Email</th><td className="blue-text">{profile?.email}</td>
                            </tr>

                            {profile?.role && profile?.role.trim() !== "" &&
                                <tr>
                                    <th className="text-end blue-text">Functie</th><td className="blue-text">{profile?.role}</td>
                                </tr>
                            }


                            {profile?.dateOfBirth && profile?.dateOfBirth.trim() !== "" &&
                                <tr>
                                    <th className="text-end blue-text">Geboortedatum</th><td className="blue-text">{profile?.dateOfBirth}</td>
                                </tr>
                            }

                            {profile?.phoneNumber && profile?.phoneNumber.trim() !== "" &&
                                <tr>
                                    <th className="text-end blue-text">Telefoonnummer</th><td className="blue-text">{profile?.phoneNumber}</td>
                                </tr>
                            }

                            {profile?.department && profile?.department.trim() !== "" &&
                                <tr>
                                    <th className="text-end blue-text">Afdeling</th><td className="blue-text">{profile?.department}</td>
                                </tr>
                            }

                            <tr>
                                <th className="text-end blue-text">Lid sinds</th><td className="blue-text">{profile?.memberSince}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {profile?.bio && profile?.bio !== '' &&
                    <>
                        <strong>Bio</strong>
                        <p className="card-text">
                            {profile?.bio}
                        </p>
                    </>
                }

            </Card.Body>
        </Card >
    )
}

export default PersonalInfoCard