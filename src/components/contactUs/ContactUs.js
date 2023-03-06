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
              {/*if we apply this "margin-bottom-medium" will not show because it cannot override the margin bottom property indicated in "form__group:not(:last-child)", therefore we need to add the !important keyword inside the utlity class*/}
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  {/*for HTML to consider the radio buttom as a group, they need to have the same "name"*/}
                  {/*in CSS unfortunately we cannnot modify the radio "input" button so we are going to create our own as a "span" element and design it*/}
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small1"
                    name="sameName"
                  />
                  <label htmlFor="small1" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small btn 1
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small2"
                    name="sameName"
                  />
                  <label htmlFor="small2" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small btn 2
                  </label>
                </div>
              </div>

              <div className="form__group">
                {/*it is important that it is a button and not just an anchor element so that the form can recognize it and use it when submitting it*/}
                <button className="btn btn--white">Next Step</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
