import './Post.scss'
import Layout from '../../../components/Layout'
import { Button, Card } from 'react-bootstrap'
import TextInputWithCounter from '../../../components/TextInputWithCounter'
import TagInput from './TagsToevoegen'


const Post = () => {


    return (

        <Layout>
            <h1 className="my-5 blue-text">Post plaatsen</h1>
            <Card className="shadow-lg">
                <Card.Body>
                    <Card.Title>Nieuw bericht</Card.Title>
                    <form className='d-flex flex-column p-3'>
                        <input placeholder='Titel' style={{ marginBottom: '0.5rem' }} />
                        <TextInputWithCounter maxLength={300} />
                        <TagInput />
                        <Button className='ml-4 small-width-button' variant="primary" type="submit">
                            Post
                        </Button>
                    </form>
                </Card.Body>
            </Card>

        </Layout>
    )
}

export default Post