import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import logo from "../../img/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import DropComponent from "./DropComponent";
import countriesHome from "../Content/CountriesInfo/CountriesHome";
import UniversitiesHome from "../Content/CountriesInfo/UniversitiesHome";
import { useTranslation } from "react-i18next";

function Navb() {
  const { t, i18n } = useTranslation();

  // Toggle between English and Arabic
  // const toggleLanguage = () => {
  //   const newLanguage = i18n.language === "ar";
  //   i18n.changeLanguage(newLanguage);
  // };
  React.useEffect(() => {
    if (i18n.language !== "ar") {
      i18n.changeLanguage("ar");
    }
  }, [i18n]);
  return (
    <Navbar expand="lg" className="bg-body" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="82"
            className="d-inline-block align-top badge"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" exact className="li-item-cust">
              {t("home")} {/* Translated text */}
            </Nav.Link>
            <DropComponent title={t("countries")} content={countriesHome} />
            <DropComponent
              title={t("universities")}
              content={UniversitiesHome}
            />
            <Nav.Link className="li-item-cust" href="#">
              {t("aboutUs")}
            </Nav.Link>
            <Nav.Link className="li-item-cust" href="#link">
              {t("contactUs")}
            </Nav.Link>
            <Nav.Link className="li-item-cust" href="#link">
              {t("gallery")}
            </Nav.Link>
          </Nav>
          {/* <Button variant="outline-primary" onClick={toggleLanguage}>
            {i18n.language === "en" ? "عربي" : "English"}
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
