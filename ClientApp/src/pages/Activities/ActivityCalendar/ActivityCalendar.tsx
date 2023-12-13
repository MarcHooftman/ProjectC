import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import "./ActivityCalendar.scss";
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function ActivityCalendar() {
    const [date, onChange] = useState<Value>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (date instanceof Date) {
            navigate(`/activities?date=${date.toLocaleDateString()}`)
        }
    }, [date])

    return (
        <Card className="shadow-lg">
            <Card.Body>
                <Calendar showNeighboringMonth={false} locale="nl-NL" onChange={onChange} value={date} />
            </Card.Body>
        </Card>

    );
}

export default ActivityCalendar;