import { Link } from "react-router-dom";
import { NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu.scss";

const LogoWhite = require("../assets/logo-white.png");
const profile = require("../assets/profile-icon.png");

const NavMenu = () => {
  return (
    <Navbar className="navbar navbar-expand-lg antes-red p-4">
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoWhite} alt="Logo" />
      </NavbarBrand>
      <ul className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} className="text-light fs-3" to="/activities">
            Activiteiten
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light fs-3 ms-3" to="/about">
            Over ons
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light fs-3 ms-3" to="/forum">
            Forum
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

export default NavMenu;
