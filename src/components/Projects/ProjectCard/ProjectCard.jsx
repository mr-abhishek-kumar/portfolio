import React from "react";
import "./ProjectCard.css";

function ProjectCard({ details }) {
  return (
    <div className="work-experience-card">

        <img className="imageurl" src={details.imageurl} alt={details.title}/>

      <h6>{details.title}</h6>

      <ul>
        {details.about.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <a className="work-duration" href={details.giturl} target="_blank" rel="noopener noreferrer">{details.giturl}</a> <marquee behavior="alternate-reverse" direction="" scrollamount="1" height="16" width="20">&larr;</marquee>

    </div>
  );
}

export default ProjectCard;
