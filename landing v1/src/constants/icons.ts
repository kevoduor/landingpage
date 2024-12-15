import { Calendar, BarChart3, Users, Clock, Cpu } from 'lucide-react';

// Centralize icon imports to make maintenance easier
export const icons = {
  Calendar,
  BarChart3,
  Users,
  Clock,
  Cpu, // Using Cpu instead of Robot as it's not available in lucide-react
} as const;