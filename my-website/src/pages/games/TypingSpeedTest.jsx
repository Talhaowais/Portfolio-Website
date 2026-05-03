import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ================= WORD BANK ================= */

const WORDS = [
  "react", "javascript", "frontend", "developer", "design",
  "performance", "optimization", "component", "state", "props",
  "application", "interface", "dynamic", "responsive", "architecture",
  "keyboard", "function", "variable", "object", "array",
  "system", "network", "logic", "browser", "coding"
];

/* ================= GENERATE TEXT ================= */

const generateText = (difficulty) => {
  let length = 20;

  if (difficulty === "easy") length = 15;
  if (difficulty === "medium") length = 30;
  if (difficulty === "hard") length = 60;

  let text = [];

  for (let i = 0; i < length; i++) {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    text.push(word);
  }

  return text.join(" ");
};

const TypingSpeedTest = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [errorMap, setErrorMap] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);

  const [showStartAnim, setShowStartAnim] = useState(false);
  const [showResult, setShowResult] = useState(false);

  /* ================= LOAD LEADERBOARD ================= */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("typing_scores")) || [];
    setLeaderboard(stored.slice(0, 5)); // always cap at 5
  }, []);

  /* ================= GENERATE TEXT ================= */
  const getRandomText = () => {
    const newText = generateText(difficulty);
    setText(newText);
    setInput("");
    setErrorMap({});
  };

  useEffect(() => {
    getRandomText();
  }, [difficulty]);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      endTest();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  /* ================= START ================= */
  const startGame = () => {
    setShowStartAnim(true);

    setTimeout(() => {
      setShowStartAnim(false);

      setInput("");
      setTimeLeft(30);
      setIsRunning(true);
      setWpm(0);
      setAccuracy(100);
      setErrorMap({});
      setShowResult(false);
      getRandomText();
    }, 1000);
  };

  /* ================= END TEST ================= */
  const endTest = () => {
    setIsRunning(false);
    saveScore();
    setShowResult(true);
  };

  /* ================= SAVE SCORE ================= */
  const saveScore = () => {
    const newScore = {
      wpm,
      accuracy,
      date: new Date().toLocaleTimeString(),
    };

    const updated = [newScore, ...leaderboard].slice(0, 5);
    setLeaderboard(updated);
    localStorage.setItem("typing_scores", JSON.stringify(updated));
  };

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    if (!isRunning) return;

    const value = e.target.value;
    setInput(value);

    const words = value.trim().split(" ");
    const timeSpent = (30 - timeLeft) / 60 || 1;
    setWpm(Math.round(words.length / timeSpent));

    let correct = 0;
    const newErrors = {};

    for (let i = 0; i < value.length; i++) {
      if (value[i] === text[i]) {
        correct++;
      } else {
        newErrors[i] = true;
      }
    }

    setErrorMap(newErrors);

    const acc = Math.round((correct / value.length) * 100) || 100;
    setAccuracy(acc);

    /* COMPLETE BEFORE TIME */
    if (value === text) {
      endTest();
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center pt-24 px-6">

      {/* START ANIMATION */}
      {showStartAnim && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <h2 className="text-3xl font-bold text-purple-400">
            Test Starting...
          </h2>
        </motion.div>
      )}

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Typing Speed Test ⌨️
      </h1>

      {/* DIFFICULTY */}
      <div className="flex gap-2 mb-6">
        {["easy", "medium", "hard"].map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={`px-4 py-1 rounded-full border ${
              difficulty === d
                ? "bg-purple-600 border-purple-500"
                : "bg-white/5 border-white/10"
            }`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-full max-w-3xl">
        <Stat label="Time" value={`${timeLeft}s`} />
        <Stat label="WPM" value={wpm} />
        <Stat label="Accuracy" value={`${accuracy}%`} />
      </div>

      {/* TEXT */}
      <div className="max-w-3xl bg-white/5 p-4 rounded-lg border border-white/10 mb-4 leading-relaxed">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={
              errorMap[i]
                ? "text-red-500"
                : input[i] === char
                ? "text-green-400"
                : "text-gray-400"
            }
          >
            {char}
          </span>
        ))}
      </div>

      {/* INPUT */}
      <textarea
        value={input}
        onChange={handleChange}
        disabled={!isRunning}
        className="w-full max-w-3xl h-32 p-3 bg-black/40 border border-white/10 rounded-lg"
        placeholder="Start typing..."
      />

      {/* BUTTONS */}
      <div className="mt-6 flex gap-3 flex-wrap justify-center">
        <button
          onClick={startGame}
          className="px-6 py-2 bg-purple-600 rounded-lg"
        >
          Start
        </button>

        <button
          onClick={getRandomText}
          className="px-6 py-2 bg-gray-700 rounded-lg"
        >
          New Text
        </button>
      </div>

      {/* RESULT */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-3xl text-center"
        >
          <h2 className="text-2xl mb-4">🎉 Test Complete</h2>

          <p className="mb-2">⚡ WPM: {wpm}</p>
          <p className="mb-2">🎯 Accuracy: {accuracy}%</p>

          <button
            onClick={startGame}
            className="mt-4 px-6 py-2 bg-purple-600 rounded-lg"
          >
            Try Again 🚀
          </button>
        </motion.div>
      )}

      {/* LEADERBOARD */}
      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-xl mb-3">🏆 Top Scores</h2>

        {leaderboard.slice(0, 5).map((s, i) => (
          <div
            key={i}
            className="flex justify-between bg-white/5 px-4 py-2 mb-2 rounded"
          >
            <span>{s.wpm} WPM</span>
            <span>{s.accuracy}%</span>
            <span className="text-gray-400 text-sm">{s.date}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

/* ================= STAT ================= */

const Stat = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

export default TypingSpeedTest;