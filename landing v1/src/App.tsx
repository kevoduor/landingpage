import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Testimonials />
      <UseCases />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;