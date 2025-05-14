"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import clsx from 'clsx';

export default function Hero() {
  const [isFirstRolled, setIsFirstRolled] = useState(false);
  const [isSecondRolled, setIsSecondRolled] = useState(false);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  const handleFirstRoll = () => {
    setIsFirstRolled(true);
    setTimeout(() => {
      firstCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };

  const handleSecondRoll = () => {
    setIsSecondRolled(true);
    setTimeout(() => {
      secondCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };


  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-r from-[#D9F8F2] to-[#CFF2E9] dark:bg-gray-dark"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#2B7A6F] mb-8 mt-18">
          Every journey start somewhere,<br />where are you today?
        </h1>
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="/images/features/image.png" alt="Background" fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="w-full flex flex-col items-center">
      {/* First Section */}
      <div className="relative w-full max-w-[1200px]  md:h-[300px]">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Button + Text */}
          {!isFirstRolled && (
            <>
              <button
                onClick={handleFirstRoll}
                className="absolute right-[550px] top-1/2 translate-y-[40px] px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
              >
                Sounds like me
              </button>
              <div className="absolute left-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-white shadow-lg z-40 p-6 flex items-center justify-center">
                <p className="text-black dark:text-white text-center text-sm md:text-3xl">
                  &quot;I&apos;m doing just fine - no storms on the horizon, and I plan to keep it that way.&quot;
                </p>
              </div>
            </>
          )}
          {/* Animated Card */}
          <div
            ref={firstCardRef}
            onClick={() => setIsFirstRolled(false)}
            className={clsx(
              'absolute left-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
              isFirstRolled ? 'scale-y-100' : 'scale-y-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">You&apos;ve been doing great so far—now let&apos;s level up your activity!</p>
              <p className="font-semibold mb-2">Explore these Steppps challenges designed for your next move:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk Everyday in 2025</strong><br />Step into the new year by walking daily. Build healthy habits, one step at a time.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏏</span>
                  <span><strong>IPL Team Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Not a fan of leaderboards? Premium users can set private step goals and track progress on their terms.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] z-10">
            <Image
              src="/images/hero/fit.jpg"
              alt="Active lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div className="pt-[350px]" />
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center">
          {/* Image */}
          <div className="w-full h-[200px] mb-4 flex justify-center items-center">
            <Image
              src="/images/hero/fit.jpg"
              alt="Active lifestyle"
              width={200}
              height={200}
              className="object-cover rounded-xl"
              priority
            />
          </div>
          {/* Text */}
          {!isFirstRolled && (
            <div className="bg-white shadow-lg z-40 p-6 flex items-center justify-center w-full mb-4">
              <p className="text-black dark:text-white text-center text-sm md:text-base">
                &quot;I&apos;m doing alright. No major issues — and I&apos;d like to keep it that way...&quot;
              </p>
            </div>
          )}
          {/* Button */}
          {!isFirstRolled && (
            <button
              onClick={handleFirstRoll}
              className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4"
            >
              Sounds like me
            </button>
          )}
          {/* Animated Card - only render on mobile if open */}
          {isFirstRolled && (
            <div
              ref={firstCardRef}
              onClick={() => setIsFirstRolled(false)}
              className={clsx(
                'bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full mb-4',
                isFirstRolled ? 'scale-y-100' : 'scale-y-0 mb-0'
              )}
            >
              <div className="text-black dark:text-white text-sm md:text-base">
                <p className="mb-4">You&apos;ve been doing great so far—now let&apos;s level up your activity!</p>
                <p className="font-semibold mb-2">Explore these Steppps challenges designed for your next move:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">👣</span>
                    <span><strong>Walk Everyday in 2025</strong><br />Step into the new year by walking daily. Build healthy habits, one step at a time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🏏</span>
                    <span><strong>IPL Team Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔒</span>
                    <span><strong>Personal Challenges</strong><br />Not a fan of leaderboards? Premium users can set private step goals and track progress on their terms.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Section */}
      <div className="relative w-full max-w-[1200px] my-10 md:h-[300px]">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Button + Text */}
          {!isSecondRolled && (
            <>
              <button
                onClick={handleSecondRoll}
                className="absolute left-[500px] top-1/2 translate-y-[45px] px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
              >
                Sounds like me
              </button>
              <div className="absolute right-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-white shadow-lg z-40 p-6 flex items-center justify-center">
                <p className="text-black dark:text-white text-center text-sm md:text-3xl">
                  &quot;Too much sitting, not enough moving — feeling the energy slump and the extra inches creeping in.&quot;
                </p>
              </div>
            </>
          )}
          {/* Animated Card */}
          <div
            ref={secondCardRef}
            onClick={() => setIsSecondRolled(false)}
            className={clsx(
              'absolute right-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
              isSecondRolled ? 'scale-y-100' : 'scale-y-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">We know change isn&apos;t easy after a sedentary lifestyle, but you&apos;re here to take the first step.</p>
              <p className="font-semibold mb-2">Here are some Steppps challenges to keep you motivated:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk - Lose - Win</strong><br />Join the steps challenge! Walk your way to the top 3 by June 2025 and win cash prizes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📣</span>
                  <span><strong>IPL Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Hate leaderboards? Premium users can set private step goals and track progress without the crowd.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] z-10">
            <Image
              src="/images/hero/fat.jpg"
              alt="Lazy lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div className="pt-[350px]" />
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center">
          {/* Image */}
          <div className="w-full h-[200px] mb-4 flex justify-center items-center">
            <Image
              src="/images/hero/fat.jpg"
              alt="Lazy lifestyle"
              width={200}
              height={200}
              className="object-cover rounded-xl"
              priority
            />
          </div>
          {/* Text */}
          {!isSecondRolled && (
            <div className="bg-white shadow-lg z-40 p-6 flex items-center justify-center w-full mb-4">
              <p className="text-black dark:text-white text-center text-sm md:text-base">
                &quot;I&apos;ve been sitting more than I should. My energy&apos;s dropped, the belly&apos;s grown...&quot;
              </p>
            </div>
          )}
          {/* Button */}
          {!isSecondRolled && (
            <button
              onClick={handleSecondRoll}
              className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4"
            >
              Sounds like me
            </button>
          )}
          {/* Animated Card - only render on mobile if open */}
          {isSecondRolled && (
            <div
              ref={secondCardRef}
              onClick={() => setIsSecondRolled(false)}
              className={clsx(
                'bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full mb-4',
                isSecondRolled ? 'scale-y-100' : 'scale-y-0 mb-0'
              )}
            >
              <div className="text-black dark:text-white text-sm md:text-base">
                <p className="mb-4">We know change isn&apos;t easy after a sedentary lifestyle, but you&apos;re here to take the first step.</p>
                <p className="font-semibold mb-2">Here are some Steppps challenges to keep you motivated:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">👣</span>
                    <span><strong>Walk - Lose - Win</strong><br />Join the steps challenge! Walk your way to the top 3 by June 2025 and win cash prizes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📣</span>
                    <span><strong>IPL Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔒</span>
                    <span><strong>Personal Challenges</strong><br />Hate leaderboards? Premium users can set private step goals and track progress without the crowd.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
       
        </div>
      </section>
    </>
  )
};

