'use client';

import { motion } from "framer-motion"
import { useMemo } from "react";

function Snowflake({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize={size}>
        ❄
      </text>
    </svg>
  );
}

// Pre-generated snowflake positions to avoid hydration mismatch
const snowflakeData = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: (i * 7.14 + (i % 3) * 10) % 100,
  size: 15 + (i % 3) * 5,
  duration: 15 + (i % 5) * 3,
  xOffset: (i % 2 === 0 ? 1 : -1) * (30 + (i % 4) * 10),
}));

export default function ChristmasGreeting() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-900 via-green-950 to-red-900 text-white">
      {/* Floating snowflakes decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        {snowflakeData.map((snow) => (
          <motion.div
            key={snow.id}
            className="absolute text-white/20"
            style={{ left: `${snow.left}%` }}
            initial={{ top: -20 }}
            animate={{
              top: '100vh',
              x: [0, snow.xOffset, 0],
            }}
            transition={{
              duration: snow.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Snowflake size={snow.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-6 py-6 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Merry Christmas Everyone 
          </motion.h1>
          
          <motion.p
            className="text-base md:text-lg text-white max-w-2xl mx-auto leading-snug drop-shadow-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
              Wishing you a season filled with  joy, love & hope 
          </motion.p>
        </motion.section>

        {/* Banner Image */}
        <motion.section
          className="w-full max-w-5xl flex-1 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/images/banner.png"
              alt="Christmas banner"
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section
          className="w-full max-w-2xl -mt-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-xl">
            <video
              src="/images/christmasVideo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="mt-2 text-center text-red-200/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <p className="text-lg">
          
             Christmas • 2025
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
