import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { skillsData } from "../data/skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Skills = () => {
  const topSkills = skillsData.filter((cat) => cat.top);

  // 🔥 Dynamic Icon Loader with Color Support
  const getIcon = (iconName, color = "") => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <IconComponent size={18} className={color} />
    ) : null;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        {/* ⭐ Top Skills */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            ⭐ Top Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {topSkills.map((cat) =>
              cat.skills.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-white/10 border border-white/10 
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] 
                  transition-all duration-300"
                >
                  {getIcon(skill.icon, skill.color)}
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 
              hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
              transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-r from-purple-500/10 to-pink-500/10 transition-all duration-500" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <span>
                  {getIcon(category.icon, "text-purple-400")}
                </span>
                <h3 className="text-xl font-semibold">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="flex items-center gap-2 px-3 py-1 text-sm rounded-full 
                    bg-white/10 border border-white/10 
                    hover:bg-purple-500/20 hover:scale-105
                    hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]
                    transition-all duration-300"
                  >
                    {getIcon(skill.icon, skill.color)}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;