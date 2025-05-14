"use client";
import React, { useState } from "react";
import AnimatedText from "../ui/animated-text";
import WordByWordText from "../ui/word-by-word-text";

import Image from "next/image";

const TopSection: React.FC = () => {
  // Removed unused state and variables

  return (
    <div className="relative w-full h-auto overflow-hidden pt-16 md:pt-0 ">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/features/image.png')", rotate: "180deg" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3F4FD]/70 to-[#D0EDFF]/70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center px-4 md:px-15 py-10 md:py-35 w-full h-full">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 mt-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2B7A6F] mb-8 md:mb-20 pl-0 md:pl-16 tracking-widest leading-[4rem]">
            <AnimatedText 
              text={`Small Steps,Big Wins \n   Welcome to Steppps`}
              className="text-left"
            />
          </h1>
          <div className="text-[#005B8F] mb-6 md:mb-8 -mt-18 text-center md:text-left pl-0 md:pl-16 flex items-center gap-2 relative min-h-[2.5em]">
            <WordByWordText
              text="Walk, Track, Thrive . It All Starts Here..."
              className="text-left"
            />
          </div>
          <button className="bg-[#005B8F] hover:bg-[#34c28b] transition-colors text-white px-6 py-3 rounded-lg ml-0 md:ml-16 w-full md:w-auto">
            Start Tracking
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <Image
            src="/images/top/walking.png"
            alt="Fitness transformation GIF"
            width={600}
            height={400}
            className="w-full h-auto max-w-[400px] md:max-w-[600px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
