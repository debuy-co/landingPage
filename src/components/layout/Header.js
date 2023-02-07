import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo/logo_transparent.png";
import logoName from "../../assets/logo/logoname_transparent.png";

function Header() {
  return (
    <header className={classes.header}>
      {/* we put the image inside the div so that we have a container that we can
      format that contain our logo */}

      <div className={classes.logo_box}>
        <img src={logo} alt="Logo" className={classes.logo}></img>
        <img src={logoName} alt="LogoName" className={classes.logo}></img>
      </div>

      {/* we put the text inside the div so that we can center all in the middle of the header */}
      <div className={classes.text_box}>
        <h1 className={classes.heading_primary}>
          <span className={classes.heading_primary_main}>
            Decentralized Contracts
          </span>
          <span className={classes.heading_primary_sub}>
            Leveraging blockchain technologies within the supply-chain
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
