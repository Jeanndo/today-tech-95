import React from "react";
import { useStyles } from "./style";
import ContactForm from "./ContactForm";
import Grid from "@material-ui/core/Grid";
import "./style.css";

/**
 *contact us component
 *
 * @return {*}
 */

const ContactMe = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.Container} id="contact">
        <div className="contact__form-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4 className={classes.getInTouch}>#Let's Talk</h4>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
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
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactMe;
