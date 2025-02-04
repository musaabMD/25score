'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HomeHeader from '@/components/Quiz/HHeader';

const PricingPage = () => {
  const plans = [
    {
      name: "Limited Exam Plan",
      price: "$49",
      duration: "per month",
      features: [
        "Access to 10 exams only",
        "Chat support",
        "Limited seats available",
        "Basic performance analytics"
      ],
      period: "1 month",
      sizeClass: "lg:w-1/3"
    },
    {
      name: "Lifetime Access",
      price: "$199",
      oldPrice: "$299",
      duration: "one-time payment",
      features: [
        "Full access to all exams",
        "Chat support",
        "Mobile apps (coming soon)",
        "Life-long updates",
        "Exclusive study materials",
        "Premium question bank",
        "1-on-1 tutor consultation",
        "Mock interviews",
        "Advanced performance metrics",
        "Study group access"
      ],
      period: "Lifetime",
      popular: true,
      sizeClass: "lg:w-2/3"
    }
  ];

  return (
    <div>
      <HomeHeader />
      <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose Your Test Prep Plan
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Invest in your future with our comprehensive test preparation plans
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 justify-center">
            {plans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col justify-between relative ${plan.sizeClass} ${
                plan.popular ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {plan.oldPrice && (
                      <span className="text-xl text-gray-500 line-through mr-2">{plan.oldPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Get Started with {plan.period}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include unlimited access to our core features and a 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;