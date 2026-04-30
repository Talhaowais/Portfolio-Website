import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden px-6">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-xs mb-6">
            ● Available for freelance & full-time work
          </div>

          {/* NAME */}
          <h2 className="text-purple-400 font-medium tracking-widest">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Muhammad Talha
          </h1>

          {/* ROLE ANIMATION */}
          <div className="mt-4 text-xl md:text-2xl font-semibold text-gray-300">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Building Real-Time Web Apps",
                "Performance-Focused Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>

          {/* TAGLINE */}
          <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
            I build scalable, real-time web applications with a focus on performance,
            reliability, and clean architecture.
          </p>

          {/* BUILD STATEMENT */}
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-md">
            I build websites and applications that solve real problems.
            Share your idea — I can help turn it into a scalable, production-ready product.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2 shadow-lg hover:shadow-purple-500/30">
              Let’s Build Something <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition flex items-center gap-2">
              Resume <Download size={18} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className=" card relative w-[340px] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-6 shadow-2xl">

            {/* Header */}
            <h3 className="text-purple-400 text-xs tracking-widest mb-6">
              DEVELOPER PROFILE
            </h3>

            {/* Core Focus */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-lg">
                Building scalable, real-time web applications
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Focused on performance, reliability, and clean architecture to deliver production-ready systems.
              </p>
            </div>

            {/* Stack */}
            <div className="mb-5">
              <p className="text-gray-400 text-xs mb-2">CORE STACK</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "PostgreSQL"].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialty */}
            <div>
              <p className="text-gray-400 text-xs mb-2">SPECIALTY</p>
              <div className="flex flex-wrap gap-2">
                {["Real-Time Systems", "API Design", "JWT Auth", "System Thinking"].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-xl opacity-40 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;