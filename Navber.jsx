import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white fixed w-full z-10">
      <p className=" text-2xl lg:text-xl">SHOAIB AHSAN</p>
      <div className="md:hidden">
        <button
          className="nav__hamburger flex flex-col justify-between h-6 w-6 focus:outline-none"
          onClick={toggleNav}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      <div
        className={`${
          navActive ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
          <li>
            <Link
              onClick={closeMenu}
              activeClass="text-yellow-500"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="block px-4 py-2 md:py-0 cursor-pointer hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="text-yellow-500"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="block px-4 py-2 md:py-0 cursor-pointer hover:text-yellow-500"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="text-yellow-500"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="block px-4 py-2 md:py-0 cursor-pointer hover:text-yellow-500"
            >
              About Me
            </Link>
          </li>
          
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="text-yellow-500"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="hidden md:block  cursor-pointer btn btn-outline-primary ml-4"
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
