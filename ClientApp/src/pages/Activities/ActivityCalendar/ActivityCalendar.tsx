import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import "./ActivityCalendar.scss";
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import IActivity from '../../../interfaces/IActivity';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
    activities?: IActivity[];
}

function ActivityCalendar({ activities = [] }: Props) {
    const [date, onChange] = useState<Value>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (date instanceof Date) {
            navigate(`/activities?date=${date.toLocaleDateString()}`)
        }
    }, [date])

    const tileContent = ({ date }: { date: Date }) => {
        let activitiesOnThisDay = activities.filter(activity => {
            const activityDate = new Date(activity.time);
            return activityDate.getDate() === date.getDate() &&
                activityDate.getMonth() === date.getMonth() &&
                activityDate.getFullYear() === date.getFullYear();
        });

        if (activitiesOnThisDay.length === 0) return null;
        if (activitiesOnThisDay.length > 2) {
            activitiesOnThisDay = activitiesOnThisDay.slice(0, 2);
        }

        return activitiesOnThisDay.map((activity, index) => {
            return (
                <span key={index} className="d-flex align-items-center gap-1 tile-activity-line">
                    <div className="tile-activity-dot"></div>
                    <b key={activity.id} className="tile-activity-title">{activity.title}</b>
                </span>
            )
        });

    };

    return (
        <Card className="shadow-lg">
            <Card.Body>
                <Calendar tileContent={tileContent} showNeighboringMonth={false} locale="nl-NL" onChange={onChange} value={date} />
            </Card.Body>
        </Card>

    );
}

export default ActivityCalendar;