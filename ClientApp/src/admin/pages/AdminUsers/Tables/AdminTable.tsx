import { Card, Table } from 'react-bootstrap'
import IAdmin from '../../../../interfaces/IAdmin';

interface Props {
    admins: IAdmin[];
}

const AdminTable = ({ admins }: Props) => {
    return (
        <Card className="shadow-lg">
            <Card.Body>
                <Table striped={true} borderless={true} responsive={true}>
                    <thead>
                        <tr>
                            <th className="blue-text">Email</th>
                            <th className="blue-text">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.id} >
                                <td className="blue-text">{admin.email}</td>
                                <td className="blue-text">{admin.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default AdminTable