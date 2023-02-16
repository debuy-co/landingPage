import React from "react";
import logo from "../../assets/logo/logo_transparent.png";
import logoName from "../../assets/logo/logoname_transparent.png";

function Header() {
  return (
    <header className="header">
      {/* we put the image inside the div so that we have a container that we can
      format that contain our logo */}
      {/*con la nomenclatura BEM, header is the block and logo box is the element*/}
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo"></img>
        <img src={logoName} alt="LogoName" className="header__logo"></img>
      </div>

      <div className="header__button-box">
        {/*The anchor tag in HTML is used to navigate to different web pages using an href attribute, wew use it instead of the button element*/}
        {/*The button we can consider as a standalone block because we are going to use it throughout the code in other parts*/}
        <a href="a" className={`btn btn--white btn--animation`}>
          Bottone
        </a>{" "}
      </div>

      {/* we put the text inside the div so that we can center all in the middle of the header */}
      <div className={"header__text-box"}>
        <h1 className={"heading_primary"}>
          <span className={"heading_primary--main"}>
            Decentralized Contracts
          </span>
          <span className={"heading_primary--sub"}>
            Leveraging blockchain technologies within the supply-chain
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
