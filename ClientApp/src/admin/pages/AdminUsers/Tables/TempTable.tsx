import ITempUser from '../../../../interfaces/ITempUser';
import { Card, Table } from 'react-bootstrap';

interface Props {
    tempUsers: ITempUser[];
}


const TempTable = ({ tempUsers }: Props) => {
    return (
        <Card className="shadow-lg">
            <Card.Body>
                <Table striped={true} borderless={true} responsive={true}>
                    <thead>
                        <tr>
                            <th className="blue-text">Email</th>
                            <th className="blue-text">Verloopdatum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tempUsers.map((user) => (
                            <tr key={user.id} >
                                <td className="blue-text">{user.email}</td>
                                <td className="blue-text">{user.expirationDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default TempTable