import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu.scss";
import profile from "../../assets/profile-icon-black.svg";
import NavOffcanvas from "./NavOffcanvas";

const LogoRed = require("../../assets/logo-red.png");

const NavMenu = () => {
  return (
    <Navbar
      className="navbar-expand-lg p-3 bg-light d-flex align-items-center shadow sticky-top nav-container"
      container={false}
      role="navmenu"
    >
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <div></div>
      <Nav>
        <NavItem className="d-flex align-items-center profile-icon-container">
          <NavLink tag={Link} to="/profile">
            <img
              className="profile-image gray-image"
              src={profile}
              alt="profiel"
            />
          </NavLink>
        </NavItem>
      </Nav>
      <NavOffcanvas />
    </Navbar>
  );
};

export default NavMenu;
