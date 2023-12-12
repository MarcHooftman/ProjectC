import { Card, Table } from "react-bootstrap";
import IProfile from "../../../../interfaces/IProfile";

interface Props {
    profiles: IProfile[];
}

const EmployeeTable = ({ profiles }: Props) => {
    return (
        <Card className="shadow-lg">
            <Card.Body>
                <Table striped={true} borderless={true} responsive={true}>
                    <thead>
                        <tr>
                            <th className="blue-text">Naam</th>
                            <th className="blue-text">Functie</th>
                            <th className="blue-text">Email</th>
                            <th className="blue-text">Lid sinds</th>
                            <th className="blue-text">Afdeling</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profiles.map((profile) => (
                            <tr key={profile.id} >
                                <td className="blue-text">{profile.fullName}</td>
                                <td className="blue-text">{profile.role}</td>
                                <td className="blue-text">{profile.email}</td>
                                <td className="blue-text">{profile.memberSince}</td>
                                <td className="blue-text">{profile.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default EmployeeTable