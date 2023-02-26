import React from "react";

function Features() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Decentralized Supply Chain
            </h3>
            <p className="feature-box__text">
              We leverage blockchain technology to create a decentralized supply
              chain that eliminates intermediaries, reduces costs, and increases
              transparency.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-paperplane"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Smart Contract Automation
            </h3>
            <p className="feature-box__text">
              Our platform automates procurement processes using smart contracts
              that execute predefined rules and conditions. Reduce errors, speed
              up transactions, and improve efficiency.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-lock"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Digital Identity Verification
            </h3>
            <p className="feature-box__text">
              With decentralized identity (DID) protocols, we verify all parties
              in the procurement process reducing fraud, increase security, and
              improve overall trust in the procurement process.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-message-multiple"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Collaborative Procurement
            </h3>
            <p className="feature-box__text">
              Debuy.co enables collaboration between multiple parties in the
              procurement process to improve communication, streamline
              processes, and achieve better outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
