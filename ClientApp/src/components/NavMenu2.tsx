import { Link } from "react-router-dom";
import { NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu2.scss";

const LogoRed = require("../assets/logo-red.png");

const NavMenu2 = () => {
  return (
    <Navbar className="navbar navbar-expand-lg p-4 border-bottom">
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <ul className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} className="red-link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="red-link" to="/about">
            Over ons
          </NavLink>
        </NavItem>
      </ul>
    </Navbar>
  );
};

export default NavMenu2;