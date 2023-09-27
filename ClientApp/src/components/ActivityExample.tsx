import "./ActivityExample.scss"

const clockIcon = require("../assets/clock-icon.png");

const ActivityExample = () => {
    return <div className="example-activity">
        <div className="example-activity-header">
            <img className="clock-icon" src={clockIcon} />
            <div className="date-place-info">
                <h3 className="date-time"><strong>2-10-2023 18:00</strong></h3>
                <h4 className="place-info">Kalverstraat 33b</h4>
            </div>
            <h2 className="activity-name"><strong>Activiteit naam</strong></h2>
        </div>

        <p className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque doloremque dicta dolores nulla suscipit quibusdam magni itaque blanditiis labore, iusto recusandae rerum delectus provident alias assumenda commodi ab quisquam!
        </p>
    </div>
}

export default ActivityExample;