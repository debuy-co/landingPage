import React from "react";
import fullLogoHigh from "../../assets/logo/full_transparent_high.png";
import fullLogoLow from "../../assets/logo/full_transparent_low.png";
import logo from "../../assets/logo/logoname_transparent.png";

function Footer() {
  let logoDensitySwitching = `${fullLogoLow} 1x, ${fullLogoHigh} 2x`;
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        {/* <img
          //--> here we use the responsive image property - Density Switching
          srcSet={logoDensitySwitching}
          alt="fullLogo"
          className="footer__logo"
        ></img> */}

        <picture
        //--> here we use the responsive image property - Art Direction
        //It means that we are going to tell the browser to use one image with one screen and another image with another screen width, so we want to make images depend on the screen width

        //what is happening below is basically to use different sources for different cases, if the screen is below 37.5em == 600px, than we use the images that are inside <source/> otherwise we use the images that are inside <img>
        >
          <source
            srcset={logo} //even if it is not a set "source" require scrset attribute
            media="(max-width: 37.5em)"
            className="footer__logo"
          ></source>
          <img
            srcSet={logoDensitySwitching}
            alt="fullLogo"
            className="footer__logo"
            src={fullLogoHigh} //this one we use just in case "srcSet" is not supported by the browser you are using
          ></img>
        </picture>
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
