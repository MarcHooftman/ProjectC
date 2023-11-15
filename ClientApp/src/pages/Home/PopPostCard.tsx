import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const profilePicture = require("../../assets/profile.png")

const PopPostCard = () => {
    return (
        <Link to="/forum" className="text-decoration-none">
            <Card className="shadow-lg">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <Link to="/profile" className="poster-pfp">
                        <Card.Img src={profilePicture}></Card.Img>
                    </Link>
                    <span className="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
                        <Link to="/profile" className="text-decoration-none blue-text">
                            <h2 className="fs-5 m-0">
                                <strong>gebruiker12345</strong>
                            </h2>
                            <h3 className="fs-6 m-0 opacity-50 text-dark">
                                lid sinds 2014
                            </h3>
                        </Link>
                        <span className="d-flex gap-2">
                            <a href="/forum?filter=tag1" className="tag btn btn-primary btn-sm shadow">Tag 1</a>
                            <a href="/forum?filter=tag2" className="tag btn btn-primary btn-sm shadow">Tag 2</a>
                            <a href="/forum?filter=tag3" className="tag btn btn-primary btn-sm shadow">Tag 3</a>
                        </span>
                        <span className="opacity-50 text-dark">3 uur geleden</span>
                    </span>
                </Card.Header>
                <Card.Body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.
                    Hic voluptatum autem, voluptates commodi dolorem et quisquam perspiciatis obcaecati tempore rerum. Perferendis dolor fugiat temporibus libero, recusandae, non a sit necessitatibus autem quam ipsum ipsa neque commodi itaque explicabo!
                    Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat?
                </Card.Body>
                <Card.Footer className="card-footer">
                    <span className="opacity-50 text-dark">No comments yet</span>
                </Card.Footer>
            </Card>
        </Link>
    )
}

export default PopPostCard