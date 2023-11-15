import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu.scss";
import NavDropDown from "./NavDropDown";

const LogoRed = require("../../assets/logo-red.png");
const profile = require("../../assets/profile.png");

const NavMenu = () => {
  return (
    <Navbar className="navbar-expand-lg p-4 antes-white border-bottom d-flex justify-content-around shadow" container={false}>
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <div></div>
      <Nav>
        <NavItem>
          <NavDropDown />
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            <img className="profile-image antes-red-image" src={profile} alt="profiel" />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;