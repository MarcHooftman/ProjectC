import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import NavMenu2 from "./NavMenu2";

interface Props {
  dark?: boolean;
  children?: any;
}

const Layout = ({ dark = false, children }: Props) => {
  return (
    <div className="bg-color">
      {dark ? <NavMenu /> : <NavMenu2 />}
      <Container tag="main">{children}</Container>
    </div>
  );
};

export default Layout;
