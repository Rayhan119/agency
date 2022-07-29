import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav-section">
        <Container>
          <a className="nav-area-right" href="/home">
            <span>
              <FontAwesomeIcon icon={faLightbulb} />
            </span>{" "}
            Creatology
          </a>
          <Nav className="mx-end nav-area">
            <a href="/home">Home</a>
            <a href="/services">services</a>
            <a href="/about">About us</a>
            <a href="/contuct">Contuct us</a>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
