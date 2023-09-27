import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HomeInfoBox from "../components/HomeInfoBox";
import { Button } from "reactstrap";
import { useState } from "react";

const lorum = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Layout dark={darkMode}>
      <h1 className=" title text-center p-5">Welkom bij de Onboarding-App van Antes</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <h3 className="blue-title">Eerstvolgende Activiteit</h3>
          <HomeInfoBox title="Jaarlijkse Training" children={lorum} footer="updated 10 min ago"></HomeInfoBox>
        </div>
        <div className="col">
          <h3 className="blue-title">Populaire discussies</h3>
          <HomeInfoBox title="Nieuwe klant aanmelden" children={lorum}></HomeInfoBox>
        </div>
        <div className="col">
          <h3 className="blue-title">Training</h3>
          <HomeInfoBox title="testing" children="tst"></HomeInfoBox>
        </div>
      </div>
      <Button onClick={() => setDarkMode(!darkMode)}>Switch theme</Button>
    </Layout>
  );
};

export default Home;
