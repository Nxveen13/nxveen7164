import React from "react";
import Hero from "./hero/Hero";
import Aptitude from "./aptitude/Aptitude";
import About from "./about/About";
import Contact from "./contact/Contact";

const Home = () => {
  return <div>
    <Hero/>
    <Aptitude/>
    <About/>
    <Contact/>
  </div>;
};

export default Home;
