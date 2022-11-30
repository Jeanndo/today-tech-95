import React from "react";
import "./Features.css";
import BackgroundVideo from "./../../Assets/BACKGROUND.mp4";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <React.Fragment>
      <div className="aboutme">
        <div className="overlay"></div>
        <video src={BackgroundVideo} autoPlay loop muted type="video.mp4" />
        <div className="aboutme_contents">
          <Zoom>
            <h1 className="aboutme_contents_paragraph">
              Let's tech together,Did you know that you can organize a meeting
              from here? Yeah you can , just give it a try for free.
            </h1>
          </Zoom>

          <div className="join_community">
            <Zoom>
              <a href="/meeting" className="join-btn" target="_blank">
                #Create a meeting.
              </a>
            </Zoom>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
