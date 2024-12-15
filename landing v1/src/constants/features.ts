import { icons } from './icons';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    name: 'Smart Scheduling',
    description: 'AI-powered appointment optimization to reduce wait times and maximize efficiency.',
    icon: icons.Calendar
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive insights into your practice performance and patient trends.',
    icon: icons.BarChart3
  },
  {
    name: 'Patient Management',
    description: 'Streamlined patient records, history, and communication all in one place.',
    icon: icons.Users
  },
  {
    name: 'Time Saving',
    description: 'Automate routine tasks and focus more on providing quality care.',
    icon: icons.Clock
  },
  {
    name: 'AI Assistant',
    description: 'Voice-powered interface for hands-free operation during procedures.',
    icon: icons.Cpu
  }
];