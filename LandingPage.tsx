import React from 'react';
import { useState } from 'react';

const LandingPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between p-6 sticky top-0 bg-gray-800 z-10">
        <div className="text-2xl font-bold">GrowthifyU</div>
        <button onClick={() => setNavbarOpen(!navbarOpen)} className="md:hidden">
          {navbarOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`flex space-x-4 md:block ${navbarOpen ? 'block' : 'hidden'}`}>  
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="text-center py-20 bg-gray-800">
        <h1 className="text-4xl font-bold">Welcome to GrowthifyU</h1>
        <p className="mt-4 text-lg">Your dashboard for growth and insights!</p>
      </header>
      <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Command Center</h2>
          <p>Monitor your metrics in real-time.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Services</h2>
          <p>Explore our services tailored for you.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Get Started</h2>
          <p>Start your journey with us.</p>
        </div>
      </section>
      <section className="bg-gray-800 py-20">
        <h2 className="text-center text-2xl font-bold">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">Service 1</div>
          <div className="bg-gray-700 p-6 rounded-lg">Service 2</div>
          <div className="bg-gray-700 p-6 rounded-lg">Service 3</div>
        </div>
      </section>
      <section className="bg-gray-800 py-20">
        <h2 className="text-center text-2xl font-bold">Process Timeline</h2>
        <div className="container mx-auto">
          <p>Here’s how our process works...</p>
        </div>
      </section>
      <section className="bg-gray-700 py-20">
        <h2 className="text-center text-2xl font-bold">Metrics to Watch</h2>
        <div className="container mx-auto">
          <p>Track your growth.</p>
        </div>
      </section>
      <footer className="bg-gray-800 text-center p-6">
        <p>&copy; 2026 GrowthifyU. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;