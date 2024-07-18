import React from "react";
import react from "../assets/react.svg";
import node from "../assets/node.png"
import css from "../assets/CSS.png"
import html from "../assets/HTML.png"
import js from "../assets/JS.png"
import mongo from "../assets/MDB.png"
const HeroSection = () => {
  return (
    <section
      id="heroSection"
      class="hero--section bg-gray-300 text-gray-800 py-20 lg:flex lg:justify-center lg:items-center lg:h-screen"
    >
      <div class="flex flex-col justify-center items-center lg:w-1/2">
        <div class="text-center animate-bounce">
          <p class="text-2xl lg:text-4xl mb-4">Hey, I'm SHOAIB AHSAN</p>
          <h1 class="text-4xl lg:text-6xl font-bold">Front-End Developer</h1>
          <br />
          <div class=" flex justify-center gap-3 lg:w-2/16 mt-10 lg:mt-0">
            <img
              src={html}
              alt="Hero Section"
              className="animate-bounce size-12 h-auto rounded-lg shadow-lg"
            />
            <img
              src={css}
              alt="Hero Section"
              className=" size-12 h-auto rounded-lg shadow-lg"
            />
             <img
              src={js}
              alt="Hero Section"
              className="animate-bounce size-12 h-auto rounded-lg shadow-lg"
            />
             <img
              src={react}
              alt="Hero Section"
              className=" size-12 h-auto rounded-lg shadow-lg"
            />
             <img
              src={mongo}
              alt="Hero Section"
              className="animate-bounce size-12 h-auto rounded-lg shadow-lg"
            />
             <img
              src={node}
              alt="Hero Section"
              className=" size-12 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
