import { useState } from "react";
import ITraining from "./ITraining";
import { Modal, Card, Badge } from "react-bootstrap";
import "./Training.scss";

interface Props {
    Training?: ITraining;
}

const TrainingInfoCard = ({Training}: Props) => {
    const [showModal, setModelstate] = useState<boolean>();
    return (
        <>
            <Modal show={showModal} onHide={() => {setModelstate(false)}} centered={true} dialogClassName="modalvideo">
                <Modal.Header closeButton>
                <Modal.Title className="fs-2">{Training?.title}<p className="fs-5">{Training?.description}</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe className="video" src={Training?.url} allowFullScreen/>
                </Modal.Body>
            </Modal>
            <Card className="training-card" onClick={() => {setModelstate(true)}}>
                <Card.Header>
                    <Card.Title><h4>{Training?.title}</h4></Card.Title>
                    <div className="d-flex Category gap-2 pb-2 ">
                    {Training?.tags.map((i) => <Badge className="badge-color" text="light" bg="" pill={true}>{i}</Badge>)}
                    </div>
                    <Card.Text>{Training?.description}</Card.Text>
                </Card.Header>     
            </Card>
        </>
    )
}

export default TrainingInfoCard