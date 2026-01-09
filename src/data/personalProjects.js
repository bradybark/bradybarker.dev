// src/data/personalProjects.js
export const personalProjects = [
  {
    title: "Bark Budget",
    isPrivate: true, 
    description: "A full-stack personal finance tracker with serverless API architecture, real-time expense management, and data visualization for tracking spending habits.",
    details: [
      "Built with Next.js and deployed on Vercel with serverless API routes for expense CRUD operations.",
      "Leverages Vercel KV (Redis) for fast, scalable data storage with sub-millisecond read times.",
      "Interactive expense charts and spending analytics using Recharts for visual insights.",
      "Real-time expense tracking with categorization, filtering, and monthly budget monitoring.",
      "RESTful API design with proper error handling and data validation."
    ],
    tech: ["Next.js", "Vercel", "Redis (KV)", "React", "Tailwind CSS", "Serverless"],
    githubUrl: "https://github.com/bradybark/bark-budget",
  },
{
    title: "Inventory Manager",
    description: "A local-first React inventory and PO dashboard with smart reorder planning, vendor tools, snapshot generation, and cloud-sync for small-team ops.",
    details: [
      "Smart forecasting engine that calculates daily sales rates using customizable timeframes (3M, 6M, 1Y averages) to predict stockouts.",
      "Zero-config 'Cloud Sync' utilizing the File System Access API to persist data directly to a local JSON file for backup.",
      "Full Purchase Order lifecycle tracking with vendor management, ETA variance analysis, and 'Early/Late' delivery reporting.",
      "Client-side image optimization and URL-based snapshot sharing for instant, account-free collaboration.",
      "Comprehensive Excel reporting suite generating lead time analysis and full system backups."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage", "File System API"],
    githubUrl: "https://github.com/bradybark/tim-and-lobo",
  },
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
   title: "bradybarker.dev",
    description: "The source code for this portfolio website! A modern, interactive portfolio featuring gamification elements, thoughtful UX design, and optimized performance.",
    details: [
      "Achievement system with unlockable milestones and confetti celebrations to engage visitors.",
      "Code-splitting and lazy loading for optimal performance with separate route bundles.",
      "Custom error boundaries and loading states for graceful degradation and better UX.",
      "Interactive data visualizations using Recharts to showcase engineering impact metrics."
    ],
    tech: ["React", "Tailwind CSS", "Vite", "React Router", "Recharts", "Canvas Confetti"],
    githubUrl: "https://github.com/bradybark/bradybarker.dev",
  },
    {
    title: "Nestly",
    description: "A lightweight, zero-dependency family organization suite built with Vanilla JS. Features URL-based state management for instant, serverless sharing of lists and plans.",
    details: [
      "Serverless architecture uses URL hash compression to store and share data without a database.",
      "Built with pure Vanilla JavaScript and Vite for maximum speed and minimal bundle size.",
      "Includes 8+ tools: Grocery Lists, Chores, Recipes (with Cook Mode), Travel Itineraries, and encrypted Lockbox.",
      "Responsive, mobile-first design with local history tracking for recently accessed lists."
    ],
    tech: ["Vanilla JS", "Vite", "CSS3", "Vercel", "LZString"], 
    githubUrl: "https://github.com/bradybark/nestly",
  }
];