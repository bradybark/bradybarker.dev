// src/data/resumeData.js
import {
  Trophy,
  Gem,
  Cpu,
  GraduationCap,
  User,
  Terminal,
  Cloud,
  Database,
  // New icons for Impact Section
  Zap,
  Users,
  Award,
  Timer,
  Shield,
  CheckCircle,
  Activity,
  Server,
  Archive
} from 'lucide-react';

export const resumeData = {
  personalInfo: {
    name: "Brady Barker",
    title: "Software Engineer - Data & Analytics",
    location: "Alpharetta, GA",
    email: "bradybarker26@gmail.com",
    github: "https://github.com/bradybark",
    linkedin: "https://linkedin.com/in/bradybarker",
    bio: "Data & Analytics Engineer with 4+ years of experience modernizing enterprise-scale financial systems on cloud data platforms. Expertise in Databricks, Power BI, SQL/Python, Semantic Models, MSAS modernization, and automated cloud workflows.",
  },
  skills: [
    { name: "Languages", icon: Terminal, items: ["Python", "SQL", "DAX", "PowerShell", "JavaScript"] },
    { name: "Cloud & Analytics", icon: Cloud, items: ["Databricks", "Power BI", "Semantic Models", "Power Platform", "MSAS Cubes", "Cognos", "Azure", "REST APIs / Webhooks", "Delta Lake"] },
    { name: "Data Engineering", icon: Database, items: ["Data Modeling", "ETL/ELT", "Workflow Orchestration", "Performance Tuning", "Query Folding", "Data Quality / Validation Frameworks", "CI/CD for Data Pipelines"] }
  ],
  experience: [
    {
      company: "General Motors",
      role: "Software Engineer",
      period: "Jul 2021 - Present",
      location: "Roswell, GA",
      description: "Leading data architecture modernization and enterprise analytics initiatives.",
      achievements: [
        "Architected enterprise migration from on-prem MSAS Cubes to Databricks-backed Power BI Semantic Models, reducing refresh times by >99% and scaling to 3000+ finance users.",
        "Engineered Databricks ETL pipelines (SQL + Python) integrating multi-source financial/operational data into a unified analytics layer.",
        "Re-architected data models with Finance, Engineering, and Governance teams, enforcing quality controls that led to major gains in speed, reliability, and cross-system consistency.",
        "Built Power Automate/Power Apps flows enabling KPI write-back, commentary, Databricks job orchestration, and model refresh automation for 600+ users.",
        "Designed dimensional models (fact tables, dimension tables, surrogate keys, and SCD logic) supporting enterprise semantic layers.",
        "Developed and maintained interactive Power BI dashboards, collaborating with business stakeholders to define requirements and present complex data in clear, executive-ready format.",
        "Communicated analytical findings and data model behavior to non-technical stakeholders to support risk assessment, planning, and business strategy decisions.",
        "Partnered with Finance, Engineering, Governance, and Product stakeholders to define business metrics, validate analytical results, and align on model logic across multiple systems."
      ]
    }
  ],
  // Professional Projects (Displayed on Resume Page)
  projects: [
    {
      title: "Enterprise Cost Analytics Platform",
      role: "Lead BI Developer",
      description: "Led development for the CPURAM platform serving 500+ customers.",
      details: ["Aligned five Semantic Models with Finance leadership.", "Ensured continuous data support for USMCA compliance affecting $4.6B in annual trade value.", "Built automated workflows that created and maintained Gold Source tables"],
      tech: ["Databricks", "Power BI", "Semantic Models", "DAX"]
    },
    {
      title: "Global Compliance Reporting",
      role: "Data Engineer",
      description: "Integrated GHG (Greenhouse Gas) & IRA (Inflation Reduction Act) data for real-time reporting.",
      details: ["Built automated SQL/Python pipelines in Databricks.", "Created centralized GHG and IRA Gold Source tables, enabling cross-team and enterprise-wide reporting.", "Integrated data into PLP Semantic Models to enable compliance tracking, forecasting, and decision support."],
      tech: ["Python", "SQL", "Databricks", "Automation"],
      githubUrl: "https://github.com/bradybark/mars-web-scraper", 
    },
    {
      title: "System Modernization",
      role: "Full Stack Data Dev",
      description: "Modernized enterprise-wide reporting architecture and systems.",
      details: ["Updated & modernized PIM Cube & Semantic Model for 2,600+ users.", "Managed OneDeck updates and user support.", "Enhanced Cognos/MSAS/Power BI reporting to align with Enterprise Finance standards."],
      tech: ["MSAS", "Cognos", "Power BI", "Analytics"]
    }
  ],
  education: [
    { degree: "B.S. Computer Science", school: "Georgia Southwestern State University", location: "Americus, GA", year: "2019 - 2021" },
    { degree: "A.S. General Studies, CS Focus", school: "Georgia Highlands College", location: "Cartersville, GA", year: "2018 - 2019" }
  ],
  leadership: [
    { role: "Tournament Director", org: "Training Legends", description: "Managed end-to-end operations of 20+ large-scale tournaments, overseeing logistics and real-time data reporting." },
    { role: "Intercollegiate Athletics Baseball", org: "GSW & GHC", description: "Cultivated discipline, teamwork, and resilience through pursuit of personal and team performance goals." }
  ],
  awards: [
    "NCAA Varsity Athletics Baseball Scholarship",
    "Upsilon Pi Epsilon (International Honor Society for the Computing and Information Disciplines)",
    "The National Society of Leadership and Success (NSLS)",
    "Academic HOPE Scholarship",
    "Dean’s List",
    "Academic Achievement List"
  ],
  activities: [
    "NCAA and NJCAA Baseball", "FACEIT 10", "Former Esports Team Captain", "Volunteered @ Cherokee Humane Society & Miracle League"
  ]
};


