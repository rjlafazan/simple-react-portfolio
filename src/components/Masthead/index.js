import React from "react";

function Masthead(props) {
  return (
    <header className="masthead" id="home">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{props.intro1}</div>
          <div className="intro-heading text-uppercase">
            {props.intro2}
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#about"
          >
            {props.button}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
