"use client";

import React from "react";

import { AnimatedTestimonials } from "@/components/Testimonal/animated-testimonials";

const text="What Our Users Say"
const testimonials = [
  {
    quote: "The fitness social network feature has completely transformed my workout routine. I love connecting with other fitness enthusiasts!",
    name: "Nandagopal P.",
    designation: "Fitness Enthusiast",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&dpr=2",
  },
  {
    quote: "The team challenges have been amazing for keeping me motivated. The sense of community is incredible!",
    name: "Mohit Aryan",
    designation: "Team Member",
    src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&dpr=2",
  },
  {
    quote: "The personal challenges feature has helped me set and achieve my fitness goals. Highly recommend!",
    name: "Christine",
    designation: "Team Leader",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&dpr=2",
  },
];

const Testimonal = () => {
  return (
    <section className="relative py-20  ">
      <div className="absolute inset-0">
        
      </div>
      <div className="container relative z-10 mx-auto px-4 text-[#116899]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 animate-gradient-letter text-[#116899]">
            {text.split(' ').map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {wordIndex > 0 && <span className="inline-block mx-0.1">&nbsp;</span>}
                <span className="inline-block">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block animate-gradient-letter"
                      style={{ animationDelay: `${(wordIndex * 10 + charIndex) * 0.1}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </React.Fragment>
            ))}
          </h1>
          <p className="text-lg text-[#116899] dark:text-gray-400">Real experiences from our community</p>
        </div>
        
        <div className="max-w-6xl mx-auto w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
};

export default Testimonal;