"use client";
import React, { useState } from "react";
import AnimatedText from "../ui/animated-text";
import WordByWordText from "../ui/word-by-word-text";
import { IoWalkSharp } from "react-icons/io5";
import Image from "next/image";

const TopSection: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const words = "Pick the vibe that matches you best and let&apos;s get started.".split(" ");

  return (
    <div className="relative w-full h-[750px] overflow-hidden ">
      {/* Background Image Layer */}
      <div
        className="absolute inset-10 bg-cover bg-center z-0 -mt-10 -mb-10 -mr-10 -ml-10"
        style={{ backgroundImage: "url('/images/features/image.png')", rotate:"180deg" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3F4FD]/70 to-[#D0EDFF]/70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center pl-15 pr-2 py-35 w-full h-full">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-[#2B7A6F] mb-20 pl-8 md:pl-16">
            <AnimatedText 
              text={`Every journey start \n somewhere\nwhere are you today?`}
              className="text-left whitespace-pre-line"
            />
          </h1>
          <div className="text-[#005B8F] mb-8 pl-8 md:pl-16 flex items-center gap-2 relative min-h-[2.5em]">
            <WordByWordText
              text="Pick the vibe that matches you best and let&apos;s get started."
              className="text-left"
              onComplete={() => setIsAnimating(false)}
              onWordChange={setCurrentWord}
            />
            {isAnimating && (
              <span
                className="inline-block align-middle text-2xl text-[#2B7A6F] absolute"
                style={{
                  left: `calc(${currentWord / words.length * 100}% + 1.5rem)`,
                  transition: "left 0.18s cubic-bezier(0.4,0,0.2,1)",
                  bottom: 0,
                }}
              >
                <IoWalkSharp />
              </span>
            
            )}
          </div>
          <button className="bg-[#005B8F] hover:bg-[#34c28b] transition-colors text-white px-6 py-3 rounded-lg ml-8 md:ml-16">
            Start Tracking
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <Image
            src="/images/top/walking.png"
            alt="Fitness transformation GIF"
            width={500}
            height={500}
            className="w-[600px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
