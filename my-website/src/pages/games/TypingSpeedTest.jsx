import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ================= PARAGRAPH POOL ================= */

const PARAGRAPHS = {
  easy: [
    "React makes UI development simple and fast.",
    "JavaScript is used for building interactive websites.",
    "Frontend development is fun and creative."
  ],
  medium: [
    "Frontend developers use React to build reusable components and manage application state efficiently.",
    "JavaScript enables dynamic behavior in web applications and powers modern frameworks.",
    "Building responsive user interfaces requires understanding layout, state, and user experience."
  ],
  hard: [
    "Modern frontend engineering involves managing complex state transitions, optimizing rendering performance, and ensuring seamless user experience across devices.",
    "React applications often rely on component composition, hooks, and efficient reconciliation algorithms to maintain scalability and performance.",
    "Advanced UI systems require careful architecture planning, including state management, API integration, and performance optimization strategies."
  ]
};

const TypingSpeedTest = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [errorMap, setErrorMap] = useState({}); // 🔥 heatmap

  /* ================= GET RANDOM TEXT ================= */

  const getRandomText = () => {
    const pool = PARAGRAPHS[difficulty];

    const random =
      pool[Math.floor(Math.random() * pool.length)];

    setText(random);
    setInput("");
    setErrorMap({});
  };

  /* prevent repeat same text */
  useEffect(() => {
    getRandomText();
  }, [difficulty]);

  /* ================= TIMER ================= */

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  /* ================= START ================= */

  const startGame = () => {
    setInput("");
    setTimeLeft(30);
    setIsRunning(true);
    setWpm(0);
    setAccuracy(100);
    setErrorMap({});
    getRandomText();
  };

  /* ================= INPUT HANDLER ================= */

  const handleChange = (e) => {
    if (!isRunning) return;

    const value = e.target.value;
    setInput(value);

    /* WPM */
    const words = value.trim().split(" ").length;
    const timeSpent = (30 - timeLeft) / 60 || 1;
    setWpm(Math.round(words / timeSpent));

    /* ACCURACY + HEATMAP */
    let correct = 0;
    const newErrors = { ...errorMap };

    for (let i = 0; i < value.length; i++) {
      if (value[i] === text[i]) {
        correct++;
      } else {
        newErrors[i] = true; // mark error position
      }
    }

    setErrorMap(newErrors);

    const acc = Math.round((correct / value.length) * 100) || 100;
    setAccuracy(acc);
  };

  /* ================= UI ================= */

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start pt-24 px-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Typing Speed Test ⌨️
      </h1>

      {/* DIFFICULTY */}
      <div className="flex gap-2 mb-4">
        {["easy", "medium", "hard"].map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={`px-3 py-1 rounded border ${
              difficulty === d
                ? "bg-purple-600 border-purple-500"
                : "bg-white/5 border-white/10"
            }`}
          >
            {d.toUpperCase()}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="flex gap-6 mb-4 text-gray-300">
        <p>⏱ {timeLeft}s</p>
        <p>⚡ WPM: {wpm}</p>
        <p>🎯 Accuracy: {accuracy}%</p>
      </div>

      {/* TEXT WITH HEATMAP */}
      <div className="max-w-3xl bg-white/5 p-4 rounded border border-white/10 mb-4 leading-relaxed">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={
              errorMap[i]
                ? "text-red-500"
                : input[i] === char
                ? "text-green-400"
                : "text-gray-300"
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
        className="w-full max-w-3xl h-32 p-3 bg-black/40 border border-white/10 rounded"
        placeholder="Start typing..."
      />

      {/* CONTROLS */}
      <div className="mt-5 flex gap-3">
        <button
          onClick={startGame}
          className="px-5 py-2 bg-purple-600 rounded"
        >
          Start
        </button>

        <button
          onClick={getRandomText}
          className="px-5 py-2 bg-gray-700 rounded"
        >
          New Text
        </button>
      </div>

    </section>
  );
};

export default TypingSpeedTest;