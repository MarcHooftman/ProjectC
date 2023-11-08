import { Container } from "reactstrap";
import NavMenu from "./NavMenu";

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-color">
      <NavMenu />
      <Container tag="main">{children}</Container>
    </div>
  );
};

export default Layout;
