import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";
import img4 from "../../assets/project4.png";
import img5 from "../../assets/project5.png";
import img6 from "../../assets/project6.png";
import img7 from "../../assets/project7.png";
import img8 from "../../assets/project8.png";
import img9 from "../../assets/project9.png";
import img10 from "../../assets/project10.png";
import img11 from "../../assets/project11.png";
import img12 from "../../assets/project12.png";
import img13 from "../../assets/project13.png";
import img14 from "../../assets/project14.png";
import img15 from "../../assets/project15.png";

const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: img1,
      title: "TheFindtalk",
      desc:
        "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "https://thefindtalk.com/",
    },
    {
      img: img2,
      title: "AR Projects Ltd",
      desc:
        "AR Projects Ltd is an E-Learning company which provides coding training for both school and college students.",
      link: "https://www.arprojectsltd.com/",
    },
    {
      img: img3,
      title: "Complaint Management System",
      desc:
        "It is used in city corporations to handle complaints for particular areas corporation.",
      link: "https://corporation-management-system.netlify.app/",
    },
    {
      img: img4,
      title: "Firegram",
      desc: "An online platform for everyone to share their images.",
      link: "https://firegram-65fdc.web.app/",
    },
    {
      img: img5,
      title: "Expense Tracker",
      desc: "This application is used to store our day to day expenses.",
      link: "https://reactexpensetracker.netlify.app/",
    },
    {
      img: img6,
      title: "COVID 19 Tracker",
      desc:
        "This website shows overview of the covid 19 situation and also provide details country wise.",
      link: "https://reactcoronatracker.netlify.app/",
    },
  ];

  const clone_works = [
    {
      img: img7,
      title: "Facebook Clone",
      desc:
        "Clone of Facebook with some functionalities like authentication, adding posts, etc.",
      link: "https://facebook-clone-cb4ea.web.app/",
    },
    {
      img: img8,
      title: "Amazon Clone",
      desc:
        "Clone of Amazon with some functionalities like authentication, adding items to the cart, etc.",
      link: "https://clone-dd0a5.web.app/",
    },
    {
      img: img9,
      title: "Airbnb Clone",
      desc:
        "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "https://airbnb-clone-70095.web.app/",
    },
    {
      img: img10,
      title: "Hulu Clone",
      desc:
        "Clone of Hulu with some functionalities like search movies based on category, etc.",
      link: "https://hulu-clone-6247d.web.app/",
    },
    {
      img: img11,
      title: "Slack Clone",
      desc:
        "Clone of Slack with some functionalities like create new rooms, chat with the people in the rooms, etc.",
      link: "https://slack-clone-74fb8.firebaseapp.com/",
    },
    {
      img: img12,
      title: "Messenger Clone",
      desc:
        "Clone of Messenger with some functionalities like chat with everyone, etc.",
      link: "https://messenger-clone-441d6.web.app/",
    },
    {
      img: img13,
      title: "Tinder Clone",
      desc:
        "Clone of Tinder with some functionalities like choose or reject different people, etc.",
      link: "https://tinder-clone-19762.web.app/",
    },
    {
      img: img14,
      title: "Youtube Clone",
      desc:
        "Clone of Youtube with some functionalities like display random videos, etc.",
      link: "https://clone-65a08.web.app/",
    },
    {
      img: img15,
      title: "WhatsApp Clone",
      desc:
        "Clone of WhatsApp with some functionalities like create new groups, chat with different people, etc.",
      link: "https://whats-app-clone-5cab4.web.app/",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which are changing many people lives and some
        clone works of large tech tack companies.
      </p>
      <div className="projectContainer__title">
        <h4
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
          Client Projects
        </h4>
        <h4
          className={!choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(false)}
        >
          Clone Projects
        </h4>
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {clone_works.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;
