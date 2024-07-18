import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  p-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
        <div className="mb-6 md:mb-0">
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <li className="mb-4 md:mb-0">
              <Link
                activeClass="text-yellow-500"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="block cursor-pointer hover:text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <Link
                activeClass="text-yellow-500"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="block cursor-pointer hover:text-yellow-500"
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <Link
                activeClass="text-yellow-500"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="block cursor-pointer hover:text-yellow-500"
              >
                About Me
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <Link
                activeClass="text-yellow-500"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="block cursor-pointer hover:text-yellow-500"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" bg-gray-600 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" bg-gray-600 rounded-full"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" bg-gray-600 rounded-full"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill="black"
                    d="M3 3h18v18H3V3ZM8 8.566v6.867H10.956v-6.67c0-1.878.992-2.92 2.716-2.92 1.646 0 2.294 1.036 2.294 2.92v6.67H19v-7.04c0-3.74-2.006-5.483-4.676-5.483-2.164 0-3.08 1.243-3.596 2.003h-.049V8.566H8ZM5.866 21H7.95V9.132H5.866V21Z"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" bg-gray-600 rounded-full"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.3925C26.4137 19.4006 21.2757 27.9881 11.7461 27.9881C8.71548 27.9881 5.90556 27.0291 3.66675 25.2964C4.09072 25.3466 4.5089 25.3717 4.93828 25.3717C7.37565 25.3717 9.61941 24.5177 11.3583 23.0305C9.04991 22.9812 7.15238 21.4136 6.51111 19.2761C6.84261 19.3263 7.1741 19.3766 7.51469 19.3766C7.97467 19.3766 8.43985 19.3013 8.87881 19.1769C6.45099 18.7017 4.64857 16.5513 4.64857 14.0164V13.9412C5.31389 14.3157 6.07844 14.5315 6.88348 14.5566C5.59006 13.6063 4.71496 11.9605 4.71496 10.0851C4.71496 9.11023 4.94797 8.21099 5.35323 7.43337C8.01267 10.4242 11.7296 12.3326 15.9514 12.5495C15.8736 12.1742 15.824 11.7868 15.824 11.3995C15.824 8.83468 17.8812 6.77734 20.4462 6.77734C21.7308 6.77734 22.8853 7.31797 23.6629 8.20109C24.6534 8.01714 25.6077 7.66464 26.4716 7.16772C26.1466 8.18456 25.489 9.04771 24.6191 9.61004C25.4574 9.52198 26.2796 9.30792 27.0572 9.00762C26.4726 9.83604 25.6762 10.5481 24.7305 11.0858L28.6304 9.61132Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 md:mt-0">
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Settings
        </a>
      </div>
    </footer>
  );
};

export default Footer;
