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

// Import the raw JSON data
import profileData from './profile.json';

// Map string keys from JSON to actual React components
const iconMap = {
  Terminal: Terminal,
  Cloud: Cloud,
  Database: Database
};

// Reconstruct the skills array with Icons
const enrichedSkills = profileData.skills.map(skill => ({
  name: skill.category,
  icon: iconMap[skill.iconKey] || Cpu, // Fallback icon
  items: skill.items
}));

// Re-export in the format the App expects
export const resumeData = {
  ...profileData,
  skills: enrichedSkills
};

// --- RESTORED IMPACT DATA ---
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