import { useState } from "react";
import { Nav, NavItem, NavLink, Offcanvas } from "react-bootstrap";
import Hamburger from "../../assets/hamburger.svg";

const NavOffcanvas = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div
        className={"d-flex bg-antes-red position-absolute end-0 top-0 hamburger-container".concat(
          " ",
          show ? "hamburger-container-show" : ""
        )}
      >
        <img
          src={Hamburger}
          className="hamburger hover-pointer"
          onClick={() => setShow(!show)}
        />
      </div>
      <Offcanvas
        className="bg-antes-red"
        placement="end"
        show={show}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Header className="border-bottom">
          <img
            src={Hamburger}
            className="hamburger hover-pointer"
            onClick={() => setShow(!show)}
          />
          <Offcanvas.Title as="h2" className="text-light">
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0 pt-3">
          <Nav className="d-flex flex-column">
            {[
              ["/", "Home"],
              ["/forum", "Forum"],
              ["/activities", "Activiteiten"],
              ["/training", "Trainingen"],
              ["/profile", "Profiel"],
              ["/about", "Wie zijn wij"],
            ].map((tuple, index) => (
              <NavItem key={index} className="border-y p-2 ps-3">
                <NavLink
                  className="fs-4 ps-0 py-1 text-light offcanvas-link"
                  href={tuple[0]}
                >
                  {tuple[1]}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffcanvas;
