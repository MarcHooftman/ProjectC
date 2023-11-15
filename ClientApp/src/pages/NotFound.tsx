import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Layout dark={false}>

            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 className="display-4 blue-title">Oops! Je lijkt verdwaald te zijn.</h1>
                        <p className="lead blue-title">De pagina die je zoekt, bestaat niet.</p>
                        <div className="card">
                            <div className="card-body">
                                <p>Hier zijn wat handige links:</p>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <Link to='/' className="btn btn-primary">Home</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to='/login' className="btn btn-secondary">Inloggen</Link>
                                    </li>
                                    <li>
                                        <Link to='/about' className="btn btn-secondary">Over Ons</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default NotFound;