import React from 'react';
import { motion } from 'motion/react';

export default function ScrollImageReveal({ src, alt, className }) {
  const ref = React.useRef(null);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    />
  );
}
