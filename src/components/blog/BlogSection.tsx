'use client';

import { BlogCarousel } from "@/components/blog/BlogCarousel";
import React from 'react';

const text = "Latest from our Blog";

const blogPosts = [
  {
    title: "🏃‍♂️ I'm Not Unfit. I'm Just... Stuck.",
    description: "I don't remember when I stopped moving.Maybe it was after the baby came. Or when work-from-home became permanent. Or maybe when 7,000.",
    date: "May 1, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-1.png"
  },
  {
    title: "Walk the Talk: Midday Strolls with Steppps",
    description: "A post lunch stroll at work Lunch breaks at work often involve mindless scrolling, rushed meals, or just staying glued to the desk. But...",
    date: "May 5, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-2.png"
  },
  {
    title: "Coming Soon:Steppps Chat: Connecting Steppers Like Never Before",
    description: "Steppps Chat - Coming soon to Paid Challenges We're excited to introduce a brand-new feature to Steppps that brings the community even...",
    date: "May 10, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-3.png"
  }
];

export default function BlogSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: "url('/images/features/image.png')" }} // Replace with your actual image path
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#DFFDF4]/30 to-[#BDF7E6]/30 dark:from-gray-800/90 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="relative inline-block pb-2">
              {text}
              <span className="absolute left-0 bottom-0 w-2/3 h-2 rounded-l-full"
                style={{
                  background: 'linear-gradient(to right, var(--color-primary) 80%, transparent 100%)'
                }}
              ></span>
            </span>
          </h2>
          <div className="pl-4 border-l-4 border-primary/40">
            <p className="text-lg leading-7 mb-2 text-gray-700 dark:text-gray-300 italic">
              Stay updated with our latest insights and stories about fitness, wellness, and community engagement.
            </p>
            <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
              From personal journeys to new features, we share everything that matters in the Steppps community.
            </p>
          </div>
        </div>

        {/* Blog Carousel */}
        <div className="flex-1 h-[650px] overflow-hidden w-full max-w-3xl md:max-w-50%">
          <BlogCarousel posts={blogPosts} />
        </div>
      </div>
      </div>
    </section>
  );
}
