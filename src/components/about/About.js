import React from "react";
import ImageWhite from "../../assets/img/block-grey.jpg";
import ImageWhiteSmall from "../../assets/img/block-grey-small.jpg";

//TODO: in questa sezione sono da mettere i motivi (li trovi sul file readme) per il quale scegliere la blockchain, e le immagini che si muovono in automatico e i pargrafi che cambiano di conseguenza

function About() {
  //200 and 800 stand for the pixel width so that we can inform the browser withot letting the browser downloading the picture
  let imageResolutionSwitching = `${ImageWhiteSmall} 200w, ${ImageWhite} 800w`;
  return (
    <section className="section-about">
      {/*the reason why we use this utility classes is because we want to re-use the h2 element without this center and bottom margin parameters*/}
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Why using blockchain?</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">title</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic
            tenetur dolor voluptas dolores minima similique, cupiditate
            perferendis sunt. Nostrum, dolores? A repudiandae adipisci, quos
            labore laboriosam pariatur quo voluptate.
          </p>
          <a href="#1" className="btn-text">
            Learn more {"\u2192"}
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img //--> here we use the responsive image property - Resolution Switching , by using scrSet and sizes. if you use an old browser that it will simply ignore these two and work like previously by just picking the picture from scr
              srcSet={imageResolutionSwitching}
              //we uses sizes so that the browser can figure out the best picture to use in each situation
              sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px" //TODO: capire bene cosa significa questo
              alt="Photo1"
              className="composition__photo composition__photo--p1"
              src={ImageWhite}
            />
            {/* <img
              src={ImageWhite}
              alt="Photo1"
              className="composition__photo composition__photo--p1"
            /> */}
            <img
              srcSet={imageResolutionSwitching}
              sizes="(max-width: 900px) 20vw, (max-width:600px) 20vw, 300px"
              alt="Photo2"
              className="composition__photo composition__photo--p2"
              src={ImageWhite}
            />
            <img
              srcSet={imageResolutionSwitching}
              sizes="(max-width: 900px) 20vw, (max-width:600px) 20vw, 300px"
              alt="Photo3"
              className="composition__photo composition__photo--p3"
              src={ImageWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
