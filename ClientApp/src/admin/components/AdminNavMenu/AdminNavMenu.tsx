import { Link } from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";
import LogoRed from "../../../assets/logo-red.png";
import { Dropdown } from "react-bootstrap";
const Hamburger = require("../../../assets/hamburger.png");

const AdminNavMenu = () => {
  return (
    <Navbar
      className="navbar-expand-lg p-3 antes-white border-bottom d-flex justify-content-around align-items-center shadow sticky-top"
      container={false}
      role="admin-navmenu"
    >
      <NavbarBrand tag={Link} to="/admin" role="nav-brand">
        <img className="navbar-logo" src={LogoRed} alt="Logo" />
      </NavbarBrand>
      <div></div>
      <Nav role="nav">
        <NavItem>
          <Dropdown role="dropdown">
            <Dropdown.Toggle className="no-after bg-transparent no-border" role="dropdown-toggle">
              <img src={Hamburger} className="hamburger gray-image" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="">
              <Dropdown.Item
                as={Link}
                to="/admin/forum"
                className="fs-5 blue-text"
              >
                Forum
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/admin/activities"
                className="fs-5 blue-text"
              >
                Activiteiten
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/admin/trainings"
                className="fs-5 blue-text"
              >
                Trainingen
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/admin/reports"
                className="fs-5 blue-text"
              >
                Reports
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/admin/users"
                className="fs-5 blue-text"
              >
                Gebruikers
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AdminNavMenu;
