import React from "react";
import { motion } from "framer-motion";
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

      {/* SECTION TITLE (CENTERED) */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>

      {/* BIG STATEMENT */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl font-semibold max-w-4xl mx-auto mb-16 text-gray-200 leading-relaxed"
      >
        From QA Engineer to Full-Stack Developer — building real-time
        applications with a strong foundation in quality and performance.
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — STORY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 leading-relaxed mb-4">
            I started my journey in tech during the COVID period in late 2021,
            with a strong interest in software development. Like many beginners,
            the initial phase was challenging, and breaking into the industry
            wasn’t easy.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            To support my family, I took on multiple roles — working in a call
            center while also doing bike rides through Uber. During this time, I
            explored different paths in tech and discovered Quality Assurance (QA).
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Within a short period of focused learning, I secured my first role as
            a QA engineer. Starting with a modest salary, I fully committed myself
            to growth — learning continuously, improving my skills, and eventually
            mentoring junior team members. I also expanded into automation alongside
            manual testing.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            As I became financially stable, I revisited my original passion for
            development. I began learning modern technologies like React and advanced
            JavaScript, while also working on side projects.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Today, I am actively transitioning into a full-stack developer role —
            combining my background in QA with strong development skills to build
            scalable, real-time applications.
          </p>
        </motion.div>

        {/* RIGHT SIDE — CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="card">
            <Briefcase className="icon text-purple-400" />
            <h3>Experience</h3>
            <p>QA Engineer → Full-Stack Developer</p>
          </div>

          <div className="card">
            <Code className="icon text-cyan-400" />
            <h3>Development</h3>
            <p>MERN & PERN Stack Applications</p>
          </div>

          <div className="card">
            <Zap className="icon text-yellow-400" />
            <h3>Real-Time Apps</h3>
            <p>Socket.IO based systems</p>
          </div>

          <div className="card">
            <ShieldCheck className="icon text-green-400" />
            <h3>Security</h3>
            <p>JWT Authentication</p>
          </div>

          <div className="card">
            <Users className="icon text-blue-400" />
            <h3>Teamwork</h3>
            <p>Mentored Junior Engineers</p>
          </div>

          <div className="card">
            <Rocket className="icon text-pink-400" />
            <h3>Goal</h3>
            <p>Scalable real-world apps</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;