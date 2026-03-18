import React, { useState, useEffect, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

export default function ScrambleText({ children, className }) {
  const spanRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Get the original text from Astro's template
    const astroIsland = spanRef.current?.closest('astro-island');
    const template = astroIsland?.querySelector('template[data-astro-template]');
    const originalText = template?.innerHTML.trim() || '';

    if (!originalText || hasAnimated) return;

    const span = spanRef.current;
    if (!span) return;

    const chars = originalText.split('');
    const duration = 0.5;
    const frameCount = Math.ceil(duration * 60);
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frameCount;

      const scrambledText = chars
        .map((char, index) => {
          if (progress > index / chars.length) {
            return char;
          }
          return getRandomCharacter();
        })
        .join('');

      span.textContent = scrambledText;

      if (currentFrame >= frameCount) {
        clearInterval(interval);
        span.textContent = originalText;
        setHasAnimated(true);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return <span ref={spanRef} className={className} />;
}
