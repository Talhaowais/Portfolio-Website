import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Briefcase,
  Code,
  Rocket,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>

      {/* ✨ GRADIENT TYPING HERO STATEMENT */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            <Typewriter
              words={[
                "From QA Engineer to Full-Stack Developer — building real-time applications with a strong foundation in quality and performance."
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT — TIMELINE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-6">
            My Journey (2021 → 2026)
          </h3>

          <div className="border-l border-white/10 pl-6 space-y-6">

            <div>
              <p className="text-purple-400 font-semibold">2021</p>
              <p className="text-gray-300">
                Started journey in tech during COVID, exploring development.
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">2022</p>
              <p className="text-gray-300">
                Worked in call center + Uber rides while learning tech.
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">2023</p>
              <p className="text-gray-300">
                Entered QA field, started as manual QA engineer.
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">2024</p>
              <p className="text-gray-300">
                Promoted growth in QA, started automation + mentoring juniors.
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">2025</p>
              <p className="text-gray-300">
                Revisited development, learned React & advanced JS.
              </p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">2026</p>
              <p className="text-gray-300">
                Transitioning fully into Full-Stack Developer role.
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT — HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="card">
            <Briefcase className="text-purple-400 mb-3" />
            <h3>Experience</h3>
            <p>QA → Full-Stack</p>
          </div>

          <div className="card">
            <Code className="text-cyan-400 mb-3" />
            <h3>Stack</h3>
            <p>MERN + PERN</p>
          </div>

          <div className="card">
            <Zap className="text-yellow-400 mb-3" />
            <h3>Real-Time</h3>
            <p>Socket.IO Apps</p>
          </div>

          <div className="card">
            <ShieldCheck className="text-green-400 mb-3" />
            <h3>Security</h3>
            <p>JWT Auth</p>
          </div>

          <div className="card">
            <Users className="text-blue-400 mb-3" />
            <h3>Mentorship</h3>
            <p>Trained Juniors</p>
          </div>

          <div className="card">
            <Rocket className="text-pink-400 mb-3" />
            <h3>Goal</h3>
            <p>Scalable Apps</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;