import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu.scss";
import NavDropDown from "./NavDropDown";

const LogoRed = require("../../assets/logo-red.png");
const profile = require("../../assets/profile.png");

const NavMenu = () => {
  return (
    <Navbar className="navbar-expand-lg p-3 antes-white border-bottom d-flex justify-content-around align-items-center shadow sticky-top" container={false}>
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <div></div>
      <Nav>
        <NavItem className="d-flex align-items-center">
          <NavDropDown />
        </NavItem>
        <NavItem className="d-flex align-items-center">
          <NavLink tag={Link} to="/profile">
            <img className="profile-image antes-red-image" src={profile} alt="profiel" />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;