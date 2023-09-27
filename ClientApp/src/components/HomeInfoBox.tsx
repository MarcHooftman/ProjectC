import { Container } from "reactstrap";
import "./Card.scss";


interface Props {
    title: string
    children: any
    footer?: string
}

const HomeInfoBox = ({ title, children, footer = "" }: Props) => {
    return (
        <div className="card mb-3">
            <div className="card-body ">
                <h1 className="card-title text-center">{title}</h1>
                <Container tag="main">{children}</Container>
            </div>
            {footer.length > 0 ? <div className="card-footer"><small className="text-body-secondary">{footer}</small></div> : <h1></h1>}
        </div>
    );
};

export default HomeInfoBox