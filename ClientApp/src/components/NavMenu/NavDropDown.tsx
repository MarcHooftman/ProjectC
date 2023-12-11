import { Dropdown } from "react-bootstrap";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/msalUtils";

const Hamburger = require("../../assets/hamburger.png");

const NavDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="no-after bg-transparent no-border">
        <img src={Hamburger} className="hamburger gray-image" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="">
        <AuthenticatedTemplate>
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
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
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
        </UnauthenticatedTemplate>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavDropDown;
