//The 3 steps to create this component will be:
//1. create the checkbox that later will be hidden
//2. have a label connected to that checkbox
//3. reveal the entinre navigation on the background

import React from "react";

function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        MENU
      </label>
      {/*&nbsp stands for empty html element*/}
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              <span>01</span>
              About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              <span>02</span>
              Features
            </a>
          </li>
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              <span>03</span>
              3rd
            </a>
          </li>
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              <span>04</span>
              4th
            </a>
          </li>
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              <span>05</span>
              5th
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
