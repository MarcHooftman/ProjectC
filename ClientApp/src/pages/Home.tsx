import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hallo <Link to="about">About</Link>
    </div>
  );
};

export default Home;