export const impactData = [
  {
    id: 'cost-analytics',
    title: "Enterprise Cost Analytics",
    metrics: [
      {
        value: "99%",
        label: "Refresh Time Reduction",
        desc: "Migrated legacy MSAS cubes to optimized Databricks pipelines.",
        icon: "Zap",
        color: "yellow"
      },
      {
        value: "3,000+",
        label: "Finance Users Scaled",
        desc: "Supporting enterprise analytics across multiple finance divisions.",
        icon: "Users",
        color: "blue"
      },
      {
        value: "$4.6B",
        label: "Trade Value Supported",
        desc: "Ensured continuous data support for USMCA compliance reporting.",
        icon: "Award",
        color: "purple"
      }
    ],
    chart: {
      type: 'bar', // Vertical Bar
      title: "Pipeline Latency (Lower is Better)",
      subtitle: "Drastic reduction in refresh times",
      data: [
        { name: "Legacy", value: 720, label: "~12 Hours", fill: "#94a3b8" },
        { name: "New", value: 10, label: ">10 Mins", fill: "#22c55e" },
      ]
    }
  },
  {
    id: 'compliance',
    title: "Compliance Reporting",
    metrics: [
      {
        value: "< 15m",
        label: "Data Latency",
        desc: "Real-time ingestion of GHG & IRA data via Python/SQL pipelines.",
        icon: "Timer",
        color: "yellow"
      },
      {
        value: "100%",
        label: "Regulatory Compliance",
        desc: "Automated validation for critical reporting.",
        icon: "Shield",
        color: "green"
      },
      {
        value: "Cross-Team",
        label: "Unified Data Source",
        desc: "Single Gold Source utilized across Finance",
        icon: "Users",
        color: "blue"
      }
    ],
    chart: {
      type: 'benchmark', // Vertical Benchmark
      title: "Manual Effort (Hours)",
      subtitle: "Estimated Monthly hours spent before & after automation",
      data: [
        { name: "Manual Process", value: 40, label: "~40 Hours", fill: "#94a3b8" },
        { name: "Automated", value: 0.25, label: "< 15 Mins", fill: "#22c55e" },
      ]
    }
  },
  {
    id: 'pim',
    title: "System Modernization",
    metrics: [
      {
        value: "2,600+",
        label: "Global Users",
        desc: "Enhanced PIM Semantic Model improving maintainability and alignment to Finance reporting needs.",
        icon: "Users",
        color: "blue"
      },
      {
        value: "100%",
        label: "Uptime Reliability",
        desc: "Eliminated cube processing failures and improved end-to-end reliability of Finance reporting.",
        icon: "Server",
        color: "purple"
      },
      {
        value: "Standardized",
        label: "Enterprise Reporting",
        desc: "Built reusable reporting patterns in OneDeck and Cognos to streamline Finance self-service.",
        icon: "CheckCircle",
        color: "green"
      }
    ],
    chart: {
      type: 'capability-grid',
      icon: 'CheckCircle',
      title: "Modernization Scorecard",
      subtitle: "Key capabilities unlocked by the new architecture",
      data: [
        { label: "Legacy Cubes Retired", icon: "Archive", color: "green" },
        { label: "Cloud-Native Semantic Models", icon: "Cloud", color: "blue" },
        { label: "Standardized Reporting", icon: "FileText", color: "purple" },
        { label: "Automated Monitoring", icon: "RefreshCw", color: "yellow" }
      ]
    }
  }
];

export const MAIN_SECTIONS = [
  'hero',
  'experience',
  'projects',
  'skills',
  'education',
  'bio',
];

export const SIDE_NAV_ITEMS = [
  { id: 'experience', label: 'Experience', icon: Trophy },
  { id: 'projects', label: 'Key Projects', icon: Gem },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'bio', label: 'About Me', icon: User },
];

export const MOBILE_NAV_ITEMS = [
  { id: 'experience', label: 'Exp.', icon: Trophy },
  { id: 'projects', label: 'Projects', icon: Gem },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Edu.', icon: GraduationCap },
  { id: 'bio', label: 'Bio', icon: User },
];

export default resumeData;