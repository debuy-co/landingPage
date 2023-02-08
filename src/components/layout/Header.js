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

      <div className={classes.button_box}>
        {/*The anchor tag in HTML is used to navigate to different web pages using an href attribute, wew use it instead of the button element*/}
        <a
          href="a"
          className={`${classes.btn} ${classes.btn_white} ${classes.btn_animation}`}
        >
          Bottone
        </a>{" "}
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
