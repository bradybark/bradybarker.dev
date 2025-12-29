// src/data/resumeData.js
import {
  Trophy, Gem, Cpu, GraduationCap, User, Terminal, Cloud, Database,
  Zap, Users, Award, Timer, Shield, CheckCircle, Activity, Server, Archive
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

// ... keep your existing impactData export below ...
export const impactData = [
  // ... (Keep the content from your original file here) ...
];

export const MAIN_SECTIONS = ['hero', 'experience', 'projects', 'skills', 'education', 'bio'];

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