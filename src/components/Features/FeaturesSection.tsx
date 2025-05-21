'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Track Steps",
    description: "Monitor your daily steps and progress",
    image: "/images/features/track.png"
  },
  {
    title: "Set Goals",
    description: "Create and achieve your fitness goals",
    image: "/images/features/goals.png"
  },
  {
    title: "Join Challenges",
    description: "Compete with friends and stay motivated",
    image: "/images/features/challenges.png"
  },
  {
    title: "Earn Rewards",
    description: "Get rewarded for your achievements",
    image: "/images/features/rewards.png"
  },
  {
    title: "Social Connect",
    description: "Connect with other fitness enthusiasts",
    image: "/images/features/social.png"
  },
  {
    title: "Health Insights",
    description: "Get detailed health analytics",
    image: "/images/features/insights.png"
  },
  {
    title: "Custom Plans",
    description: "Personalized fitness plans",
    image: "/images/features/plans.png"
  },
  {
    title: "Progress Reports",
    description: "Track your fitness journey",
    image: "/images/features/reports.png"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center -mb-10 md:mb-8 text-gray-900 dark:text-white">
          Features that make Steppps special
        </h2>
        
        {/* Mobile View - 4x2 Grid, left to right */}
        <div className="grid grid-cols-4 gap-1 md:hidden">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 flex flex-col items-center">
              <div className="relative w-full h-20 mb-2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xs font-semibold mb-1 text-gray-900 dark:text-white text-center">{feature.title}</h3>
              <p className="text-[10px] text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white  rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 