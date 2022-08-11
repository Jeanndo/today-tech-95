import React, { Fragment } from "react";
import Navigation from "./../Navigation/Navigation";
import Header from "./../Header/Header";
import Features from "../Features/Features";
import Skills from "./../Skills/Skills";
import Timeline from "../TimeLine/Timeline";
import Services from "./../Services/Services";
import Work from "./../MyWork/Work";
import Footer from "./../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="main">
        <Header />
        <Features />
        <Skills />
        <Timeline />
        <Services />
        <Work />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
