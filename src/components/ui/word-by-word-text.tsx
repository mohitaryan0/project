'use client';

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface WordByWordTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
  onWordChange?: (index: number) => void;
}

const WordByWordText = ({
  text,
  className = "",
  onComplete,
  onWordChange,
}: WordByWordTextProps) => {
  const words = text.split(" ");
  const hasCompleted = useRef(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.3 },
      onStart: () => {
        if (onWordChange) onWordChange(i);
      },
    }),
  };

  useEffect(() => {
    hasCompleted.current = false;
  }, [text]);

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={child}
          className="inline-block"
          onAnimationComplete={() => {
            if (i === words.length - 1 && !hasCompleted.current) {
              hasCompleted.current = true;
              onComplete && onComplete();
            }
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WordByWordText; 