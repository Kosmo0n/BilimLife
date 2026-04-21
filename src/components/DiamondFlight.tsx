import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export const DiamondFlight = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ 
            x: [0, (Math.random() - 0.5) * 200, window.innerWidth / 2 - 100], 
            y: [0, (Math.random() - 0.5) * 200, -window.innerHeight / 2 + 50],
            opacity: [1, 1, 0],
            scale: [1, 1.5, 0.5]
          }}
          transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
          onAnimationComplete={i === 7 ? onComplete : undefined}
          className="absolute"
        >
          <Gem className="text-cyan-400 fill-cyan-400" size={32} />
        </motion.div>
      ))}
    </div>
  );
};
