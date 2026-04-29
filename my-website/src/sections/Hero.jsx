import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white px-6">

      <div className="text-center max-w-3xl">

        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 tracking-widest"
        >
          QA Engineer → Full Stack Developer
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mt-4"
        >
          I build scalable web systems that don’t break under pressure
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-6 text-lg"
        >
          From testing broken systems to building them — I specialize in MERN & PERN stacks with authentication, role-based access, and real-world deployment experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-white text-black rounded-full font-medium">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white rounded-full">
            Contact Me
          </button>
        </motion.div>

      </div>
    </div>
  )
}