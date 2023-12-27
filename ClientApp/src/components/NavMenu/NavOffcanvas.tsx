import { useState } from "react";
import { Nav, NavItem, NavLink, Offcanvas } from "react-bootstrap";
import Hamburger from "../../assets/hamburger.svg";
import CustomAuthenticatedTemplate from "../AuthTemplates/CustomAuthenticatedTemplate";
import { UnauthenticatedTemplate } from "@azure/msal-react";
import useLogout from "../../hooks/useLogout";

const NavOffcanvas = () => {
  const [show, setShow] = useState<boolean>(false);
  const logout = useLogout();
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
            <CustomAuthenticatedTemplate>
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
              <NavItem className="border-y p-2 ps-3">
                <NavLink
                  className="fs-4 ps-0 py-1 text-light offcanvas-link"
                  onClick={() => logout()}
                >
                  Uitloggen
                </NavLink>
              </NavItem>
            </CustomAuthenticatedTemplate>
            <UnauthenticatedTemplate>
              {[
                ["/", "Home"],
                ["/about", "Wie zijn wij"],
                ["/login", "Inloggen"],
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
            </UnauthenticatedTemplate>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffcanvas;
