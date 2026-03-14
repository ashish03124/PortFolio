import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  const particleCount = 50;
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      xStart: Math.random() * 100,
      yStart: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
      type: Math.random() > 0.6 ? 'sakura' : 'ember', // Mix of fire and flowers
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.type === 'sakura' ? 'bg-pink-300/40' : 'bg-demon-red'}`}
          style={{
            width: p.type === 'sakura' ? p.size * 2 : p.size,
            height: p.type === 'sakura' ? p.size : p.size,
            borderRadius: p.type === 'sakura' ? '100% 10% 100% 10%' : '50%',
            left: `${p.xStart}%`,
            top: `${p.yStart}%`,
            opacity: p.opacity,
            boxShadow: p.type === 'sakura' ? 'none' : '0 0 10px rgba(220, 38, 38, 0.8)',
          }}
          animate={{
            y: [0, p.type === 'sakura' ? 1000 : -1000],
            x: [0, Math.sin(p.id) * 100],
            rotate: [0, 360],
            opacity: [p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
