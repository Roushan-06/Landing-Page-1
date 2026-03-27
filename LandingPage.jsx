import React from "react";
import { Navbar } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl">GrowthifyU</h1>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-400">Home</li>
            <li className="text-white hover:text-gray-400">Services</li>
            <li className="text-white hover:text-gray-400">Results</li>
            <li className="text-white hover:text-gray-400">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-20 text-center">
        <h2 className="text-4xl font-bold">Welcome to GrowthifyU</h2>
        <p className="mt-4 text-lg">Your partner in growth and success.</p>
      </section>

      {/* Dashboard Layout */}
      <section className="p-10">
        <div className="container mx-auto grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p>Learn more about our feature 1.</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p>Learn more about our feature 2.</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p>Learn more about our feature 3.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl text-center">Our Services</h2>
        <p className="text-center">Discover the services we offer.</p>
      </section>

      {/* Process Section */}
      <section className="p-10">
        <h2 className="text-3xl text-center">Our Process</h2>
        <p className="text-center">Here's how we work.</p>
      </section>

      {/* Results Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl text-center">Our Results</h2>
        <p className="text-center">See the results we've achieved.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <div className="text-center text-white">
          © 2026 GrowthifyU. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;