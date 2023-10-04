//import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HomeInfoBox from "../components/HomeInfoBox";
import { Button } from "reactstrap";
import { useState } from "react";
import ActivityExample from "../components/ActivityExample";

import "./Home.scss";

const lorum =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Layout dark={darkMode}>
      <h1 className="text-left py-5 welcome-title">
        Welkom bij de Onboarding-App van Antes
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 home-cards">
        <div className="col">
          <h3 className="blue-title">Eerstvolgende activiteit</h3>
          <ActivityExample
            className="card header-margin"
            text={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            }
            footer="updated 10 min ago"
          />
        </div>
        <div className="col">
          <h3 className="blue-title">Populaire discussies</h3>
          <HomeInfoBox
            title="Nieuwe klant aanmelden"
            children={lorum}
          ></HomeInfoBox>
        </div>
        <div className="col">
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
