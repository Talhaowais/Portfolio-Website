export const projectsData = [
  {
    title: "Real-Time Task Manager (MERN)",
    stack: "MongoDB, Express, React, Node.js",
    description:
      "A full-stack real-time task management system with secure authentication, role-based access control, and live updates using WebSockets.",

    features: [
      "JWT Authentication with password hashing",
      "Role-based task visibility (creator & assigned user only)",
      "Real-time updates using Socket.IO",
      "Create, edit, delete, and assign tasks",
      "Profile image upload with cloud storage",
      "Multi-user collaboration system",
    ],

    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],

    live: "https://mern-todo-fullstack.vercel.app/login",
    // github: "PASTE_MERN_GITHUB_LINK_HERE",
  },

  {
    title: "Real-Time Task Manager (PERN - PostgreSQL Architecture)",
    stack: "PostgreSQL, Express, React, Node.js",
    description:
      "A PostgreSQL-based version of the real-time task manager built to explore relational database design and SQL-based architecture.",

    features: [
      "JWT Authentication & secure session handling",
      "Relational database schema (PostgreSQL)",
      "Real-time updates with Socket.IO",
      "Task assignment & controlled visibility",
      "CRUD operations with optimized queries",
      "Cloud-based deployment",
    ],

    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],

    live: "https://todo-list-swart-delta-73.vercel.app/login",
    // github: "PASTE_PERN_GITHUB_LINK_HERE",
  },

  {
  title: "Interactive Game Collection (Frontend Engineering Practice)",
  stack: "React, JavaScript, UI Logic, State Management, Real-Time UI",

  description:
    "A collection of four interactive web applications built to strengthen core frontend engineering skills including state management, real-time UI updates, and user interaction design. These projects were intentionally built as hands-on practice beyond tutorials to understand how real applications behave under dynamic user input.",

  features: [
    "Tic Tac Toe – logic-based turn system with win/draw detection",
    "Typing Speed Test – real-time input tracking and performance scoring",
    "Memory Game – card matching system with state reset logic",
    "Mini Chat App – simulated real-time messaging UI with dynamic rendering",
    "Focus on React hooks and component reusability",
    "Smooth and responsive UI interactions across all games",
  ],

  tech: ["React", "JavaScript", "CSS", "React Hooks", "State Management"],

  live: "/games",
  // github: "OPTIONAL_GITHUB_LINK_HERE",
},
];