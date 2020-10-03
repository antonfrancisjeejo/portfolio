import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>anton13jeejo@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@antonfrancisjeejo</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/anton-francis-jeejo-886b1a198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/antonjeejo.13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/antonfrancisjeejo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
