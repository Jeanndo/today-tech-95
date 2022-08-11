import React from "react";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

/**
 * @return {*}
 */

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={`${classes.footerContainer} footer`} id="contact">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h4 className={classes.getInTouch} style={{ color: "#fff" }}>
              #Let's Talk
            </h4>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <div>
              <div>
                <span className={classes.footerSubTitles}>
                  <h1 style={{ color: "#fff" }}>Today Tech 95</h1>
                </span>
                <span className={classes.footerSubTitles}>
                  <h4 style={{ color: "#fff" }}>
                    Email:&nbsp;&nbsp;jeanndo.dev@gmail.com
                  </h4>
                </span>
                <span className={classes.footerSubTitles}>
                  <h4 style={{ color: "#fff" }}>
                    Tel:&nbsp;&nbsp;0784860836/0780402713
                  </h4>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="Inputs"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} xl={6}>
                  <input type="email" placeholder="Email" className="Inputs" />
                </Grid>
                <Grid item xs={12}>
                  <input type="text" placeholder="Subject" className="Inputs" />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    placeholder="Your Message Please"
                    className="TextArea"
                    rows={7}
                  />
                </Grid>
                <button className="sendBtn">Send It</button>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4}>
            <div className="header__profile__picture">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="ukwitegetse"
                data-version="v1"
              ></div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <div>
              <span className={classes.followus} style={{ color: "#fff" }}>
                Follow me
              </span>
            </div>
            <div className="SocialMediaContainer">
              <div className="SocialMediaIcon">
                <a
                  href="https://www.facebook.com/profile.php?id=100076722369602"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link"
                >
                  <FacebookIcon />
                </a>
              </div>
              <div className="SocialMediaIcon">
                <a
                  href="https://www.instagram.com/ukwjeandedieu1gm/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link"
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className="SocialMediaIcon">
                <a
                  href="https://twitter.com/@Jean_de_Dieu_UK"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link"
                >
                  <TwitterIcon />
                </a>
              </div>
              <div className="SocialMediaIcon">
                <a
                  href="https://www.linkedin.com/ukwitegetse"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className="SocialMediaIcon">
                <a
                  href="https://github.com/Jeanndo"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.followus} style={{ color: "#fff" }}>
              &copy;2022@Jeanndo
            </h4>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Footer;
