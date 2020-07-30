import React from "react";

function MediaBar() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <span className="copyright">
              {/* Copyright &copy; Your Website 2019 */}
            </span>
          </div>
          <div className="col-md-6 col-sm-">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="tel:916-581-6050">
                  <i className="fa fa-phone"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:ryan@lafazan.org">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/rjlafazan">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rjlafazan/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-inline quicklinks">
              {/* <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaBar;
