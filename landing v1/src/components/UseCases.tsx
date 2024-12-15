import React from 'react';
import { Mic, Calendar, FileText, Search } from 'lucide-react';
import type { UseCase } from '../types';

const useCases: UseCase[] = [
  {
    title: 'Voice Search for Patient Information',
    description: 'Access patient records hands-free during procedures with voice commands.',
    icon: Mic,
    example: '"Hey Niah, show me patient Johnson\'s treatment history."'
  },
  {
    title: 'Smart Scheduling',
    description: 'Effortlessly manage appointments with AI-powered scheduling.',
    icon: Calendar,
    example: '"Schedule a cleaning for Sarah Williams next Tuesday at 10 AM."'
  },
  {
    title: 'Clinical Notes',
    description: 'Voice-to-text for recording patient notes and treatment plans.',
    icon: FileText,
    example: '"Update patient Clark\'s file with completed filling treatment."'
  },
  {
    title: 'Quick Search',
    description: 'Find any information instantly with natural language search.',
    icon: Search,
    example: '"Show me all appointments for next week."'
  }
];

export default function UseCases() {
  return (
    <div className="bg-white py-16" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Voice-Powered Dental Practice Management
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See how Niah transforms your daily workflow with AI-powered voice commands.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <span className="flex-shrink-0 inline-flex p-3 bg-blue-600 text-white rounded-lg">
                  <useCase.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
              </div>
              <p className="mt-4 text-gray-500">{useCase.description}</p>
              <div className="mt-4 bg-white rounded-md p-4 border border-gray-200">
                <p className="text-sm text-gray-600 italic">{useCase.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}