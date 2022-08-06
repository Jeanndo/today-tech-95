import React from "react";
import "./About.css";
import BackgroundVideo from "./../../Assets/BACKGROUND.mp4";

const About = () => {
  return (
    <div className="aboutme">
      <video src={BackgroundVideo} autoPlay loop type="video/mp4" />
    </div>
  );
};
export default About;
