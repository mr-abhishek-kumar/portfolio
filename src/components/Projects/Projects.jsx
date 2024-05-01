import React, { useRef } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";

function Projects() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideLeft = () => {
    sliderRef.current.slickNext();
  };

  const slideRight = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Projects</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span> R </span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span> L </span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => {
            return <ProjectCard key={item.title} details={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
