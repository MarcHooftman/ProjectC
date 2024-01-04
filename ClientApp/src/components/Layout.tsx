import { Container } from "reactstrap";
import NavMenu from "./NavMenu/NavMenu";
import Footer from "./Footer";

interface Props {
  children?: any;
  centered?: boolean;
  cover?: React.ReactNode;
  role?: string;
}

const Layout = ({ children, cover, centered = false, role = "" }: Props) => {
  return (
    <>
      <div className="bg-color pb-5 vw-100" role="layout">
        <NavMenu />
        {cover || <></>}
        <Container
          role={role}
          tag="main"
          className={centered ? " d-flex flex-column align-items-center" : ""}
        >
          {children}
        </Container>
      </div>

      <div className="footer bottom-0 w-100">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
