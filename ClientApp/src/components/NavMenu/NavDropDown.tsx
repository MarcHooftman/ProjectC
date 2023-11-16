import { Dropdown } from "react-bootstrap";

const Hamburger = require("../../assets/hamburger.png");

const NavDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="no-after bg-transparent no-border">
        <img src={Hamburger} className="hamburger antes-red-image" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="">
        <Dropdown.Item href="/forum" className="fs-5 blue-text">
          Forum
        </Dropdown.Item>
        <Dropdown.Item href="/post" className="fs-5 blue-text">
          Nieuwe post
        </Dropdown.Item>
        <Dropdown.Item href="/activities" className="fs-5 blue-text">
          Activiteiten
        </Dropdown.Item>
        <Dropdown.Item href="/profile" className="fs-5 blue-text">
          Profiel
        </Dropdown.Item>
        <Dropdown.Item href="/login" className="fs-5 blue-text">
          Login
        </Dropdown.Item>
        <Dropdown.Item href="/register" className="fs-5 blue-text">
          Registreren
        </Dropdown.Item>
        <Dropdown.Item href="/training" className="fs-5 blue-text">
          Trainingen
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/about" className="fs-5 blue-text">
          Over ons
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavDropDown;
