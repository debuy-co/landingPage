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
            <div className="card__side card__side--front">FRONT</div>
            <div className="card__side card__side--back card__side--back-1">
              BACK
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">FRONT</div>
            <div className="card__side card__side--back card__side--back-2">
              BACK
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">FRONT</div>
            <div className="card__side card__side--back card__side--back-3">
              BACK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
