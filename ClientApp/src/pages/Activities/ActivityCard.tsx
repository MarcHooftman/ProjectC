import IActivity from "../../interfaces/IActivity";
import IProfile from "../../interfaces/IProfile";
import useGraphData from "../../hooks/useGraphData";
import { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";


interface Props {
    activity?: IActivity;
    className?: string;
}

const ActivityCard = ({ activity, className = "" }: Props) => {
    const { graphData } = useGraphData();

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

    const [showModal, setModalstate] = useState<boolean>();
    console.log(activity);

    let formattedDate = "";

    if (activity?.time !== undefined) {
        formattedDate = new Date(activity.time).toLocaleString("nl-NL", { weekday: "short", year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }

    return (
        <>
            <Modal show={showModal} onHide={() => { setModalstate(false) }} centered={true} dialogClassName="activity-modal">
                <Modal.Header closeButton>
                    <div className="d-flex flex-column"><Modal.Title className="fs-2 blue-text">
                        {activity?.title}
                    </Modal.Title>
                        <p className="fs-5 blue-text mb-0">{formattedDate}</p>
                        <p className="fs-6 blue-text mb-0 text-dark opacity-50">{activity?.location}</p>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    {activity?.description}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={async () => {
                            if (profile?.id && activity?.id) {
                                const response = await fetch(`${process.env.REACT_APP_API_URL}/activities/${activity.id}/attendees/${profile.id}`, {
                                    method: 'PUT',
                                });

                                console.log(response);

                                if (response.ok) {
                                    console.log('Profile added to attending list');
                                } else {
                                    console.error('Failed to add profile to attending list:', response.statusText);
                                }
                            }
                        }}

                    >
                        Geïnteresseerd
                    </button>
                </Modal.Footer>
            </Modal>
            <Card className={className.concat(" ", "hover-pointer h-100")} onClick={() => setModalstate(!showModal)}>
                <Card.Header>
                    <Card.Title><strong>{activity?.title}</strong></Card.Title>
                    <Card.Subtitle>{formattedDate}</Card.Subtitle>
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
