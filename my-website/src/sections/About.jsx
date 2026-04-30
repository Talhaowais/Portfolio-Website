import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  const timelineData = [
    { id: 1, text: `I started my journey in tech during the COVID period in late 2021, with a strong interest in software development. Like many beginners, the initial phase was challenging, and breaking into the industry wasn’t easy.` },
    { id: 2, text: `To support my family, I took on multiple roles — working in a call center while also doing bike rides through Uber. During this time, I explored different paths in tech and discovered Quality Assurance (QA).` },
    { id: 3, text: `Within a short period of focused learning, I secured my first role as a QA engineer. Starting with a modest salary, I fully committed myself to growth — learning continuously, improving my skills, and eventually mentoring junior team members.` },
    { id: 4, text: `I also expanded into automation alongside manual testing, gaining a deeper understanding of software quality and systems.` },
    { id: 5, text: `As I became financially stable, I revisited my original passion for development. I began learning modern technologies like React and advanced JavaScript, while also working on side projects.` },
    { id: 6, text: `With time, support from my family, and guidance from developer friends, I reached a point where I could fully commit to my long-term goal.` },
    { id: 7, text: `Today, I am actively transitioning into a full-stack developer role — combining my background in QA with strong development skills to build scalable, real-time applications.` }
  ];

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
              <p className="text-gray-300">Started journey in tech during COVID, exploring development.</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">2022</p>
              <p className="text-gray-300">Call center + Uber, secured first QA role.</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">2023</p>
              <p className="text-gray-300">Worked as a Junior QA Engineer, and growing in the QA domain.</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">2024</p>
              <p className="text-gray-300">Promoted growth in QA, started automation + mentoring juniors.</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">2025</p>
              <p className="text-gray-300">Revisited development, learned React & advanced JS.</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold">2026</p>
              <p className="text-gray-300">Transitioning fully into Full-Stack Developer role.</p>
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

      {/* 🔥 COMPACT SNAKE-STYLE JOURNEY GRID */}
      <div className="mt-32 max-w-5xl mx-auto relative px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-24">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </span>
        </h3>

        {/* THE GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 relative">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;
            const isRightCol = (index + 1) % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* CARD CONTENT */}
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all group">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                    {item.id}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* SVG CONNECTOR LOGIC */}
                {!isLast && (
                  <div className="hidden md:block absolute top-1/2 w-full pointer-events-none overflow-visible">
                    <svg width="200" height="200" className="absolute top-0 overflow-visible">
                      <defs>
                        <marker id={`arrow-${index}`} markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#22d3ee" />
                        </marker>
                      </defs>

                      {/* Path from Card 1 -> 2 (Horizontal Bridge) */}
                      {!isRightCol && (index + 1 < timelineData.length) && (
                        <path
                          d="M 460 0 L 585 0"
                          stroke="#a855f7"
                          strokeWidth="2.5"
                          strokeDasharray="5,5"
                          markerEnd={`url(#arrow-${index})`}
                        />
                      )}

                      {/* Path from Card 2 -> 3 (Vertical Snake Bridge) */}
                      {isRightCol && (
                        <path
                          d="M 460 0 C 550 0, 550 120, 0 120"
                          stroke="#ec4899"
                          strokeWidth="2.5"
                          strokeDasharray="5,5"
                          fill="none"
                          markerEnd={`url(#arrow-${index})`}
                          className="md:-ml-[460px]"
                        />
                      )}
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;