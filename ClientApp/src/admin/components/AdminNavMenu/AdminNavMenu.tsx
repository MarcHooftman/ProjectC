import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import LogoRed from "../../../assets/logo-red.png";

const AdminNavMenu = () => {
  return (
    <Navbar
      className="navbar-expand-lg p-3 antes-white border-bottom d-flex justify-content-around align-items-center shadow sticky-top"
      container={false}
    >
      <NavbarBrand tag={Link} to="/admin">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <div></div>
      <Nav>
        <NavItem>
          <NavLink tag={Link} to="/admin">
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AdminNavMenu;
