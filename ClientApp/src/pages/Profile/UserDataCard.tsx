import { Card, Table } from 'react-bootstrap';
import IUserData from './IUserData';
import { useEffect, useState } from 'react';
import IForumPost from '../Forum/IForumPost';
import useFetch from '../../hooks/useFetch';

interface Props {
    profileID: number;
}

const UserDataCard = ({ profileID }: Props) => {
    const [userPosts, setUserPosts] = useState<IForumPost[]>();

    const { loading, data, } = useFetch<IForumPost[]>(`https://localhost:7185/api/forumpost/by-profile/${profileID}`)

    useEffect(() => {
        if (data) {
            console.log(data)
            setUserPosts(data)
        }
    }, [loading])

    const totalLikes = userPosts?.reduce((currentTotal, post) => currentTotal + post?.likes?.length, 0)

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
                            <td className="blue-text">{userPosts?.length}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Comments geplaatst</th>
                            <td className="blue-text">{0}</td>
                        </tr>
                        <tr>
                            <th className="blue-text">Behulpzame comments</th>
                            <td className="blue-text">{0}</td>
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