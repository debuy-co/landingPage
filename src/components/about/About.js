import React from "react";

function About() {
  return (
    <section className="section-about">
      {/*the reason why we use this utility classes is because we want to re-use the h2 element without this center and bottom margin parameters*/}
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">Why using blockchain?</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">Col 1 of 2</div>
        <div className="col-1-of-2">Col 1 of 2</div>
      </div>
    </section>
  );
}

export default About;
