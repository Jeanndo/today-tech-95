import React, { Fragment } from "react";
import Navigation from "./../Navigation/Navigation";
import Header from "./../Header/Header";
import About from "./../About/About";
import Skills from "./../Skills/Skills";

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Skills />
    </Fragment>
  );
};

export default Home;
