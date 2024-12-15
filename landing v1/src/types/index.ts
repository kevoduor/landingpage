import { LucideIcon } from 'lucide-react';

export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Plan {
  name: string;
  price: number;
  annualPrice: number;
  features: string[];
}

export interface UseCase {
  title: string;
  description: string;
  icon: LucideIcon;
  example: string;
}