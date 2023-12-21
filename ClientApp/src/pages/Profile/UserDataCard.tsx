import { Card, Table } from 'react-bootstrap';
import IForumPost from '../../interfaces/IForumPost';
import { filterHelpfulComment, filterOnlyParent } from '../../utils/sortPosts';

interface Props {
    posts: IForumPost[];
    className?: string;
}

const UserDataCard = ({ posts, className = "" }: Props) => {

    let totalLikes = 0;
    if (Array.isArray(posts)) {
        totalLikes = posts?.reduce((currentTotal, post) => currentTotal + post?.likes?.length, 0) || 0
    }

    const postsLength = Array.isArray(posts) ? filterOnlyParent(posts).length : 0;
    const commentsPlaced = Array.isArray(posts) ? posts.length - filterOnlyParent(posts).length : 0;
    const helpfulComments = Array.isArray(posts) ? filterHelpfulComment(posts).length : 0;


    return (
        <Card className={"user-data shadow-lg bg-antes-primary".concat(' ', className)}>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">
                    <strong>Overzicht</strong>
                </Card.Title>
                <Table className="profile-table">
                    <tbody>
                        <tr>
                            <th className="text-light">Posts geplaatst</th>
                            <td className="text-light">{postsLength}</td>
                        </tr>
                        <tr>
                            <th className="text-light">Comments geplaatst</th>
                            <td className="text-light">{commentsPlaced}</td>
                        </tr>
                        <tr>
                            <th className="text-light">Behulpzame comments</th>
                            <td className="text-light">{helpfulComments}</td>
                        </tr>
                        <tr>
                            <th className="text-light">Likes ontvangen</th>
                            <td className="text-light">{totalLikes}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default UserDataCard