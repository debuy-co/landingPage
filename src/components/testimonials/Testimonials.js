import React from "react";
import ImageWhite from "../../assets/img/block-grey.jpg";
import Web3video from "../../assets/video/web3_background_video.mp4";
function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="bg-video">
        {/*instead of using the scr property like we would do in the images, there is actually a source tag in HTML*/}
        <video className="bg-video__content" muted autoPlay loop>
          <source src={Web3video} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">What they say about us</h2>
      </div>
      <div className="row">
        <div className="testimonial">
          {/*semantically the figure is the best thing to use in this case as we are giong to have an image with some text*/}
          <figure className="testimonial__shape">
            <img src={ImageWhite} alt="prova" className="testimonial__img" />
            <figcaption className="testimonial__caption">Prova</figcaption>
          </figure>
          <div className="testimonial__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Lorem ipsum
            </h3>
            <p>
              dolor sit amet consectetur adipisicing elit. Voluptatem eveniet
              accusamus hic, facilis sunt autem, quos nulla est nam praesentium
              dolores assumenda magnam, illo eaque quibusdam unde ea vero
              necessitatibus
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="testimonial">
          {/*semantically the figure is the best thing to use in this case as we are giong to have an image with some text*/}
          <figure className="testimonial__shape">
            <img src={ImageWhite} alt="prova" className="testimonial__img" />
            <figcaption className="testimonial__caption">Prova</figcaption>
          </figure>
          <div className="testimonial__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Lorem ipsum
            </h3>
            <p>
              dolor sit amet consectetur adipisicing elit. Voluptatem eveniet
              accusamus hic, facilis sunt autem, quos nulla est nam praesentium
              dolores assumenda magnam, illo eaque quibusdam unde ea vero
              necessitatibus
            </p>
          </div>
        </div>
      </div>
      <a href="#1" className="u-center-botton2 btn-text">
        Read all testimonials {"\u2192"}
      </a>
      {/*TODO: sistemo il pulsante in modo che stia giusto centrato*/}
    </section>
  );
}

export default Testimonials;
