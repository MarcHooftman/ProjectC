import { Link } from "react-router-dom";
import { NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "./NavMenu.scss";

const LogoWhite = require("../assets/logo-white.png");

const NavMenu = () => {
  return (
    <Navbar className="navbar navbar-expand-lg antes-red p-4">
      <NavbarBrand tag={Link} to="/">
        <img className="navbar-logo" src={LogoWhite} alt="Logo" />
      </NavbarBrand>
      <ul className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} className="text-light" to="/activities">
            Activiteiten
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light" to="/about">
            Over ons
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light" to="/forum">
            Forum
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light" to="/profile">
            Profiel
          </NavLink>
        </NavItem>
      </ul>
    </Navbar>
  );
};

export default NavMenu;
