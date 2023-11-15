import { Card, Table } from 'react-bootstrap';
import IUserData from './IUserData';

interface Props {
    userData?: IUserData;
}

const UserDataCard = ({ userData }: Props) => {
    return (
        <Card className="user-data shadow-lg">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">
                    <strong>Overzicht</strong>
                </Card.Title>
                <Table className="profile-table">
                    <tbody>
                        <tr>
                            <th className="blue-text">Posts geplaatst</th>
                            <td className="blue-text">{userData?.postsPlaced}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Comments geplaatst</th>
                            <td className="blue-text">{userData?.commentsPlaced}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Behulpzame comments</th>
                            <td className="blue-text">{userData?.helpfulComments}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Likes ontvangen</th>
                            <td className="blue-text">{userData?.totalLikes}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default UserDataCard