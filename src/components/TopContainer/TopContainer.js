import React from "react";
import "./TopContainer.css";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";

const TopContainer = ({ setSelected }) => {
  return (
    <Element className="topContainer" name="about">
      <TopContent setSelected={setSelected} />
    </Element>
  );
};

export default TopContainer;
