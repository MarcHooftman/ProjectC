import { Card, Form } from 'react-bootstrap'
import AdminLayout from '../../../components/AdminLayout/AdminLayout'

const AdminAddAdmin = () => {
    return (
        <AdminLayout centered={true}><h1 className="my-5 blue-text">Beheerder rechten geven</h1>
            <Card className="shadow-lg">
                <Card.Body className="p-4">
                    <Form>
                        <Form.FloatingLabel controlId="floatingInput" label="Email">
                            <Form.Control type="email" id="floatingInput" placeholder='' />
                        </Form.FloatingLabel>
                    </Form>
                </Card.Body>
            </Card>
        </AdminLayout>
    )
}

export default AdminAddAdmin