import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

interface UseBlogCarouselProps {
  posts: BlogPost[];
  autoPlay?: boolean;
  interval?: number;
}

export function useBlogCarousel({ posts, autoPlay = true, interval = 5000 }: UseBlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPosts = posts.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPosts);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPosts) % totalPosts);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    posts,
  };
}
