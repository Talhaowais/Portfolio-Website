import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* ================= AI LOGIC ================= */

const getEmptyCells = (board) =>
  board.map((c, i) => (c === null ? i : null)).filter((v) => v !== null);

const checkWinnerSimple = (board) => {
  for (let [a, b, c] of WIN_PATTERNS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const minimax = (board, depth, isMaximizing) => {
  const winner = checkWinnerSimple(board);

  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (board.every((c) => c)) return 0;

  const empty = getEmptyCells(board);

  if (isMaximizing) {
    let best = -Infinity;
    for (let i of empty) {
      board[i] = "O";
      best = Math.max(best, minimax(board, depth + 1, false));
      board[i] = null;
    }
    return best;
  } else {
    let best = Infinity;
    for (let i of empty) {
      board[i] = "X";
      best = Math.min(best, minimax(board, depth + 1, true));
      board[i] = null;
    }
    return best;
  }
};

const bestMove = (board) => {
  let bestScore = -Infinity;
  let move = null;

  for (let i of getEmptyCells(board)) {
    board[i] = "O";
    let score = minimax(board, 0, false);
    board[i] = null;

    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }

  return move;
};

/* ================= COMPONENT ================= */

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [gameStatus, setGameStatus] = useState("playing");
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("hard");
  const [isAIThinking, setIsAIThinking] = useState(false);

  const winSound = new Audio("/sounds/win.mp3");
  const loseSound = new Audio("/sounds/lose.mp3");
  const clickSound = new Audio("/sounds/click.mp3");

  /* ================= WIN EFFECTS ================= */

  const triggerWinEffects = () => {
    winSound.play();
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.8 },
    });
  };

  const triggerLoseEffects = () => {
    loseSound.play();
  };

  /* ================= WIN CHECK ================= */

  const checkWinner = (currentBoard) => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { player: currentBoard[a], line: pattern };
      }
    }
    return null;
  };

  /* ================= AI MOVE ================= */

  const aiMove = (currentBoard) => {
    setIsAIThinking(true);

    setTimeout(() => {
      let move;

      if (mode === "easy") {
        const empty = getEmptyCells(currentBoard);
        move = empty[Math.floor(Math.random() * empty.length)];
      }

      if (mode === "medium") {
        move =
          Math.random() > 0.5
            ? bestMove(currentBoard)
            : getEmptyCells(currentBoard)[0];
      }

      if (mode === "hard") {
        move = bestMove(currentBoard);
      }

      const newBoard = [...currentBoard];
      newBoard[move] = "O";

      const result = checkWinner(newBoard);

      setBoard(newBoard);

      if (result) {
        setWinner(result.player);
        setWinningLine(result.line);
        setGameStatus("won");
        setShowModal(true);
        triggerWinEffects();
        setIsAIThinking(false);
        return;
      }

      if (newBoard.every((c) => c)) {
        setGameStatus("draw");
        setShowModal(true);
        triggerLoseEffects();
        setIsAIThinking(false);
        return;
      }

      setIsXTurn(true);
      setIsAIThinking(false);
    }, 500);
  };

  /* ================= PLAYER MOVE ================= */

  const handleClick = (index) => {
    if (board[index] || gameStatus !== "playing" || isAIThinking) return;

    clickSound.play();

    const newBoard = [...board];
    newBoard[index] = "X";

    const result = checkWinner(newBoard);

    setBoard(newBoard);

    if (result) {
      setWinner(result.player);
      setWinningLine(result.line);
      setGameStatus("won");
      setShowModal(true);
      triggerWinEffects();
      return;
    }

    if (newBoard.every((c) => c)) {
      setGameStatus("draw");
      setShowModal(true);
      triggerLoseEffects();
      return;
    }

    setIsXTurn(false);
    aiMove(newBoard);
  };

  /* ================= RESET ================= */

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setWinningLine(null);
    setGameStatus("playing");
    setShowModal(false);
    setIsAIThinking(false);
  };

  /* ================= WIN LINE COORDS ================= */

  const getLineCoords = (line) => {
    const map = {
      0: { x: 50, y: 50 },
      1: { x: 150, y: 50 },
      2: { x: 250, y: 50 },
      3: { x: 50, y: 150 },
      4: { x: 150, y: 150 },
      5: { x: 250, y: 150 },
      6: { x: 50, y: 250 },
      7: { x: 150, y: 250 },
      8: { x: 250, y: 250 },
    };

    return {
      x1: map[line[0]].x,
      y1: map[line[0]].y,
      x2: map[line[2]].x,
      y2: map[line[2]].y,
    };
  };

  /* ================= UI ================= */

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start pt-24 px-6">

      {/* TITLE */}
      <motion.h1 className="text-4xl font-bold mb-3">
        Tic Tac Toe
      </motion.h1>

      {/* MODE */}
      <div className="mb-4 flex flex-col items-center gap-3 text-center">

  <p className="text-gray-300 max-w-md">
    Interactive game engine with AI decision-making, state management, and UI feedback system
  </p>

  <div className="flex gap-2">
    {["easy", "medium", "hard"].map((m) => (
      <button
        key={m}
        onClick={() => setMode(m)}
        className={`px-3 py-1 rounded-lg text-sm border transition ${
          mode === m
            ? "bg-purple-600 border-purple-500"
            : "bg-white/5 border-white/10"
        }`}
      >
        {m.toUpperCase()}
      </button>
    ))}
  </div>

</div>

      {/* STATUS */}
      <div className="mb-6 text-gray-300">
        {gameStatus === "playing" && "Turn: X"}
        {gameStatus === "won" && `Winner: ${winner} 🎉`}
        {gameStatus === "draw" && "Draw 😢"}
      </div>

      {/* BOARD */}
      <div className="relative w-[300px] h-[300px]">

        <div className="grid grid-cols-3 gap-3">
          {board.map((cell, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick(index)}
              className={`w-24 h-24 flex items-center justify-center text-3xl font-bold border rounded-xl cursor-pointer transition
              ${
                winningLine?.includes(index)
                  ? "bg-purple-500/30 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {cell}
            </motion.div>
          ))}
        </div>

        {/* WIN LINE ANIMATION */}
        {winningLine && (
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 300 300"
          >
            <line
              {...getLineCoords(winningLine)}
              stroke="#a855f7"
              strokeWidth="6"
              strokeLinecap="round"
              className="animate-draw-line"
            />
          </svg>
        )}

      </div>

      {/* RESET */}
      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
      >
        Reset Game
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#111] p-8 rounded-xl text-center w-80 border border-white/10">

            <h2 className="text-2xl font-bold mb-4">
              {winner ? `${winner} Wins 🎉` : "Game Over 😢"}
            </h2>

            <button
              onClick={resetGame}
              className="px-5 py-2 bg-purple-600 rounded-lg mr-2"
            >
              Play Again
            </button>

            

          </div>
        </div>
      )}

    </section>
  );
};

export default TicTacToe;