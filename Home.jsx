import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import MyPortfolio from "./MyPortfolio";


const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe/>
      <MyPortfolio />
      <Contact/>
      <Footer/>
     
    </>
  );
};

export default Home;
