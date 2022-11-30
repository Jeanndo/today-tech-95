import React from "react";
import "./Work.css";
import { Card } from "antd";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import ByMore from "./../../Assets/bymore.png";
import Language from "./../../Assets/Language.png";
import Aupair from "./../../Assets/aupairversion1.PNG";
import Center from "./../../Assets/center.png";
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

const { Meta } = Card;

const Work = () => {
  const classes = useStyles();
  return (
    <div className="mywork" id="work">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xlg={12}>
            <Paper className={classes.paper} elevation={0}>
              <div className="mywork__primary__heading">
                <Zoom>
                  <h1>#Select Work</h1>
                </Zoom>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
            <Paper className={classes.paper} elevation={0}>
              <Fade left>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={<img alt="online event system" src={ByMore} />}
                >
                  <Meta
                    title="Online Ticket host & Selling [React,Antd,Mui,Flutter wave] Frontend Design"
                    description={
                      <a
                        href="https://onlineevents.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    }
                  />
                </Card>
              </Fade>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
            <Paper className={classes.paper} elevation={0}>
              <Fade right>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={<img alt="academy" src={Language} />}
                >
                  <Meta
                    title="Akagera-Rhein-Academy (Team Project)[React,mui,node js,mySql]"
                    description={
                      <a
                        href="https://www.akagera-rhein-academy.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    }
                  />
                </Card>
              </Fade>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
            <Paper className={classes.paper} elevation={0}>
              <Fade left>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={<img alt="Akagera-Rhein-Aupair" src={Aupair} />}
                >
                  <Meta
                    title="Akagera-Rhein-Aupair [React,mui,node js,mySql]"
                    description={
                      <a
                        href="https://www.akagera-rhein-aupair.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    }
                  />
                </Card>
              </Fade>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xlg={6}>
            <Paper className={classes.paper} elevation={0}>
              <Fade right>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={<img alt="Akagera-Rhein-Center" src={Center} />}
                >
                  <Meta
                    title="Akagera-Rhein-Center (Team Project)[React,mui,node js,mySql]"
                    description={
                      <a
                        href="http://www.akagera-rhein-center.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    }
                  />
                </Card>
              </Fade>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Work;
