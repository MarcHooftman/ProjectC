import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>

      <div className="bg-color pb-5">
        <NavMenu />
        <Container tag="main" className="container">{children}</Container>
      </div>

      <div className="footer bottom-0 w-100">
        <Footer />
      </div>

    </>

  );
};

export default Layout;
