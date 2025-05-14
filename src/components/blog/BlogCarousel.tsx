import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { BlogCard } from './BlogCard';
import { useBlogCarousel } from '@/hooks/useBlogCarousel';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface BlogCarouselProps {
  posts: {
    title: string;
    description: string;
    date: string;
    image: string;
    author: string;
  }[];
  autoPlay?: boolean;
}

export function BlogCarousel({ posts, autoPlay = true }: BlogCarouselProps) {
  const { currentIndex, nextSlide, prevSlide } = useBlogCarousel({ posts, autoPlay });

  const getCardStyle = (index: number) => {
    const diff = (currentIndex - index + posts.length) % posts.length;
    
    if (diff === 0) {
      // Current card (center)
      return {
        zIndex: 3,
        scale: 1,
        opacity: 1,
        blur: 0,
        translateX: 0,
        translateY: 0,
      };
    } else {
      // Previous card (top-left)
      return {
        zIndex: 2,
        scale: 0.95,
        opacity: 0.8,
        blur: 2,
        translateX: -20,
        translateY: -20,
      };
    }
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {posts.map((post, index) => {
          const cardStyle = getCardStyle(index);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: cardStyle.scale,
                x: cardStyle.translateX,
                y: cardStyle.translateY,
              }}
              transition={{
                duration: 0.7,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className={`
                absolute
                w-[95%]
                max-w-3xl
                h-[80%]
                backdrop-blur-${cardStyle.blur}
                ${cardStyle.zIndex === 3 ? 'shadow-black/50' : 'shadow-black/30'}
                sm:h-[80%]
              `}
              style={{
                zIndex: cardStyle.zIndex,
                opacity: cardStyle.opacity,
              }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
                className="bg-black/80 backdrop-blur-sm"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6">
      <button
              onClick={prevSlide}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-white"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-white"    
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-white" />
            </button>
      </div>
    </div>
  );
}
