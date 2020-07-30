import React from "react";

function Technologies() {
  return (
    <section className="page-section" id="technologies">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Technologies</h2>
            <h3 className="section-subheading text-muted">
              Technologies I have the most experience working with.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Platforms</th>
                  <th scope="col">Frontend</th>
                  <th scope="col"></th>
                  <th scope="col">Backend</th>
                  <th scope="col">Database</th>
                  <th scope="col">DevOps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">OSX</td>
                  <td>JavaScript</td>
                  <td>CSS</td>
                  <td>Node.js</td>
                  <td>MongoDB</td>
                  <td>AWS</td>
                </tr>
                <tr>
                  <td scope="row">Browser</td>
                  <td>React</td>
                  <td>SASS/SCSS</td>
                  <td>Express.js</td>
                  <td>PostgreSQL</td>
                  <td>Docker</td>
                </tr>
                <tr>
                  <td scope="row">RHEL, Centos</td>
                  <td>Next.js</td>
                  <td>Bootstrap</td>
                  <td>Sequelize</td>
                  <td>MySQL</td>
                  <td>Heroku</td>
                </tr>
                <tr>
                  <td scope="row">Ubuntu</td>
                  <td>Angular</td>
                  <td>Material UI</td>
                  <td>Mongoose</td>
                  <td>Redis</td>
                  <td>Firebase</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
