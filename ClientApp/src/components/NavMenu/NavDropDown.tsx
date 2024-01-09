import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomAuthenticatedTemplate from "../AuthTemplates/CustomAuthenticatedTemplate";
import CustomUnauthenticatedTemplate from "../AuthTemplates/CustomUnauthenticatedTemplate";
import useLogout from "../../hooks/useLogout";

const Hamburger = require("../../assets/hamburger.png");

const NavDropDown = () => {
  const logout = useLogout();
  return (
    <Dropdown role="nav-dropdown">
      <Dropdown.Toggle className="no-after bg-transparent no-border">
        <img src={Hamburger} className="hamburger gray-image" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="">
        <CustomAuthenticatedTemplate>
          <Dropdown.Item as={Link} to="/forum" className="fs-5 blue-text">
            Forum
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/post" className="fs-5 blue-text">
            Nieuwe post
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/activities" className="fs-5 blue-text">
            Activiteiten
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile" className="fs-5 blue-text">
            Profiel
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/training" className="fs-5 blue-text">
            Trainingen
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/about" className="fs-5 blue-text">
            Over ons
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/" className="fs-5 blue-text">
            Home
          </Dropdown.Item>
          <Dropdown.Item onClick={() => logout()} className="fs-5 blue-text">
            Uitloggen
          </Dropdown.Item>
        </CustomAuthenticatedTemplate>
        <CustomUnauthenticatedTemplate>
          <Dropdown.Item as={Link} to="/about" className="fs-5 blue-text">
            Over ons
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/" className="fs-5 blue-text">
            Home
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/login" className="fs-5 blue-text">
            Inloggen
          </Dropdown.Item>
        </CustomUnauthenticatedTemplate>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavDropDown;
