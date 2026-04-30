import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { projectsData } from "../data/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getIcon = (icon, color) => {
    const Icon = Icons[icon];
    return Icon ? <Icon size={18} className={color} /> : null;
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              layout
              className="border border-white/10 rounded-2xl p-6 bg-white/5 
              hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all"
            >
              {/* Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.stack}
                  </p>
                </div>

                <span>
                  {activeIndex === index
                    ? getIcon("ChevronUp", "text-purple-400")
                    : getIcon("ChevronDown", "text-purple-400")}
                </span>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 space-y-4"
                  >
                    {/* Description */}
                    <p className="text-gray-300">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-purple-400 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            {getIcon("CheckCircle2", "text-green-400")}
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 text-sm rounded-full 
                          bg-white/10 border border-white/10"
                        >
                          {t === "React" &&
                            getIcon("Atom", "text-cyan-400")}
                          {t === "Node.js" &&
                            getIcon("ServerCog", "text-green-500")}
                          {t === "MongoDB" &&
                            getIcon("Leaf", "text-green-600")}
                          {t === "PostgreSQL" &&
                            getIcon("Database", "text-blue-400")}
                          {t === "Socket.IO" &&
                            getIcon("Zap", "text-yellow-400")}
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-purple-600 hover:bg-purple-700 transition"
                      >
                        {getIcon("ExternalLink", "text-white")}
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        border border-white/20 hover:bg-white/10 transition"
                      >
                        {getIcon("Github", "text-white")}
                        Code
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;