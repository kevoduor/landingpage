import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { plans } from '../constants/pricing';

export default function Pricing() {
  const [annual, setAnnual] = React.useState(true);

  return (
    <div className="bg-gray-50 py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Flexible Pricing for Clinics of All Sizes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose between monthly or annual plans. Annual plans include two months free!
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h2>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${annual ? plan.annualPrice / 12 : plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <a
                  href="https://calendly.com/niahai"
                  className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}