import { Container } from "reactstrap";
import NavMenu from "./NavMenu/NavMenu";
import Footer from "./Footer";

interface Props {
  children?: any;
  centered?: boolean;
}

const Layout = ({ children, centered = false }: Props) => {
  return (
    <>

      <div className="bg-color pb-5">
        <NavMenu />
        <Container tag="main" className={"container".concat(centered ? " d-flex flex-column justify-content-center align-items-center" : "")}>{children}</Container>
      </div>

      <div className="footer bottom-0 w-100">
        <Footer />
      </div>

    </>

  );
};

export default Layout;
