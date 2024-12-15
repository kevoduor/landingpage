import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-medium tracking-tight">niah</span>
          </div>
        </div>
        <div className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Niah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}