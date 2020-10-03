import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="10+" title="Clients" />
        <Experience
          number="30+"
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="6+" title="Months Teaching" />
        <Experience number="6000+" title="Students got trained" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
