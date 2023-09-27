import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { Button } from "reactstrap";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Layout dark={darkMode}>
      Hallo <Link to="about">About</Link>
      <Button onClick={() => setDarkMode(!darkMode)}>Switch theme</Button>
    </Layout>
  );
};

export default Home;
