import React from "react";
import ImageWhite from "../../assets/img/block-grey.jpg";

function Popup() {
  return (
    //when the anchor is clicked (in Price.js) this "id" will become the target
    <div className="popup" id="popup">
      <div className="popup__content">
        {/*it is important that these 2 popups have the same height*/}
        <div className="popup__left">
          <img src={ImageWhite} alt="image1" className="popup__img" />
          <img src={ImageWhite} alt="image2" className="popup__img" />
        </div>
        <div className="popup__right">
          {/*here below is the small buttom to close the popup and "section-price" will become the target*/}
          {/*"times" is another HTML entity which is basically like an X */}
          <a href="#section-price" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary">Booking</h2>
          <h2 className="heading-tertiary">rebooking</h2>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum iaculis eu non diam phasellus vestibulum. Morbi quis
            commodo odio aenean. Venenatis a condimentum vitae sapien
            pellentesque habitant morbi tristique. Euismod quis viverra nibh
            cras pulvinar mattis nunc. Fusce id velit ut tortor. Venenatis urna
            cursus eget nunc scelerisque. Eros donec ac odio tempor orci
            dapibus. Iaculis eu non diam phasellus vestibulum lorem sed risus.
            Sit amet est placerat in. Et ligula ullamcorper malesuada proin
            libero nunc consequat interdum. Maecenas accumsan lacus vel
            facilisis volutpat est. Sed vulputate odio ut enim blandit volutpat.
            Massa sed elementum tempus egestas sed sed risus. Facilisis mauris
            sit amet massa vitae tortor condimentum lacinia quis. Purus sit amet
            volutpat consequat mauris nunc. Sed velit dignissim sodales ut. Est
            sit amet facilisis magna etiam tempor. Facilisi nullam vehicula
            ipsum a arcu cursus vitae.
          </p>
          <a href="#1" className="btn btn--white">
            CLICK
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
