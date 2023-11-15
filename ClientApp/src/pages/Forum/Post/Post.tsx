import './Post.scss'
import React from 'react'
import Layout from '../../../components/Layout'
import { Button, Card } from 'react-bootstrap'
import TextInputWithCounter from './PostCharCount'
import TagInput from './TagsToevoegen'


const Post = () => {
    return (

        <Layout>
            <Card className="shadow-lg">
                <Card.Body>
                    <Card.Title>Nieuw bericht</Card.Title>
                    <form className='d-flex flex-column p-3'>
                        <input placeholder='Titel' style={{ marginBottom: '0.5rem' }} />
                        <TextInputWithCounter maxLength={300} />
                        <TagInput />
                    </form>
                    <Button className='ml-4 small-width-button' variant="primary" type="submit">
                        Post
                    </Button>

                </Card.Body>
            </Card>

        </Layout>
    )
}

export default Post