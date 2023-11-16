import { Container } from "reactstrap";
import NavMenu from "./NavMenu/NavMenu";
import Footer from "./Footer";
import Cover from "./Cover/Cover";

interface Props {
  children?: any;
  centered?: boolean;
  cover?: React.ReactNode;
}

const Layout = ({ children, cover, centered = false, }: Props) => {
  return (
    <>

      <div className="bg-color pb-5">
        <NavMenu />
        {cover || <></>}
        <Container tag="main" className={centered ? " d-flex flex-column align-items-center" : ""}>{children}</Container>
      </div>

      <div className="footer bottom-0 w-100">
        <Footer />
      </div>

    </>

  );
};

export default Layout;
