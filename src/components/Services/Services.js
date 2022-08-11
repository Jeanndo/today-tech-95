import React from "react";
import "./Services.css";
import Zoom from "react-reveal/Zoom";
import Custom from "./../../Assets/custom.png";
import webdev from "./../../Assets/webdev.png";
import webdesign from "./../../Assets/webdesign.png";
import wireframe from "./../../Assets/wireframe.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const Services = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="services" id="services">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xlg={12}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="services_primary_heading">
                    <h1>#Services</h1>
                  </div>
                </Zoom>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xlg={3}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="card__container">
                    <div className="card__container__image">
                      <img src={Custom} alt="service one" />
                    </div>
                    <div className="card__container__service">
                      <h2>Custom Software Development</h2>
                    </div>
                  </div>
                </Zoom>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xlg={3}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="card__container">
                    <div className="card__container__image">
                      <img src={webdev} alt="service one" />
                    </div>
                    <div className="card__container__service">
                      <h2>Web Application Development</h2>
                    </div>
                  </div>
                </Zoom>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xlg={3}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="card__container">
                    <div className="card__container__image">
                      <img src={webdesign} alt="service one" />
                    </div>
                    <div className="card__container__service">
                      <h2>Web Design</h2>
                    </div>
                  </div>
                </Zoom>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xlg={3}>
              <Paper className={classes.paper} elevation={0}>
                <Zoom>
                  <div className="card__container">
                    <div className="card__container__image">
                      <img src={wireframe} alt="service one" />
                    </div>
                    <div className="card__container__service">
                      <h2>UI/UX Design</h2>
                    </div>
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

export default Services;
