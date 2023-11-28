import { Card, Table } from 'react-bootstrap';
import IForumPost from '../../interfaces/IForumPost';

interface Props {
    posts: IForumPost[];
    className?: string;
}

const UserDataCard = ({ posts, className = "" }: Props) => {

    let totalLikes = 0;
    if (Array.isArray(posts)) {
        totalLikes = posts?.reduce((currentTotal, post) => currentTotal + post?.likes?.length, 0) || 0
    }

    const postsLength = Array.isArray(posts) ? posts.length : 0;
    const commentsPlaced = Array.isArray(posts) ? posts.filter(_ => _.parentID != null).length : 0;
    const helpfulComments = Array.isArray(posts) ? posts.filter(_ => _.parentID != null && _.likes.length > 10).length : 0;


    return (
        <Card className={"user-data shadow-lg".concat(' ', className)}>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">
                    <strong>Overzicht</strong>
                </Card.Title>
                <Table className="profile-table">
                    <tbody>
                        <tr>
                            <th className="blue-text">Posts geplaatst</th>
                            <td className="blue-text">{postsLength}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Comments geplaatst</th>
                            <td className="blue-text">{commentsPlaced}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Behulpzame comments</th>
                            <td className="blue-text">{helpfulComments}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Likes ontvangen</th>
                            <td className="blue-text">{totalLikes}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default UserDataCard