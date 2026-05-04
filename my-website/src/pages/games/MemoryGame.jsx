import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Flame,
  Target,
  Laptop,
  Zap,
  Gamepad2,
  Smartphone,
  Star,
} from "lucide-react";

/* ================= ICON SET ================= */

const ICONS = [
  Rocket,
  Flame,
  Target,
  Laptop,
  Zap,
  Gamepad2,
  Smartphone,
  Star,
  Rocket,
  Flame,
  Target,
  Laptop,
  Zap,
  Gamepad2,
  Smartphone,
  Star,
  Rocket,
  Flame,
  Target,
  Laptop,
];

/* ================= LEVEL CONFIG ================= */

const LEVELS = {
  easy: { cols: 5, rows: 2, cards: 10 },
  medium: { cols: 5, rows: 4, cards: 20 },
  hard: { cols: 8, rows: 5, cards: 40 },
};

/* ================= CARD GENERATOR ================= */

const generateCards = (total) => {
  const pairs = total / 2;
  const selected = ICONS.slice(0, pairs);

  return [...selected, ...selected]
    .map((Icon, index) => ({
      id: index + "-" + Math.random(),
      Icon,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [level, setLevel] = useState("easy");
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [won, setWon] = useState(false);

  const config = LEVELS[level];

  /* ================= INITIAL GRID ================= */
  useEffect(() => {
    if (!gameStarted) {
      const initialCards = generateCards(config.cards).map((c) => ({
        ...c,
        flipped: false,
      }));
      setCards(initialCards);
    }
  }, [level, gameStarted, config.cards]);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  /* ================= START GAME ================= */
  const startGame = () => {
    const newCards = generateCards(config.cards).map((c) => ({
      ...c,
      flipped: true, // preview all cards
    }));

    setCards(newCards);
    setSelected([]);
    setMoves(0);
    setTime(0);
    setWon(false);

    setGameStarted(true);   // ✅ hides start button immediately
    setPreviewing(true);
    setRunning(false);

    setTimeout(() => {
      setCards((prev) =>
        prev.map((c) => ({ ...c, flipped: false }))
      );

      setPreviewing(false);
      setRunning(true);
    }, 2000);
  };

  /* ================= CLICK ================= */
  const handleClick = (card) => {
    if (
      previewing ||
      !running ||
      card.flipped ||
      card.matched ||
      selected.length === 2
    )
      return;

    const updated = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );

    const newSelected = [...selected, card];

    setCards(updated);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      setTimeout(() => checkMatch(newSelected), 500);
    }
  };

  /* ================= MATCH ================= */
  const checkMatch = ([a, b]) => {
    let updated;

    if (a.Icon === b.Icon) {
      updated = cards.map((c) =>
        c.Icon === a.Icon ? { ...c, matched: true } : c
      );
    } else {
      updated = cards.map((c) =>
        c.id === a.id || c.id === b.id
          ? { ...c, flipped: false }
          : c
      );
    }

    setCards(updated);
    setSelected([]);

    if (updated.every((c) => c.matched)) {
      setWon(true);
      setRunning(false);
    }
  };

  /* ================= GRID STYLE ================= */
  const gridStyle = {
    easy: "grid-cols-5 sm:grid-cols-5",
    medium: "grid-cols-5 sm:grid-cols-5",
    hard: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8",
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center pt-24 px-4">

      <h1 className="text-4xl font-bold mb-6">Memory Game 🧠</h1>

      {/* LEVEL BUTTONS */}
      <div className="flex gap-4 mb-4">
        {Object.keys(LEVELS).map((lvl) => (
          <button
            key={lvl}
            onClick={() => {
              setLevel(lvl);
              setGameStarted(false);
              setWon(false);
              setRunning(false);
            }}
            className={`px-4 py-2 rounded-lg border ${
              level === lvl
                ? "bg-purple-600 border-purple-400"
                : "bg-white/5 border-white/10"
            }`}
          >
            {lvl.toUpperCase()}
          </button>
        ))}
      </div>

      {/* START BUTTON (ONLY BEFORE GAME) */}
      {!gameStarted && (
        <button
          onClick={startGame}
          className="mb-6 px-6 py-3 bg-purple-600 rounded-xl font-semibold"
        >
          Start Game 🚀
        </button>
      )}

      {/* STATS */}
      {gameStarted && (
        <div className="flex gap-6 mb-6">
          <Stat label="Moves" value={moves} />
          <Stat label="Time" value={`${time}s`} />
        </div>
      )}

      {/* GRID (ALWAYS VISIBLE) */}
      <div className={`grid gap-3 w-full max-w-5xl mb-6 ${gridStyle[level]}`}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card)}
            className="aspect-square perspective"
          >
            <motion.div
              animate={{
                rotateY: card.flipped || card.matched ? 180 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-xl shadow-md">
                ❓
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <card.Icon size={28} className="text-white" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* WIN */}
      {won && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 text-center bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <h2 className="text-2xl mb-2">🎉 You Won!</h2>
          <p className="mb-1">Moves: {moves}</p>
          <p className="mb-4">Time: {time}s</p>

          <button
            onClick={startGame}
            className="px-5 py-2 bg-purple-600 rounded-lg"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </section>
  );
};

/* ================= STAT ================= */

const Stat = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-center">
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

export default MemoryGame;