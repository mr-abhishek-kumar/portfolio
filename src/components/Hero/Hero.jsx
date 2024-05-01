import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate MEARN Stack Developer | Fullstack Web Developer | Python & Django Developer |  Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
          <img src="./assets/images/mypic.jpg" alt="j" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/mern1.png"alt="h" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="h" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/django.png" alt="g"/>
          </div>
        </div>
        <h6 className="myname">Er. Abhishek Kumar</h6>

      </div>
    </section>
  );
}

export default Hero;
