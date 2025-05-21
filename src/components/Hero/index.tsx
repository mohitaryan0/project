"use client";
import Image from "next/image";
import { useState, useRef, lazy, Suspense } from "react";
import clsx from 'clsx';

// Lazy load the animated card content
const AnimatedCard = lazy(() => import('@/components/Hero/AnimatedCard'));

export default function Hero() {
  const [isFirstRolled, setIsFirstRolled] = useState(false);
  const [isSecondRolled, setIsSecondRolled] = useState(false);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  const handleFirstRoll = () => {
    setIsFirstRolled(true);
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      firstCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const handleSecondRoll = () => {
    setIsSecondRolled(true);
    requestAnimationFrame(() => {
      secondCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
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
        <div className="container mx-auto px-2 sm:px-4 py-2 md:py-12 lg:py-5">
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
                    src="/images/hero/fit.png"
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
                    src="/images/hero/fit.png"
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
                <Suspense fallback={<div className="h-[300px] w-[800px] bg-gray-100 animate-pulse" />}>
                  <AnimatedCard
                    ref={secondCardRef}
                    isOpen={isSecondRolled}
                    onClick={() => setIsSecondRolled(false)}
                  />
                </Suspense>
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
                <Suspense fallback={<div className="h-[200px] w-full bg-gray-100 animate-pulse rounded-lg" />}>
                  {isSecondRolled && (
                    <AnimatedCard
                      ref={secondCardRef}
                      isOpen={isSecondRolled}
                      onClick={() => setIsSecondRolled(false)}
                      isMobile
                    />
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  )
};

