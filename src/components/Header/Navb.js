import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import logo from "../../img/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropComponent from "./DropComponent";

import countriesHome from "../Content/CountriesInfo/CountriesHome";
import UniversitiesHome from "../Content/CountriesInfo/UniversitiesHome";

function Navb(props) {
  const [navbarColor, setNavbarColor] = useState("transparent");
  console.log(props.homePage);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 90) {
      setNavbarColor("light");
      // console.log(scrollPosition);
    } else {
      setNavbarColor("transparent");
      // console.log("Hello");
    }
  };
  useEffect(() => {
    if (props.homePage) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setNavbarColor("light");
    }
  }, []);
  return (
    <Navbar
      expand="lg"
      bg={navbarColor}
      // className="bg-body"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top badge"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" exact className="li-item-cust">
              Home
            </Nav.Link>
            <DropComponent title="Countries" content={countriesHome} />
            <DropComponent title="Universities" content={UniversitiesHome} />

            {/* <Drop title="Countries" />
            <Drop title="Univesities" /> */}
            <Nav.Link className="li-item-cust " href="#">
              About Us
            </Nav.Link>
            <Nav.Link className="li-item-cust" href="#link">
              Contact Us
            </Nav.Link>
            <Nav.Link className="li-item-cust" href="#link">
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
