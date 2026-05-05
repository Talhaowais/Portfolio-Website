import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden px-4 sm:px-6 pt-24 md:pt-28">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT CONTENT (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-xs mb-6">
            ● Available for freelance, part-time & full-time work
          </div>

          <h2 className="text-purple-400 font-medium tracking-widest text-sm sm:text-base">
            Hello, I'm
          </h2>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 leading-tight">
            Muhammad Talha
          </h1>

          <div className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 min-h-[40px]">
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

          <p className="mt-6 text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I build scalable, real-time web applications with a focus on performance,
            reliability, and clean architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2"
            >
              Let’s Build Something <ArrowRight size={18} />
            </button>

          </div>
        </motion.div>

        {/* RIGHT FLIP CARD (FIXED SCOPED EFFECT) */}
        <div className="flex justify-center w-full perspective-[1200px]">

          <motion.div
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => {
              setFlipped(false);
              setRotate({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[520px] h-[420px]"
          >

            {/* ================= FRONT SIDE ================= */}
            <div
              className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-6 shadow-2xl"
              style={{ backfaceVisibility: "hidden" }}
            >

              <div className="flex justify-between mb-6">
                <h3 className="text-purple-300 text-xs tracking-widest uppercase">
                  Developer Dashboard
                </h3>
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                  Active
                </span>
              </div>

              {/* PROFILE (ONLY TRIGGERS FLIP) */}
              <div className="flex items-center gap-4 mb-6">

                <div
                  className="relative w-16 h-16 rounded-full"
                  style={{
                    transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: "transform 0.1s ease",
                  }}
                >
                  <div className="absolute inset-0 rounded-full" />
                  <img
                    src="/profile.png"
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover border border-white/10"
                  />
                </div>

                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Muhammad Talha (MTS)
                  </h2>
                  <p className="text-gray-400 text-xs">
                    Full-Stack Developer • Former QA Engineer
                  </p>
                </div>

              </div>

              {/* CARDS */}
              <div className="grid grid-cols-2 gap-4">

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2">
                  <p className="text-xs text-gray-400 mb-2">CURRENT FOCUS</p>
                  <p className="text-sm text-white">
                    Building scalable real-time web and mobile applications
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2">
                  {["Real-Time Systems", "API Design", "Security"].map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">STACK</p>
                    <div className="flex flex-wrap gap-2">
                  {["React", "Node", "MongoDB","Supabase", "Postgres"].map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                </div>

              </div>

            </div>

            {/* ================= BACK SIDE ================= */}
            <div
              className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center p-6 shadow-2xl"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >

              <img
                src="/profile.png"
                className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-white/20 shadow-2xl object-cover"
              />

              <h2 className="text-white text-2xl font-semibold mt-6">
                Muhammad Talha (MTS)
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Full-Stack Developer • Former QA Engineer
              </p>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;