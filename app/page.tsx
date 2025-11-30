'use client';

import { motion } from "framer-motion"
import { Mail, Heart } from "lucide-react";

function Snowflake({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize={size}>
        ❄
      </text>
    </svg>
  );
}

export default function ChristmasGreeting() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-900 via-green-950 via to-red-900 text-white">
      {/* Floating snowflakes decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ top: -20, left: `${Math.random() * 100}%` }}
            animate={{
              top: '100vh',
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Snowflake size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-5 w-full h-screen flex flex-col justify-center items-center px-6 py-6 overflow-hidden">
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
            className="text-base md:text-lg text-white max-w-2xl mx-auto leading-snug drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wishing you and your loved ones a season filled with joy, warmth, and wonderful memories.
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
              className="w-full h-auto max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </motion.section>

        {/* Hero Video */}
        <motion.section
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative w-full max-w-3xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-red-300/30">
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
          className="mt-16 text-center text-red-200/70"
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
