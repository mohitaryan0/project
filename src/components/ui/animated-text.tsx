'use client';

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: [30, 0], // from below to original position with bounce
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.7,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block align-bottom ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{ textAlign: "left" }}
    >
      {text.split("").map((char, i) => {
        if (char === "\n") {
          return <br key={i} className="my-4" />; // gap between lines
        }
        return (
          <motion.span
            key={i}
            className="inline-block"
            variants={child}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedText; 