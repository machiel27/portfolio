import React from "react";
import meImage from "./me.jpg";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Machiel
          </a>
          <div>
            <a href="#" className="mx-4">
              Projects
            </a>
            <a href="#" className="mx-4">
              Blog
            </a>
            <a href="#" className="mx-4">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-sky-700 text-white text-center py-20">
        <h1 className="text-5xl mb-4">Hello, I'm Machiel</h1>
        <p className="text-xl">A software developer from Earth.</p>
      </header>

      {/* About Me */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="flex items-center space-x-10">
          <img
            src={meImage}
            alt="Me"
            className="w-1/4 rounded-full shadow-lg"
          />
          <div className="w-2/3 text-lg">
            <p>
              I'm a full-stack web developer,
              specializing in creating applications for the insurance industry.
              My journey in the tech world is driven by my passion to leverage
              software as a tool to make the world a better place.
            </p>
            <p>
              When I'm not coding, you can find me immersed in a good book or
              diving into the virtual realms of video games. Music holds a
              special place in my heart, resonating with my creative spirit and
              fueling my day-to-day endeavors. On the sports front, I'm an avid
              follower of cricket, football, and the high-octane world of
              Formula 1 racing.
            </p>
            <p>
              Join me on my journey as I continue to merge my passions and
              expertise, crafting solutions one line of code at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-200 p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Single Project */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="project-image.jpg"
                alt="Project Name"
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Project Name</h3>
              <p>Short description of the project.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Machiel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
