import { Card } from 'react-bootstrap';

const PopPostCard = () => {
    return (
        <Card className="shadow-lg">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="poster-pfp shadow"></div>
                <span className="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
                    <div>
                        <h2 className="fs-5 m-0">
                            <strong>gebruiker12345</strong>
                        </h2>
                        <h3 className="fs-6 m-0 opacity-50 text-dark">
                            lid sinds 2014
                        </h3>
                    </div>
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
                Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat? Ut fugiat expedita excepturi possimus soluta.
                Repudiandae facere reprehenderit consectetur esse molestias recusandae facilis explicabo, adipisci tempore! Velit vitae dignissimos mollitia, tempore sapiente repellat quo sed quam, officiis deserunt possimus eligendi modi. Eligendi quos quibusdam mollitia.
                Hic possimus enim soluta voluptatem quo repellendus maxime doloremque aut eius ipsa tempora obcaecati, sit similique sint tempore quas qui odit. Optio sint ea illum repellendus tenetur sapiente quisquam vero.
            </Card.Body>
            <Card.Footer className="card-footer">
                <span className="opacity-50 text-dark">No comments yet</span>
            </Card.Footer>
        </Card>
    )
}

export default PopPostCard