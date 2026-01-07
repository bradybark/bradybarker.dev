export const personalProjects = [
  {
    title: "Excel Tools (CLI)",
    description: "A collection of utilities and scripts designed to enhance Excel workflows, automate repetitive tasks, and improve data processing efficiency.",
    details: [
      "Modular Python CLI to convert multi-sheet Excel files to CSV with flexible transforms.",
      "Excel-to-CSV command-line toolkit with renaming, filtering, coercion, and split outputs.",
      "Powerful Excel transformation CLI for clean, automated CSV exports.",
      "Python utility for converting and transforming .xlsx sheets into production-ready CSVs."
    ],
    tech: ["Python", "CLI", "Pandas", "Automation", "Excel API"],
    githubUrl: "https://github.com/bradybark/excel_tools", 
  },
  {
    title: "Inventory Manager",
    description: "A local-first React inventory and PO dashboard with smart reorder planning, vendor tools, and simple exports for small-team ops.",
    details: [
      "Local-first inventory management dashboard built with React, Vite, and Tailwind, with multi-org support.",
      "Inventory + PO + reorder planning app with localStorage storage, optional cloud sync, and Excel/JSON export.",
      "Modern inventory manager for multi-entity small businesses, featuring reorder logic and vendor tools.",
      "React-based inventory management suite with dashboards, sales velocity tracking, and automated reorder planning."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Business Logic"],
    githubUrl: "https://github.com/bradybark/tim-and-lobo",
  },
  {
    title: "Bark Budget",
    description: "A full-stack personal finance tracker with serverless architecture, real-time expense management, and data visualization for tracking spending habits.",
    details: [
      "Built with Next.js and deployed on Vercel with serverless API routes for expense CRUD operations.",
      "Leverages Vercel KV (Redis) for fast, scalable data storage with sub-millisecond read times.",
      "Interactive expense charts and spending analytics using Recharts for visual insights.",
      "Real-time expense tracking with categorization, filtering, and monthly budget monitoring.",
      "Responsive design optimized for mobile and desktop with Tailwind CSS styling.",
      "RESTful API design with proper error handling and data validation."
    ],
    tech: ["Next.js", "Vercel", "Redis (KV)", "React", "Tailwind CSS", "Serverless"],
    githubUrl: "https://github.com/bradybark/bark-budget",
  },
  {
    title: "bradybarker.dev",
    description: "The source code for this portfolio website! A modern, interactive portfolio featuring gamification elements, thoughtful UX design, and optimized performance.",
    details: [
      "Achievement system with unlockable milestones and confetti celebrations to engage visitors.",
      "Code-splitting and lazy loading for optimal performance with separate route bundles.",
      "Custom error boundaries and loading states for graceful degradation and better UX.",
      "Dark mode support with system preference detection and persistent theme state.",
      "Interactive data visualizations using Recharts to showcase engineering impact metrics.",
      "Hidden Easter egg game (Bug Zapper) discoverable through user exploration."
    ],
    tech: ["React", "Tailwind CSS", "Vite", "React Router", "Recharts", "Canvas Confetti"],
    githubUrl: "https://github.com/bradybark/bradybarker.dev",
  }
];