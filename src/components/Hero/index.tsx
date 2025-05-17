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
        className="relative z-10 overflow-hidden flex flex-col justify-center items-center min-h-[60vh]"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center animate-gradient-letter mb-8 mt-10">
          Every journey start somewhere,<br />where are you today?
        </h1>
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
       
        </div>
        <div className="container mx-auto px-2 sm:px-4 py-10 md:py-12 lg:py-16">
          <div className="w-full flex flex-col items-center">
            {/* First Section */}
            <div className="relative w-full max-w-[1200px] md:h-[300px]">
              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Button + Text */}
                {!isFirstRolled && (
                  <>
                    <button
                      onClick={handleFirstRoll}
                        className="absolute right-[550px] top-1/2 translate-y-[40px] px-4 py-2 bg-[#33ccbb] text-black  rounded-md shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
                    >
                      Sounds like me
                    </button>
                    <div className="absolute left-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-green/70 shadow-lg z-40 p-6 flex items-center justify-center">
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
                    'absolute left-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-green/70 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
                    isFirstRolled ? 'scale-y-100' : 'scale-y-0'
                  )}
                >
                  <div className="text-black dark:text-white text-sm md:text-base">
                  
                    <p className="mb-4 font-bold ">🚀 Level Up with Steppps!</p>
                    <p className="font-semibold mb-2">Make your steps count with fun challenges inside the Steppps app:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">👣</span>
                        <span><strong>Walk Everyday in 2025</strong><br />Start the year right—walk every day and build healthy habits with Steppps.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🏏</span>
                        <span><strong>Support Your IPL Team</strong><br />Turn steps into team spirit. Walk, cheer, and show your colors—no pressure, just fun!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔒</span>
                        <span><strong> Personal Challenges (Premium)</strong><br />Set private step goals with Steppps Premium. Track your progress, your way.</span>
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
                <div className="w-full h-[180px] xs:h-[200px] mb-4 flex justify-center items-center">
                  <Image
                    src="/images/hero/fit.jpg"
                    alt="Active lifestyle"
                    width={160}
                    height={160}
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
                {/* Text */}
                {!isFirstRolled && (
                  <div className="bg-white shadow-lg z-40 p-4 xs:p-6 flex items-center justify-center w-full mb-4 rounded-lg">
                    <p className="text-black dark:text-white text-center text-xs xs:text-sm">
                      &quot;I&apos;m doing alright. No major issues — and I&apos;d like to keep it that way...&quot;
                    </p>
                  </div>
                )}
                {/* Button */}
                {!isFirstRolled && (
                  <button
                    onClick={handleFirstRoll}
                    className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4 text-sm xs:text-base"
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
                      'bg-white dark:bg-gray-800 shadow-lg z-50 p-4 xs:p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full mb-4 rounded-lg',
                      isFirstRolled ? 'scale-y-100' : 'scale-y-0 mb-0'
                    )}
                  >
                    <div className="text-black dark:text-white text-xs xs:text-sm">
                    <p className="mb-4 font-bold ">🚀 Level Up with Steppps!</p>
                    <p className="font-semibold mb-2">Make your steps count with fun challenges inside the Steppps app:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">👣</span>
                        <span><strong>Walk Everyday in 2025</strong><br />Start the year right—walk every day and build healthy habits with Steppps.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🏏</span>
                        <span><strong>Support Your IPL Team</strong><br />Turn steps into team spirit. Walk, cheer, and show your colors—no pressure, just fun!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔒</span>
                        <span><strong> Personal Challenges (Premium)</strong><br />Set private step goals with Steppps Premium. Track your progress, your way.</span>
                       </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Section */}
            <div className="relative w-full max-w-[1200px] my-8 md:my-10 md:h-[300px]">
              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Button + Text */}
                {!isSecondRolled && (
                  <>
                    <button
                      onClick={handleSecondRoll}
                      className="absolute left-[500px] top-1/2 translate-y-[45px] rounded-md px-4 py-2 bg-[#33ccbb] text-black  shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
                    >
                      Sounds like me
                    </button>
                    <div className="absolute right-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-green/70 shadow-lg z-40 p-6 flex items-center justify-center">
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
                    'absolute right-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-green/70 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
                    isSecondRolled ? 'scale-y-100' : 'scale-y-0'
                  )}
                >
                  <div className="text-black dark:text-white text-sm md:text-base">
                  <p className="mb-4">💪 Change Starts with One Step</p>
                    <p className="font-semibold mb-2">Getting active isn&apos;t easy—but you&apos;ve already started. Keep going with these challenges:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">👣</span>
                        <span><strong>Walk • Lose • Win</strong><br />Join the June 2025 leaderboard and win cash prizes by walking your way to the top!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📣</span>
                        <span><strong> IPL Team Challenges</strong><br />Turn your steps into team pride. Support your IPL team—no competition, just fun.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔒</span>
                        <span><strong>Personal Challenges (Premium)</strong><br />Go private with Steppps Premium. Set your own step goals and track progress your way.</span>
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
                <div className="w-full h-[180px] xs:h-[200px] mb-4 flex justify-center items-center">
                  <Image
                    src="/images/hero/fat.jpg"
                    alt="Lazy lifestyle"
                    width={160}
                    height={160}
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
                {/* Text */}
                {!isSecondRolled && (
                  <div className="bg-white shadow-lg z-40 p-4 xs:p-6 flex items-center justify-center w-full mb-4 rounded-lg">
                    <p className="text-black dark:text-white text-center text-xs xs:text-sm">
                      &quot;I&apos;ve been sitting more than I should. My energy&apos;s dropped, the belly&apos;s grown...&quot;
                    </p>
                  </div>
                )}
                {/* Button */}
                {!isSecondRolled && (
                  <button
                    onClick={handleSecondRoll}
                    className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4 text-sm xs:text-base"
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
                      'bg-white dark:bg-gray-800 shadow-lg z-50 p-4 xs:p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full mb-4 rounded-lg',
                      isSecondRolled ? 'scale-y-100' : 'scale-y-0 mb-0'
                    )}
                  >
                    <div className="text-black dark:text-white text-xs xs:text-sm">
                    <p className="mb-4">💪 Change Starts with One Step</p>
                    <p className="font-semibold mb-2">Getting active isn&apos;t easy—but you&apos;ve already started. Keep going with these challenges:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">👣</span>
                        <span><strong>Walk • Lose • Win</strong><br />Join the June 2025 leaderboard and win cash prizes by walking your way to the top!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📣</span>
                        <span><strong> IPL Team Challenges</strong><br />Turn your steps into team pride. Support your IPL team—no competition, just fun.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔒</span>
                        <span><strong>Personal Challenges (Premium)</strong><br />Go private with Steppps Premium. Set your own step goals and track progress your way.</span>
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

