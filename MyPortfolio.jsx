import React from "react";
import you from "../assets/youtube.png";
import todo from "../assets/todo list.png";
import coun from "../assets/counter.png";
import digi from "../assets/digital.png";
import ana from "../assets/Analog.png";
import apis from "../assets/Apis.png";
const MyPortfolio = () => {
  return (
    <section id="MyPortfolio" className="py-16 bg-gray-300">
      <div className="text-center mb-12">
        <p className="text-xl text-gray-600">My Work</p>
        <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
        
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={ana}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Analog Clock JS
            </h2>
            <p className="text-gray-600 mt-2">
              This project is an elegant and functional analog clock created
              using HTML, CSS, and JavaScript. The clock dynamically updates in
              real-time, providing an accurate and visually appealing
              representation of the current time.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={digi}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Digital Clock JS
            </h2>
            <p className="text-gray-600 mt-2">
              This project is a sleek and functional digital clock created using
              JavaScript, HTML, and CSS. It dynamically displays the current
              time, updating every second, and is styled to look great on any
              device.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={coun}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Counter App JS</h2>
            <p className="text-gray-600 mt-2">
              The JavaScript Counter App is a simple, yet powerful application
              designed to demonstrate fundamental concepts in JavaScript,
              including DOM manipulation, event handling, and state management.
              This app provides an intuitive interface for users to increment,
              decrement, and reset a counter,
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={todo}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {" "}
              To-Do List Application JS
            </h2>
            <p className="text-gray-600 mt-2">
              This To-Do List application is a simple yet powerful tool designed
              to help users manage their tasks efficiently. Built using vanilla
              JavaScript, HTML, and CSS, this project showcases my ability
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={you}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              YouTube Clone JS
            </h2>
            <p className="text-gray-600 mt-2">
              Welcome to my YouTube clone project! This application is a fully
              functional, front-end replica of YouTube, built entirely with
              JavaScript. The project showcases my ability to create complex web
              applications
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={apis}
            alt="My Portfolio"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900"> APIs </h2>
            <p className="text-gray-600 mt-2">
              I am a passionate and enthusiastic fresher developer with a strong
              foundation in building and managing web applications. My technical
              skills include: APIs,MongoDB,Express.js and Node.js, I am a quick
              learner and problem solver, always eager to take on new challenges
              and improve my skills. I am excited to bring my knowledge and
              passion for development to a dynamic team, where I can contribute
              and learn from experienced professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
