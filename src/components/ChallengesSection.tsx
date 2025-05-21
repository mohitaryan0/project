'use client';

import React, { useEffect, useState } from "react";

const text = "Walk Together, Bond Stronger";

const challengesData = [
  {
    title: "By Invite Only",
    description:
      "These challenges are not listed for everyone. You'll need to know the group's name or have a special code to join.",
  },
  {
    title: "Flexible Access",
    description:
      "Some challenges might require a small participation fee, while others could be free—depending on how your group sets it up.",
  },
  {
    title: "Shared Goals",
    description:
      "Together, you'll aim for collective milestones, enjoy friendly competition, and motivate each other toward a healthier lifestyle.",
  },
];

export default function ChallengesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".challenges-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
         // <-- replace with your image path
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Content Layer */}
      <div
        className={`relative z-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"
        } challenges-section`}
      >
        <div className="container mx-auto py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {text.split(" ").map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  {wordIndex > 0 && <span className="inline-block mx-0.1">&nbsp;</span>}
                  <span className="inline-block">
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="inline-block animate-gradient-letter"
                        style={{
                          animationDelay: `${(wordIndex * 10 + charIndex) * 0.1}s`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </React.Fragment>
              ))}
            </h2>
          </div>

          <p className="hidden md:block text-xl text-center text-[#008E6E] font-bold/500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Group Challenges are exclusive fitness journeys designed for private groups.
            Whether it&rsquo;s your family, friends, colleagues, or a special community,
            these challenges bring you closer while keeping you on your toes&mdash;literally!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challengesData.map((challenge, index) => (
              <div key={index} className="relative">
                <div className="p-6 animate-gradient-background text-white shadow-xl hover:scale-[1.05] transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                    <p className="text-white">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-left mt-12 flex items-center justify-center">
            <a
              href="/challenges"
              className="inline-flex hover:bg-gray-100 items-center px-8 py-4 border border-transparent text-m font-medium rounded-md text-black bg-[#33ccbb]"
            >
              Create Your Group Challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}