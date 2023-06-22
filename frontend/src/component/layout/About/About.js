import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/prasad-patil-475150239/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/5947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Prasad Patil</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by Prasad Patil
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">visits</Typography>
            <a
              href="https://github.com/Prasad-patil6720"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
              

            </a>

            <a href="https://www.linkedin.com/in/prasad-patil-475150239/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
