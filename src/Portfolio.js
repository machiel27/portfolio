import React from 'react';

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">YourName</a>
          <div>
            <a href="#" className="mx-4">Projects</a>
            <a href="#" className="mx-4">Blog</a>
            <a href="#" className="mx-4">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl mb-4">Hello, I'm YourName</h1>
        <p className="text-xl">A passionate web developer from Earth.</p>
      </header>

      {/* About Me */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="flex space-x-10">
          <img src="your-image.jpg" alt="Your Name" className="w-1/3 rounded-full shadow-lg" />
          <div className="w-2/3">
            <p>
              Brief about yourself, your experience, skills, and any other relevant information.
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
              <img src="project-image.jpg" alt="Project Name" className="mb-4" />
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
          <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
