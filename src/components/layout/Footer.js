import React from "react";
import fullLogo from "../../assets/logo/full_transparent.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={fullLogo} alt="fullLogo" className="footer__logo"></img>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  Carrer
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#1" className="footer__link">
              Angelo
            </a>
            , Credits to Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
