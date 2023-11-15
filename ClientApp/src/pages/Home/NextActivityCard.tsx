import { useEffect, useState } from "react";
import IActivity from "../Activities/IActivity";
import { Card } from "react-bootstrap";

const clockIcon = require("../../assets/clock-icon.png");

const tempNextActivity = {
  id: 1,
  time: "morgen 13:45",
  location: "nepstraat 123a, rotterdam",
  name: "activiteit naam",
  description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.
  Hic voluptatum autem, voluptates commodi dolorem et quisquam perspiciatis obcaecati tempore rerum. Perferendis dolor fugiat temporibus libero, recusandae, non a sit necessitatibus autem quam ipsum ipsa neque commodi itaque explicabo!
  Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat?
`,
};

const NextActivityCard = () => {
  const [activity, setActivity] = useState<IActivity>();

  useEffect(() => {
    setActivity(tempNextActivity)
  }, []);

  return (
    <Card className="shadow-lg">
      <Card.Header className="d-flex align-items-center gap-3">
        <Card.Img src={clockIcon} className="clock-icon" />
        <div>
          <h2 className="fs-5 m-0">
            <strong>{activity?.name}</strong>
          </h2>
          <h3 className="fs-6 m-0 opacity-50 text-dark">
            {activity?.time}
          </h3>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{activity?.description}</Card.Text>
      </Card.Body>
      <Card.Footer><Card.Text className="text-dark opacity-50">{activity?.location}</Card.Text></Card.Footer>
    </Card>
  );
};

export default NextActivityCard;
