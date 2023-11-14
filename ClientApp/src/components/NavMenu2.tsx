import { Link } from "react-router-dom";
import { NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu2.scss";

const LogoRed = require("../assets/logo-red.png");
const profile = require("../assets/profile-icon.png");

const NavMenu2 = () => {
    return (
        <Navbar className="navbar navbar-expand-lg p-4 antes-white border-bottom">
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <ul className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} className="red-link fs-3" to="/activities">
            Activiteiten
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="red-link fs-3 ms-3" to="/about">
            Over ons
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="red-link fs-3 ms-3" to="/forum">
            Forum
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="red-link fs-3 ms-3" to="/training">
            Training
          </NavLink>
        </NavItem>
        <NavItem>
          <NavbarBrand tag={Link} to="/profile">
            <img className="profile-image" src={profile} alt="profiel" />
          </NavbarBrand>
        </NavItem>
      </ul>
    </Navbar>
  );
};

export default NavMenu2;
