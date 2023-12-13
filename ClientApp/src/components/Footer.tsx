import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./Footer.scss";

const LogoWhite = require("../assets/logo-white.png");
const FacebookIcon = require("../assets/facebook-white.png");
const LinkedInIcon = require("../assets/linkedin-white.png");

const Footer: React.FC = () => {
    return (
        <footer className="footer ps-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <Link to="/">
                            <img src={LogoWhite} alt="Logo" className="footer-logo" />
                        </Link>
                    </Col>
                    <Col md={6}>
                        <div className="footer-links mt-3">
                            <Link to="https://www.anteszorg.nl/disclaimer" target="_blank">Disclaimer en privacy</Link>
                            <Link to="https://www.anteszorg.nl/cookiemelding" target="_blank">Cookies</Link>
                            <Link to="https://www.anteszorg.nl/hoe-wij-helpen/jouw-rechten/kwaliteitsstatuut" target="_blank">Kwaliteitsstatuut</Link>
                            <Link to="https://werkenbijparnassiagroep.nl/vacatures/antes" target="_blank">Vacatures</Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-social gap-3 d-flex">
                            <a href="https://www.facebook.com/AntesZorg/" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="Facebook" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/company/antes/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;