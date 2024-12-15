import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Intuitive Dashboard for Complete Control
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to manage your dental practice, all in one place.
          </p>
        </div>
        <div className="mt-12">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Niah Dashboard"
          />
        </div>
      </div>
    </div>
  );
}