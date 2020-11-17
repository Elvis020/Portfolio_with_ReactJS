import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import { HomeRounded, SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, Github, Telegram } from "@material-ui/icons";
import resumeData from "../../Utils/ResumeData";
import CustomButton from "../Button/Button";
import "./Header.css";
// import Services from '../../pages/Services/Services';

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar className="header" sticky="top" expand="lg">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link as={NavLink} to="/" className={pathName == "/" ? "header_link_active" : "header_link"}>
            Resume
          </Nav.Link>{" "}
          {/* Resume Link */}
          <Nav.Link as={NavLink} to="/portfolio" className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
            Portfolio
          </Nav.Link>{" "}
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to="/services" className={pathName == "/services" ? "header_link_active" : "header_link"}>
            Skills & Services
          </Nav.Link>{" "}
          {/* Services Link */}
          <Nav.Link as={NavLink} to="/contact-form" className={pathName == "/contact-form" ? "header_link_active" : "header_link"}>
            Contact
          </Nav.Link>{" "}
          {/* Services Link */}
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton className="last" text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
