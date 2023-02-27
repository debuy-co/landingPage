import React from "react";

function Price() {
  return (
    <section className="section-price">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Prices</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp; {/*this in HTML means a white space*/}
              </div>
              <h4 className="card__heading">
                {/*this span here is needed in order to give the box decoration effet to the heading*/}
                <span className="card__heading-span card__heading-span--1">
                  for individuals
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              {/*cta stands for call to action*/}
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                {/*btn--white is the same scss element that we styled when using the header*/}
                <a href="#1" className="btn btn--white btn--animation">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp; {/*this in HTML means a white space*/}
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  for small teams
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$xxx</p>
                </div>
                {/*btn--white is the same scss element that we styled when using the header*/}
                <a href="#1" className="btn btn--white btn--animation">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp; {/*this in HTML means a white space*/}
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  for big organizations
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$xxx</p>
                </div>
                {/*btn--white is the same scss element that we styled when using the header*/}
                <a href="#1" className="btn btn--white btn--animation">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*//TODO: vedere perche anhe in questo caso non e' centrato*/}
      <div className="u-center-text u-margin-bottom-big">
        <a href="#2" className="btn btn--white">
          Button another
        </a>
      </div>
    </section>
  );
}

export default Price;
