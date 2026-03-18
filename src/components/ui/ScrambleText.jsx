import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

export default function ScrambleText({ children, className, trigger = true }) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(trigger);

  useEffect(() => {
    if (!isAnimating) {
      setDisplayText(children);
      return;
    }

    const chars = children.split('');
    const duration = 0.5;
    const frameCount = Math.ceil(duration * 60); // 60fps
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frameCount;

      const scrambledText = chars.map((char, index) => {
        if (progress > index / chars.length) {
          return char;
        }
        return getRandomCharacter();
      }).join('');

      setDisplayText(scrambledText);

      if (currentFrame >= frameCount) {
        clearInterval(interval);
        setDisplayText(children);
        setIsAnimating(false);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [children, isAnimating]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
}
