import React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import NavMenu2 from "./NavMenu2";

interface Props {
  dark: boolean;
  children?: any;
}

const Layout = ({ dark, children }: Props) => {
  return (
    <div>
      {dark ? <NavMenu /> : <NavMenu2 />}
      <Container tag="main">{children}</Container>
    </div>
  );
};

export default Layout;
