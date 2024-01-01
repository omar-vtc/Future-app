import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import logo from "../../img/logo.png";
function Nav() {
  const homePage = true;
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        homePage ? "bg-customized" : "bg-customized-count"
      }`}
      id="navbar"
    >
      <div className="container-fluid nav-cust">
        <a className="navbar-brand d-block col-md-4" href="#">
          <img
            className="d-inline-block align-text-bottom badge"
            src={logo}
            alt="Logo"
            width="100"
            height="97"
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Coutries
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Universities
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Articles
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item li-item-cust">
              <a className="nav-link active" href="#">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
