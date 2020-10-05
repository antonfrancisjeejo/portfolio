import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Develop<span>er</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4
            className={
              selected === "about" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("about")}
          >
            About Me
          </h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4
            className={
              selected === "skills" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("skills")}
          >
            Skills
          </h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4
            className={
              selected === "projects" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("projects")}
          >
            Projects
          </h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h4
            className={selected === "exp" ? "header__right--active" : undefined}
            onClick={() => setSelected("exp")}
          >
            Experience
          </h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4
            className={
              selected === "contact" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("contact")}
          >
            Contact
          </h4>
        </Link>
        <h4 className="header__right--semiactive" onClick={() => setOpen(true)}>
          Join with Me
        </h4>
      </div>
    </div>
  );
};

export default Header;
