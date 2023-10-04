import { useState } from "react";

import ActivityExample from "../components/ActivityExample";
import Layout from "../components/Layout";

import "./Activities.scss";
import { Collapse } from "reactstrap";

const upArrow = require("../assets/up-arrow.png");
const downArrow = require("../assets/down-arrow.png");
const clockIcon = require("../assets/clock-icon.png");

const Activities = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <Layout>
      <h1 className="activities-title my-5">Activiteiten</h1>
      <div className="upcoming-activity">
        <div className="upcoming-activity-header">
          <img className="clock-icon" src={clockIcon} />
          <div className="date-place-info">
            <h3 className="date-time">
              <strong>morgen 13:45</strong>
            </h3>
            <h4 className="place-info">Nepstraat 123a</h4>
          </div>
          <h2 className="activity-name">
            <strong>Activiteit naam</strong>
          </h2>
          <button
            className="collapse-button"
            onClick={() => setCollapse(!collapse)}
          >
            <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
          </button>
        </div>
        <Collapse
          className="upcoming-activity-description p-3"
          isOpen={!collapse}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
            doloremque dicta dolores nulla suscipit quibusdam magni itaque
            blanditiis labore, iusto recusandae rerum delectus provident alias
            assumenda commodi ab quisquam! Nobis recusandae quos cupiditate
            culpa maxime, incidunt possimus dolorem eveniet reprehenderit
            deleniti ab quisquam asperiores magni ipsum tenetur nam repellendus
            eligendi perferendis magnam? Ab officia ad soluta distinctio aperiam
            maxime! Deserunt exercitationem libero maxime quaerat nobis eaque
            nemo tempore dolor, numquam et minus qui delectus sapiente
            voluptates laudantium! Quidem suscipit, a natus tenetur voluptatem
            impedit nam dolore obcaecati minima cumque? Eligendi, consequuntur
            pariatur provident quia eum placeat perferendis asperiores quo
            dignissimos accusamus temporibus, sunt, enim neque doloremque. Ullam
            quo, obcaecati, voluptatem omnis delectus vero repudiandae
            praesentium earum, ab hic unde! Ab delectus modi illum repellendus
            ad aspernatur corporis quasi. Minus aliquam sapiente harum
            voluptatibus et vitae ratione totam sunt explicabo. Optio iusto
            aliquid officia quo, eveniet quasi alias quisquam animi! Qui,
            voluptatum labore ex assumenda quas voluptates eius mollitia
            veritatis deleniti repellendus autem! Deleniti voluptas quisquam
            officia vero quasi voluptates accusamus natus possimus ratione
            molestias ea pariatur, a soluta quos. Eos nesciunt expedita ab, ea
            incidunt nihil distinctio esse qui modi maxime similique provident
            repudiandae, non earum doloremque dolorem ipsum dicta quis harum
            facilis debitis hic? Molestias ad eligendi debitis! At dolorum fuga
            vero culpa molestiae nesciunt quisquam? Corrupti non delectus quia
            sit eius dignissimos enim a atque cum.
          </p>
        </Collapse>
      </div>
      <h2 className="misc-activities my-4">Overige activiteiten</h2>
      <div className="misc-activities-container mb-5">
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
        <ActivityExample className="p-3" />
      </div>
    </Layout>
  );
};

export default Activities;
