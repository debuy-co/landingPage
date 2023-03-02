import React from "react";

function ContactUs() {
  return (
    <section className="section-contact-us">
      <div className="row">
        <div className="contact-us-box">
          <div className="contact-us-box__form">
            <form action="#" className="form">
              <h2 className="heading-secondary">Contact Us</h2>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
