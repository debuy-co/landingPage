import React from "react";

//TODO: in questa sezione sono da mettere i motivi per il quale scegliere la blockchain, e le immagini che si muovono in automatico e i pargrafi che cambiano di conseguenza

function About() {
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
        <div className="col-1-of-2">Col 1 of 2</div>
      </div>
    </section>
  );
}

export default About;
