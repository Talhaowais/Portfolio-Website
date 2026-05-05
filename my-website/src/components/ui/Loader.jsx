import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999]">
      
      {/* Glow background */}
      <div className="absolute w-[200px] h-[200px] bg-purple-500/30 blur-[100px] rounded-full" />

      {/* Logo */}
      <motion.img
        src="/logo.png"   // 👈 put your logo in public folder
        alt="Loading..."
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="w-24 h-24 object-contain"
      />

      {/* Optional loading text */}
      <p className="absolute bottom-10 text-gray-400 text-sm tracking-widest">
        Loading experience...
      </p>
    </div>
  );
};

export default Loader;