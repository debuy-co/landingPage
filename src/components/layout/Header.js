import classes from "./Header.module.css";
import logoImage from "../../assets/watermark_icon_transparent_background.png";
import React from "react";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <img
          src={logoImage}
          alt="Bankist logo"
          className={classes.nav__logo}
          id="logo"
        />
        <ul className={classes.nav__links}>
          <li className={classes.nav__item}>
            <a className={classes.nav__link} href="#section--1">
              Features
            </a>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__links} href="#section--2">
              Operations
            </a>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__links} href="#section--3">
              Testimonials
            </a>
          </li>
          <li className={classes.nav__item}>Open account</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
