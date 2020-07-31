import React from "react";
import { resume2020 } from '../../assets/files';

function MediaBar() {

  return (
    <section className="page-section" id="media-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 col-sm-">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="tel:916-581-6050" data-toggle="tooltip" data-placement="bottom" title="Mobile: 916-581-6050">
                  <i className="fa fa-phone"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:ryan@lafazan.org" data-toggle="tooltip" data-placement="bottom" title="Email: ryan@lafazan.org">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={resume2020} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title="View Resume">
                  <i className="fa fa-file-text"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/rjlafazan" data-toggle="tooltip" data-placement="bottom" title="Github: rjlafazan">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rjlafazan/" data-toggle="tooltip" data-placement="bottom" title="LinkedIn: rjlafazan">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-inline quicklinks">
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaBar;
