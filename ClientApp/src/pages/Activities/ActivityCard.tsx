import { useState } from 'react'
import IActivity from './IActivity';

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const clockIcon = require("../../assets/clock-icon.png");

interface Props {
    activity?: IActivity;
    className?: string;
    footer?: string;
}

const ActivityCard = ({ activity, className = "" }: Props) => {
    const [collapse, setCollapse] = useState<boolean>(true);
    return (
        <details id="details" className={"card activity-card px-3".concat(" ", className)}>
            <summary className="d-flex justify-content-between align-items-center p-2" onClick={() => { setCollapse(!collapse) }}>
                <div className='d-flex align-items-center gap-3'>
                    <img className="clock-icon" src={clockIcon} />
                    <div className="date-place-info">
                        <h3 className="date-time fs-4">
                            <strong>{activity?.datetime}</strong>
                        </h3>
                        <h4 className="place-info fs-6">{activity?.location}</h4>
                    </div>
                </div>
                <h2 className="activity-name fs-4">
                    <strong>{activity?.name}</strong>
                </h2>
                <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
            </summary>
            <p>
                {activity?.description}
            </p>
        </details>
    )
}

export default ActivityCard