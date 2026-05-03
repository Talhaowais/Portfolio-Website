import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Import images from src/assets
import ticTacToeImg from "../assets/images/games/tic-tac-toe.png";
import typingTestImg from "../assets/images/games/typing-test.png";
import memoryGameImg from "../assets/images/games/memory-game.png";
import chatAppImg from "../assets/images/games/chat-app.png";

const games = [
  {
    name: "Tic Tac Toe",
    image: ticTacToeImg,
    route: "/games/tic-tac-toe",
  },
  {
    name: "Typing Speed Test",
    image: typingTestImg,
    route: "/games/typing",
  },
  {
    name: "Memory Game",
    image: memoryGameImg,
    route: null,
  },
  {
    name: "Mini Chat App",
    image: chatAppImg,
    route: null,
  },
];

const Games = () => {
  const navigate = useNavigate();

  const handleGameClick = (game) => {
    if (game.route) {
      navigate(game.route);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start pt-24 px-6">  

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Interactive Playground 🎮
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 leading-relaxed"
        >
          I built these small interactive projects to deepen my understanding of logic,
          real-time behavior, and user interaction. Each game reflects a different aspect
          of problem-solving — from state management to performance and system thinking.
        </motion.p>
      </div>

      {/* GAMES GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

        {games.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => handleGameClick(game)}
            className={`group ${
              game.route ? "cursor-pointer" : "cursor-default"
            }`}
          >

            {/* CARD */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition duration-300 group-hover:border-white/20">

              {/* IMAGE */}
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition duration-300"
              />

              {/* NAME */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
                  {game.name}
                </h3>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-xl" />

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Games;