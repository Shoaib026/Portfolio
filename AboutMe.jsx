import React from "react";
import imgs from "../assets/shoaib-pick.jpeg"
const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className="flex flex-col lg:flex-row items-center p-8 bg-gray-500"
    >
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={imgs}
          alt="About Me"
          className="size-96 h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
        <div>
          <p className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
            About
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            About Me
          </h1>
          <p className="text-base lg:text-lg text-gray-300 mb-4">
            As a Frontend Developer, my passion lies in crafting visually
            stunning and highly interactive web experiences. With a keen eye for
            design and a strong command of HTML, CSS, and JavaScript. If you are
            seeking a Frontend Developer who is not only skilled in coding but
            also passionate about bringing ideas to life, I am confident that my
            dedication, creativity, and collaborative spirit make me an
            excellent fit for your team. Let's work together to build
            exceptional web applications that leave a lasting impact on users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
