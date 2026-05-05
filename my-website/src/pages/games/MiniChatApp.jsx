import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= TALHA AI BRAIN ================= */
const talhaBrain = {
  intro:
    "I'm Muhammad Talha, a MERN & PERN Stack Developer with a strong QA background, focused on building scalable and high-quality applications.",

  skills: {
    frontend: ["React", "Tailwind", "JavaScript"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Supabase"],
    qa: ["Manual Testing", "Automation Testing"],
  },

  experience:
    "I have hands-on experience in both development and QA, which helps me build reliable and bug-free applications.",

  hire:
    "You should hire me because I combine development skills with QA expertise, ensuring both functionality and quality in every project.",

  personality: ["problem-solver", "detail-oriented", "fast learner"],

  // 👇 ADD YOUR REAL DETAILS HERE
  contact: {
    email: "talhaowais345@gmail.com",
    phone: "+92 302 9791613",
    whatsapp: "+92 302 9791613",
  },
};

/* ================= AI ENGINE ================= */
const getAIResponse = (input) => {
  const text = input.toLowerCase();

  const intents = [
    {
      keywords: ["who", "about", "introduce"],
      response: () => talhaBrain.intro,
    },
    {
      keywords: ["skills", "tech", "stack"],
      response: () => {
        const { frontend, backend, database, qa } = talhaBrain.skills;
        return `I work with ${frontend.join(", ")} on frontend, ${backend.join(
          ", "
        )} on backend, and ${database.join(
          ", "
        )}. I also have QA experience in ${qa.join(", ")}.`;
      },
    },
    {
      keywords: ["experience"],
      response: () => talhaBrain.experience,
    },
    {
      keywords: ["hire", "why"],
      response: () => talhaBrain.hire,
    },
    {
      keywords: ["strength", "personality"],
      response: () =>
        `My key strengths are: ${talhaBrain.personality.join(", ")}.`,
    },

    // ✅ NEW CONTACT INTENT
    {
      keywords: ["contact", "reach", "email", "phone", "number", "whatsapp"],
      response: () =>
        `You can contact me here:\n📧 Email: ${talhaBrain.contact.email}\n📞 Phone: ${talhaBrain.contact.phone}\n💬 WhatsApp: ${talhaBrain.contact.whatsapp}`,
    },
  ];

  for (let intent of intents) {
    if (intent.keywords.some((k) => text.includes(k))) {
      return intent.response();
    }
  }

  return "That's a great question! You can ask about my skills, experience, or contact details 😊";
};

/* ================= EMOJIS ================= */
const emojis = ["😀", "😂", "😍", "🔥", "👍", "😎", "😭", "🙏", "💯"];

/* ================= COMPONENT ================= */
const MiniChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi 👋 Ask me anything about Talha!",
      sender: "bot",
      time: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [thinkingText, setThinkingText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const chatRef = useRef(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const formatTime = (date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: input,
      sender: "user",
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    simulateAI(input);
  };

  const simulateAI = (input) => {
    const thinkingOptions = [
      "Thinking...",
      "Analyzing your question...",
      "Let me think...",
    ];

    setThinkingText(
      thinkingOptions[Math.floor(Math.random() * thinkingOptions.length)]
    );

    setTyping(true);

    const delay = 300 + input.length * 30;

    setTimeout(() => {
      const reply = getAIResponse(input);

      const botMsg = {
        id: Date.now(),
        text: reply,
        sender: "bot",
        time: new Date(),
      };

      setTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, delay);
  };

  const addEmoji = (emoji) => {
    setInput((prev) => prev + emoji);
    setShowEmoji(false);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6">Talha AI 💬</h1>

      {/* QUICK QUESTIONS */}
      <div className="flex flex-wrap gap-2 mb-4 max-w-xl">
        {["Who are you?", "Your skills?", "Why hire you?", "Contact?"].map(
          (q, i) => (
            <button
              key={i}
              onClick={() => {
                setInput(q);
                setTimeout(() => sendMessage(), 100);
              }}
              className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20"
            >
              {q}
            </button>
          )
        )}
      </div>

      {/* CHAT BOX */}
      <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-xl flex flex-col overflow-hidden">
        {/* MESSAGES */}
        <div
          ref={chatRef}
          className="h-[420px] overflow-y-auto p-4 space-y-3"
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
                  msg.sender === "user"
                    ? "bg-purple-600"
                    : "bg-white/10"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <p className="text-[10px] text-gray-300 mt-1 text-right">
                  {formatTime(msg.time)}
                </p>
              </div>
            </motion.div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-white/10 px-4 py-2 rounded-2xl text-sm animate-pulse">
                {thinkingText}
              </div>
            </div>
          )}
        </div>

        {/* EMOJI PICKER */}
        {showEmoji && (
          <div className="p-2 border-t border-white/10 flex flex-wrap gap-2 bg-black/40">
            {emojis.map((e, i) => (
              <button
                key={i}
                onClick={() => addEmoji(e)}
                className="text-xl hover:scale-110 transition"
              >
                {e}
              </button>
            ))}
          </div>
        )}

        {/* INPUT */}
        <div className="p-3 border-t border-white/10 flex items-center gap-2">
          <button
            onClick={() => setShowEmoji((p) => !p)}
            className="text-xl flex-shrink-0"
          >
            😊
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about Talha..."
            className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 outline-none"
          />

          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-purple-600 rounded-lg flex-shrink-0 whitespace-nowrap"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiniChatApp;