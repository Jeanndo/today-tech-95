import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header_container">
        <div className="header-grid-container">
          <Fade left>
            <div className="item_one grid-item">
              <div>
                <h1>
                  I am a MERN & PERN Stack Developer By Proffessional From
                  Andela
                </h1>
              </div>

              <p className="heading__description">
                <Typewriter
                  options={{
                    strings: [
                      "Hello!,",
                      "I am a",
                      "Full Stack",
                      "Developer",
                      " I am passionate about",
                      "Expanding my horizons",
                      "To projects looking for",
                      "Software development support",
                      "And consultancy.",
                      "I am eager to learn new skills",
                      "To bring new innovative ideas to life.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
          </Fade>

          <div className="item_two grid-item">
            <Fade right>
              <div className="profile_picture">
                <img
                  src="https://avatars.githubusercontent.com/u/59208992?s=400&u=fcef9d0647cd7398cf616f9fdbf365f2b0c2371e&v=4"
                  alt="Profile"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="header__actions">
          <div className="header-actions-hireme">
            <Zoom>
              <button className="btn hireme-btn">#Hire me</button>
            </Zoom>
          </div>
          <Zoom>
            <div className="header__actions__socials">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </Zoom>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
