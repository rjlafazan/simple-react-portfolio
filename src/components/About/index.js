import React from "react";

function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Will add scrollspy in the future to outline additional about me details. */}
            <p>
              I am a driven full-stack software developer with a passion for
              technology, fitness, and the great outdoors. My ever-expanding
              skills are built through leadership, education, and personal
              interests. I take ownership of tasks and work with a strong sense
              of urgency in all things that require my attention. I am creative
              in my ability to solve problems and I enjoy expanding my knowledge
              and working with others.
            </p>
            <hr />
            <p>
              My goal is to further develop my understanding of technology,
              business, and investing. My immediate goal is to hone my
              engineering skills and build technology with a diverse team of
              individuals. My brother and I share a future goal of building our
              own company in order to tackle diverse projects in technology,
              real estate, education, and community service.
            </p>
            <hr />
            <p>
              As I dive further and further into the tech world, I find myself
              drawn to ideas around privacy and security and consider myself an
              amateur OSINT practitioner. The protection and discovery of
              information has always drawn me since childhood. I have an innate
              drive to seek knowledge and to protect it, as well as people,
              privacy, and ideas. More so, I feel obligated to educate and share
              ideas and knowledge with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
