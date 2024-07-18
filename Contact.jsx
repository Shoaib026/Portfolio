import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="py-12 bg-gray-500">
      <div className="text-center mb-12">
        <p className="text-lg text-white">Get In Touch</p>
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-lg text-white mt-4">
          As a fresh developer, I thrive on tackling challenges head-on and <br />
          finding creative solutions to complex problems, Each obstacle is an
          opportunity to learn and grow.
        </p>
      </div>
      <form className="max-w-xl mx-auto p-8 bg-white rounded shadow-md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <label htmlFor="first-name" className="block">
            <span className="text-md text-gray-700">First Name</span>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="block">
            <span className="text-md text-gray-700">Last Name</span>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="text-md text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="block">
            <span className="text-md text-gray-700">Phone Number</span>
            <input
              type="tel"
              className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="block mt-6">
          <span className="text-md text-gray-700">Choose a topic</span>
          <select
            id="choose-topic"
            className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="block mt-6">
          <span className="text-md text-gray-700">Message</span>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className=" mt-6 flex items-center">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            className="mr-2"
          />
          <span className="text-sm text-gray-700">I accept the terms</span>
        </label>

        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-500 text-white text-md font-semibold rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
