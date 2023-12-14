import IActivity from "../../interfaces/IActivity";
import IProfile from "../../interfaces/IProfile";
import useGraphData from "../../hooks/useGraphData";
import { useEffect, useState } from "react";
import { Card, Modal, Form } from "react-bootstrap";
import { formatDateTimeLong } from "../../utils/formatDate";


interface Props {
    activity?: IActivity;
    className?: string;
}

const ActivityCard = ({ activity, className = "" }: Props) => {
    const [showModal, setModalstate] = useState<boolean>();

    const { graphData } = useGraphData();
    const [AttendingActivity, setAttendingActivity] = useState<boolean>(false);

    const [profile, setProfile] = useState<IProfile>();
    useEffect(() => {
        if (graphData) {
            fetch(
                `${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`
            )
                .then((response) => response.json())
                .then((data) => {
                    const profileData = data as IProfile;
                    setProfile(profileData);
                });
        }
    }, [graphData]);

    return (
        <>
            <Modal show={showModal} onHide={() => { setModalstate(false) }} centered={true} dialogClassName="activity-modal">
                <Modal.Header closeButton>
                    <div className="d-flex flex-column"><Modal.Title className="fs-2 blue-text">
                        {activity?.title}
                    </Modal.Title>
                        <p className="fs-5 blue-text mb-0">{formatDateTimeLong(activity?.time || "0001-01-01")}</p>
                        <p className="fs-6 blue-text mb-0 text-dark opacity-50">{activity?.location}</p>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    {activity?.description}
                </Modal.Body>
                <Modal.Footer>
                    <Form.Switch id="customSwitch" label="Deelnemen" onChange={() => setAttendingActivity(!AttendingActivity)} checked={AttendingActivity}></Form.Switch>
                </Modal.Footer>
            </Modal>
            <Card className={className.concat(" ", "hover-pointer h-100")} onClick={() => setModalstate(!showModal)}>
                <Card.Header>
                    <Card.Title><strong>{activity?.title}</strong></Card.Title>
                    <Card.Subtitle>{formatDateTimeLong(activity?.time || "0001-01-01")}</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{activity?.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-dark opacity-50">{activity?.location}</Card.Footer>
            </Card>
        </>
    );

};

export default ActivityCard;
