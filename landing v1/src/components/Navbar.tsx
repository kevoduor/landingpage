import React from 'react';
import OrganicSphere from './OrganicSphere';
import { CALENDLY_URL } from '../constants/urls';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <OrganicSphere />
            <span className="text-sm font-medium tracking-tight">niah</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a 
              href={CALENDLY_URL}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}