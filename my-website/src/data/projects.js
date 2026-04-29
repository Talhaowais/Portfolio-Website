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

    live: "PASTE_MERN_LIVE_LINK_HERE",
    github: "PASTE_MERN_GITHUB_LINK_HERE",
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

    live: "PASTE_PERN_LIVE_LINK_HERE",
    github: "PASTE_PERN_GITHUB_LINK_HERE",
  },
];