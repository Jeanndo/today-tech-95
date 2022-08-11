/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CV from "./../../Assets/Resume.pdf";
import Me from "./../../Assets/Up.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="header_container" id="about">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
              <Paper className={classes.paper} elevation={0}>
                <div className="header_container_left-side">
                  <Fade left>
                    <div className="header__paragraph">
                      <p>
                        I am a Full Stack Developer By Professional From Andela.
                      </p>
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
                  </Fade>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
              <Paper className={classes.paper} elevation={0}>
                <Fade right>
                  <div className="profile_picture">
                    <img src={Me} alt="Profile" />
                  </div>
                </Fade>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
              <Paper className={classes.paper} elevation={0}>
                <div className="header-actions-hireme">
                  <Zoom>
                    <a href={CV} className="hireme-btn" download>
                      #Hire me
                    </a>
                  </Zoom>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="header__actions__socials">
                    <a
                      href="https://www.facebook.com/profile.php?id=100076722369602"
                      className="fa fa-facebook header_link"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <a
                      href="https://twitter.com/@Jean_de_Dieu_UK"
                      className="fa fa-twitter header_link"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <a
                      href="https://www.instagram.com/ukwjeandedieu1gm/"
                      className="fa fa-instagram header_link"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <a
                      href="https://www.github.com/Jeanndo"
                      className="fa fa-github header_link"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <a
                      href="https://www.linkedin.com/ukwitegetse"
                      className="fa fa-linkedin header_link"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </div>
                </Zoom>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;

<div className="header__actions"></div>;
