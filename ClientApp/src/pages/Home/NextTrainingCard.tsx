import { Badge, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const NextTrainingCard = () => {
    return (
        <Card as={Link} to="/training" className="shadow-lg text-decoration-none">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="mb-0">Naam van training</Card.Title>
                <div className="d-flex gap-2">
                    <Link to="/training?filter=tag1">
                        <Badge className="badge-color" text="light" pill={true}>Tag 1</Badge>
                    </Link>
                    <Link to="/training?filter=tag2">
                        <Badge className="badge-color" text="light" pill={true}>Tag 2</Badge>
                    </Link>
                    <Link to="/training?filter=tag3">
                        <Badge className="badge-color" text="light" pill={true}>Tag 3</Badge>
                    </Link>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias unde error debitis necessitatibus, facere quos velit reprehenderit aperiam, iure natus magnam eaque blanditiis aspernatur dolore, omnis odio magni cum fuga.
                    Vel quas, temporibus debitis esse iste in, sunt vitae officiis, aut ducimus asperiores dolorum nostrum omnis atque distinctio aspernatur deserunt dicta possimus voluptatem blanditiis. Suscipit cumque iusto id enim labore?
                    Aliquam dignissimos dolores sed cum deleniti veritatis esse dolorum quisquam fugiat omnis rem cupiditate, provident adipisci dolorem fugit libero. Quos adipisci debitis quidem consequuntur placeat! Fugit officiis accusantium alias explicabo!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NextTrainingCard