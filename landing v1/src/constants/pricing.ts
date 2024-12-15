import type { Plan } from '../types';

export const plans: Plan[] = [
  {
    name: 'Basic',
    price: 180,
    annualPrice: 1800,
    features: [
      'Core management features',
      'Basic support',
      'Limited integrations with third-party tools'
    ]
  },
  {
    name: 'Professional',
    price: 270,
    annualPrice: 2700,
    features: [
      'All features in the Basic Plan',
      'Advanced analytics and reporting',
      'Priority support',
      'Enhanced integrations'
    ]
  },
  {
    name: 'Premium',
    price: 360,
    annualPrice: 3600,
    features: [
      'All features in the Professional Plan',
      'Customizable features',
      'Dedicated account manager',
      '24/7 support',
      'Additional training and onboarding'
    ]
  }
];