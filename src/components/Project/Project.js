import React, { useState } from "react";
import "./Project.css";

const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {!show ? (
          <img src={img} alt="" />
        ) : (
          <div className="project__content">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Project;
