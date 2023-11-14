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
                            <th>Posts geplaatst</th>
                            <td>{userData?.postsPlaced}</td>
                        </tr>
                        <tr>
                            <th>Comments geplaatst</th>
                            <td>{userData?.commentsPlaced}</td>
                        </tr>
                        <tr>
                            <th>Behulpzame comments</th>
                            <td>{userData?.helpfulComments}</td>
                        </tr>
                        <tr>
                            <th>Likes ontvangen</th>
                            <td>{userData?.totalLikes}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default UserDataCard