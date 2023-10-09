//import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import HomeInfoBox from "../../components/HomeInfoBox";
import { Button } from "reactstrap";
import { useState } from "react";
//import ActivityExample from "../components/ActivityExample";

import "./Home.scss";
import NextActivityCard from "../Activities/NextActivityCard";

const tempNextActivity = {
  datetime: "morgen 13:45",
  location: "nepstraat 123a, rotterdam",
  name: "activiteit naam",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
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
sit eius dignissimos enim a atque cum.`,
};

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Layout dark={darkMode}>
      <h1 className="text-left py-5 welcome-title">
        Welkom bij de Onboarding-App van Antes
      </h1>
      <div className="d-flex justify-content-between align-items-start gap-4">
        <div className="next-activity-container">
          <h3 className="blue-title">Eerstvolgende activiteit</h3>
          <NextActivityCard
            activity={tempNextActivity}
            disabled={true}
            footer="updated 10 min ago"
            fontSize={4}
          />
        </div>
        <div className="pop-forum-post-container">
          <h3 className="blue-title">Populaire discussies</h3>
          <HomeInfoBox
            title="Nieuwe klant aanmelden"
            //children={lorum}
          ></HomeInfoBox>
        </div>
        <div className="training-container">
          <h3 className="blue-title">Training</h3>
          <HomeInfoBox title="testing">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptatem, fugiat, aperiam doloribus repellat animi magni corporis,
            velit ab fuga ullam nobis? Temporibus fuga maiores quo obcaecati
            adipisci porro accusantium? Temporibus, modi. Eum, sequi
            necessitatibus. Accusamus, labore et fugit, eius id vero quae
            pariatur repudiandae, itaque magnam neque. Aliquam, laborum. Ea
            delectus doloribus, earum enim sunt incidunt nobis quasi dolorum!
            Dicta consequatur inventore, harum perferendis ea amet rerum nisi
            laudantium voluptatem repellat reiciendis? Aut, totam. Dolor
            consequuntur, itaque eum corrupti nulla aspernatur quidem temporibus
            veniam voluptate! Ad atque maxime molestias. Laboriosam non, quidem
            quod aperiam libero earum deleniti natus odit beatae nisi eum
            commodi porro temporibus quos impedit doloremque nulla maiores
            labore ad autem minima dolore, aut vel. Laboriosam, tempore. At
            minus doloribus reiciendis odio rem ab ex est esse officia ipsam,
            sequi a consequatur adipisci repellendus aperiam aut eveniet sunt
            quidem omnis praesentium ullam voluptate maiores! Eveniet, illo
            nobis! Voluptate molestiae nam veritatis error perspiciatis iste eum
            ipsam non exercitationem quia, laborum voluptatum minima iure?
            Consectetur temporibus aperiam maxime animi non obcaecati, ea,
            voluptatibus, quo cupiditate adipisci asperiores iusto. Amet
            necessitatibus optio dolorum, velit saepe odit explicabo delectus
            numquam tenetur. Tenetur, quos magnam laborum magni nam commodi
            nobis ea nesciunt dolorem, modi quia officia vero a non dolore
            illum? Delectus adipisci, mollitia soluta earum at autem saepe
            itaque aliquid fugit, architecto corporis expedita minus eum dolores
            in. Soluta nam veritatis iusto explicabo. Placeat consequuntur quos
            iste magni doloremque dolore? Quae deserunt molestias voluptatibus,
            commodi placeat inventore quia accusamus nesciunt cupiditate?
            Obcaecati nesciunt voluptates fugiat ex, incidunt qui voluptatibus
            architecto repellendus harum possimus cumque quae eos voluptas
            impedit natus in. Voluptas omnis a ea quaerat minus reiciendis neque
            vel atque maiores eaque, corrupti sit aspernatur voluptatibus
            debitis nemo nesciunt, blanditiis laudantium adipisci! Adipisci
            perferendis nostrum minus repudiandae et? Veritatis, ipsum.
          </HomeInfoBox>
        </div>
      </div>
      <Button onClick={() => setDarkMode(!darkMode)}>Switch theme</Button>
    </Layout>
  );
};

export default Home;
