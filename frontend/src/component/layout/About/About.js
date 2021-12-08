import React from "react";
import "./aboutSection.css";

import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ashutosh.jha_";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/cloudinary-projects/image/upload/v1638889460/avatars/Ashutosh887.jpg"
              alt="Founder"
            />
            <Typography>Ashutosh Jha</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>store887</span>
            <span>An E-Commerce Web Application...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
