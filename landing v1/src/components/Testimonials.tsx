import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Dental Practice Owner",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Niah has transformed how we manage our practice. The voice commands are incredibly intuitive, and the AI assistance has reduced our administrative workload significantly."
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The smart scheduling feature alone has saved us countless hours. Our patient satisfaction has improved dramatically since implementing Niah."
  },
  {
    name: "Dr. Emily Thompson",
    role: "Dental Clinic Director",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The analytics and reporting capabilities have given us incredible insights into our practice performance. It's like having a business consultant built into our management system."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Leading Dental Practices
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See what dental professionals are saying about Niah
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}