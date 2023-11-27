import './Post.scss'
import Layout from '../../../components/Layout'
import { Button, Card } from 'react-bootstrap'
import TextInputWithCounter from '../../../components/TextInputWithCounter'
import TagInput from './TagsToevoegen'
import { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import IForumPost from '../../../interfaces/IForumPost'
import IProfile from '../../../interfaces/IProfile'


const Post = () => {


    const [profile, setProfile] = useState<IProfile>();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const { loading, data } = useFetch(`https://localhost:7185/api/profile/by-user/${localStorage.getItem("user")}`);

    useEffect(() => {
        if (data) {
            setProfile(data);
        }
    }, [loading])

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const onContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setContent(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const post = {
            Title: title,
            Content: content,
            Tags: tags,
            Profile: profile,
            Time: new Date().toISOString(),
            Comments: [],
            Likes: [],
            Reports: []
        }

        fetch("https://localhost:7185/api/forumpost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
    }

    return (

        <Layout>
            <h1 className="my-5 blue-text">Post plaatsen</h1>
            <Card className="shadow-lg">
                <Card.Body>
                    <Card.Title>Nieuw bericht</Card.Title>
                    <form className='d-flex flex-column p-3 gap-2' onSubmit={handleSubmit}>
                        <input placeholder='Titel' className="" onChange={onTitleChange} />
                        <TextInputWithCounter maxLength={300} onChange={onContentChange} />
                        <TagInput onChange={(taglist) => setTags(taglist)} />
                        <Button className="w-25 mt-4" variant="primary" type="submit">
                            Post
                        </Button>
                    </form>
                </Card.Body>
            </Card>

        </Layout>
    )
}

export default Post