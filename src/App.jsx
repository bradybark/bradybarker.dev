import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Moon, 
  Sun, 
  MapPin, 
  Globe,
  Database,
  Server,
  BarChart3,
  Terminal,
  Cpu,
  Atom,
  GraduationCap,
  Trophy,
  Users,
  ChevronRight,
  Phone,
  Home,
  Briefcase,
  Code2,
  Wrench,
  BookOpen,
  Gem,
  User,
  Menu, 
  X,
  Dumbbell, 
  Gamepad2, 
  Dog, 
  MousePointer2,
  Cloud,
  Award 
} from 'lucide-react';

/**
 * Personal Info
 */
const resumeData = {
  personalInfo: {
    name: "Brady Barker",
    title: "Software Engineer - Data & Analytics",
    location: "Alpharetta, GA",
    email: "bradybarker26@gmail.com",
    github: "https://github.com/bradybark",
    linkedin: "https://linkedin.com/in/bradybarker",
    bio: "Data & Analytics Engineer with 4+ years of experience modernizing enterprise-scale financial systems on cloud data platforms. Expertise in Databricks, Power BI, SQL/Python, Semantic Models, MSAS modernization, and automated cloud workflows.",
  },

  // A little window into my life outside of work. 
  personalBio: "Home gym enthusiast, gamer, Husky dad, husband, and somehow the owner of way too many gaming mice.",

  skills: [
    { 
      name: "Languages", 
      icon: Terminal,
      items: ["Python", "SQL", "DAX"] 
    },
    { 
      name: "Cloud & Analytics", 
      icon: Cloud, 
      items: ["Databricks", "Power BI", "Semantic Models", "Power Platform", "MSAS Cubes", "Cognos", "OneStream"] 
    }
    ,
    { 
      name: "Data Engineering", 
      icon: Database,
      items: ["Data Modeling", "ETL Pipelines", "Workflow Orchestration", "Performance Tuning", "Query Folding"] 
    }
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
  projects: [
    {
      title: "Enterprise Cost Analytics Platform",
      role: "Lead BI Developer",
      description: "Led development for the CPURAM platform serving 500+ customers.",
      details: [
        "Aligned five Semantic Models with Finance leadership.",
        "Ensured continuous data support for USMCA compliance affecting $4.6B in annual trade value.",
        "Built automated workflows that created and maintained Gold Source tables"
      ],
      tech: ["Databricks", "Power BI", "Semantic Models", "DAX"]
    },
    {
      title: "Global Compliance Reporting",
      role: "Data Engineer",
      description: "Integrated GHG (Greenhouse Gas) & IRA (Inflation Reduction Act) data for real-time reporting.",
      details: [
        "Built automated SQL/Python pipelines in Databricks.",
		"Created centralized GHG and IRA Gold Source tables, enabling cross-team and enterprise-wide reporting.",
		"Integrated data into PLP Semantic Models to enable compliance tracking, forecasting, and decision support."
      ],
      tech: ["Python", "SQL", "Databricks", "Automation"]
    },
    {
      title: "Product Information Modernization",
      role: "Full Stack Data Dev",
      description: "Modernized enterprise-wide reporting architecture and systems.",
      details: [
	    "Updated & modernized PIM Cube & Semantic Model for 2,600+ users.",
        "Managed OneDeck updates and user support.",
        "Enhanced Cognos/MSAS/Power BI reporting to align with Enterprise Finance standards."
      ],
      tech: ["MSAS", "Cognos", "Power BI", "Analytics"]
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "Georgia Southwestern State University",
      location: "Americus, GA",
      year: "2019 - 2021"
    },
    {
      degree: "A.S. General Studies, Computer Science Focus",
      school: "Georgia Highlands College",
      location: "Cartersville, GA",
      year: "2018 - 2019"
    }
  ],
  // Leadership roles 
  leadership: [
    {
      role: "Tournament Director",
      org: "Training Legends",
      description: "Managed end-to-end operations of 20+ large-scale tournaments, overseeing logistics and real-time data reporting."
    },
    {
      role: "Intercollegiate Athletics Baseball",
      org: "GSW & GHC",
      description: "Cultivated discipline, teamwork, and resilience through pursuit of personal and team performance goals."
    }
  ],
  
  // Awards Section
  awards: [
    "NCAA Varsity Athletics Baseball Scholarship",
    "Upsilon Pi Epsilon (International Honor Society for the Computing and Information Disciplines)",
    "The National Society of Leadership and Success (NSLS)",
    "Academic HOPE Scholarship",
    "Dean’s List",
    "Academic Achievement List"
  ],
  
  // Activities Section
  activities: [
      "NCAA and NJCAA Baseball", 
      "FACEIT 10", 
      "Former Esports Team Captain", 
      "Volunteered @ Cherokee Humane Society & Miracle League"
  ]
};

// --- CUSTOM GRADIENT 'bb' ICON COMPONENT ---
const CustomBBICon = ({ size = '24px', className = '' }) => (
  <span 
    className={`inline-flex items-center justify-center font-extrabold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${className}`} 
    style={{ 
      width: size, 
      height: size, 
      fontSize: `calc(${size} / 2)`, // Font size scales with container size
      lineHeight: 1, // Ensures text alignment
      transform: 'translateY(-1px)', // Fine-tune vertical center
    }}
  >
    bb
  </span>
);
// -----------------------------


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Ensure smooth scrolling performance for better GPU behavior
      document.body.style.willChange = 'scroll-position';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.willChange = 'auto';
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    }
  };

  const SideNavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
        activeSection === id 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-l-4 border-transparent'
      }`}
    >
      {Icon && <Icon size={18} />}
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* GLOBAL STYLES & ANIMATIONS */}
      <style>{`
        /* --- Performance Scroll Fixes --- */
        html {
            scroll-behavior: smooth; /* Ensures smooth navigation clicks */
        }
        body {
            overscroll-behavior: none; /* Prevents bounce effect */
            will-change: scroll-position;
        }

        /* Floating animation for icons (re-introduced) */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        
        /* Breathing pulse for background glow (re-introduced) */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
          will-change: opacity;
          transform: translateZ(0); 
        }

        /* Shimmering gradient text effect */
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-flow 8s linear infinite;
        }

        /* Smooth slide-up entrance */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* --- TOP NAVIGATION BAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} backdrop-blur-md`}>
        <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Left: Menu & Brand */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Menu"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div 
                className="flex items-center gap-2 cursor-pointer" 
                onClick={() => scrollToSection('hero')}
              >
                {/* Custom 'bb' Gradient Logo */}
                <CustomBBICon size="32px" />
                <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">
                  Brady Barker
                </span>
              </div>
            </div>
            
            {/* Right: Quick Links & Theme Toggle */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Home size={18} />
                Home
              </button>

              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-400" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR NAVIGATION --- */}
      <aside 
        className={`fixed left-0 top-16 bottom-0 w-64 border-r transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}
      >
        <div className="p-6 space-y-2 h-full overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">
            Sections
          </div>
          <SideNavItem id="experience" label="Experience" icon={Trophy} />
          <SideNavItem id="projects" label="Key Projects" icon={Gem} />
          <SideNavItem id="skills" label="Skills" icon={Cpu} />
          <SideNavItem id="education" label="Education" icon={GraduationCap} />
          <SideNavItem id="bio" label="About Me" icon={User} />
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main 
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 transition-all duration-300 ease-in-out"
        style={{ transform: 'translateZ(0)' }} /* Force main content to its own layer */
      >
        
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[60vh] scroll-mt-32 overflow-hidden">
          
          {/* Hero Text */}
          <div className="flex-1 space-y-6 animate-fade-in-up text-left max-w-xl">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
                Data & Analytics Engineer
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <MapPin size={16} />
                {resumeData.personalInfo.location}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Data Driven. <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-text pb-2">
                Cloud Native.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {resumeData.personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={`mailto:${resumeData.personalInfo.email}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="/Brady_Barker_Resume.pdf" 
                download="Brady_Barker_Resume.pdf"
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-all flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                <Download size={18} />
                Resume
              </a>
              
              {/* Social Icons */}
              <div className="flex gap-3 pl-2 border-l border-slate-300 dark:border-slate-700 ml-2">
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Floating Icons Animation*/}
          <div className="hidden lg:flex w-72 h-72 relative shrink-0 items-center justify-center">
             <div
               className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-30 blur-2xl animate-pulse-slow" 
               style={{ transform: "translateZ(0)" }}
             ></div>
             {/* Icon Grid */}
             <div className="relative z-10 grid grid-cols-2 gap-4 place-content-center">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ willChange: 'transform', animationDelay: '0s' }}>
                  <Database className="text-blue-500" size={32} />
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ willChange: 'transform', animationDelay: '1.5s' }}>
                  <BarChart3 className="text-cyan-500" size={32} />
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ willChange: 'transform', animationDelay: '3s' }}>
                  <Server className="text-indigo-500" size={32} />
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ willChange: 'transform', animationDelay: '4.5s' }}>
                  <Cloud className="text-violet-500" size={32} />
                </div>
             </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <Trophy size={24} />
            </div>
            <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            {resumeData.experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
                    <div className="text-lg text-blue-600 dark:text-blue-400 font-medium">{job.role}</div>
                  </div>
                  <div className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full self-start sm:self-auto">
                    {job.period}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                  {job.description}
                </p>

                <ul className="space-y-4">
                  {job.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex gap-3 text-slate-700 dark:text-slate-300 group">
                      <ChevronRight size={20} className="text-blue-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400">
              <Gem size={24} />
            </div>
            <h2 className="text-3xl font-bold text-center">Key Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{project.role}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resumeData.skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-4 text-slate-900 dark:text-white">
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    <h3 className="font-bold text-lg">{skillGroup.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, iIdx) => (
                      <span key={iIdx} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EDUCATION & LEADERSHIP/AWARDS GRID */}
        <section id="education" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Education */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-center">Education</h2>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">{edu.degree}</div>
                  <div className="flex justify-between items-center text-sm text-slate-500 mt-1">
                    <span>{edu.location}</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Leadership & Activities */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="text-cyan-600 dark:text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-center">Leadership & Activities</h2>
            </div>
            <div className="space-y-6">
              {/* Leadership Roles */}
              {resumeData.leadership.map((lead, idx) => (
                <div key={idx} className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white">{lead.role}</h3>
                  <div className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{lead.org}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              ))}
              
              {/* Current Community and Activities */}
              <div className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white">Community & Activities</h3>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {resumeData.activities.join(' • ')}
                  </div>
              </div>
            </div>
          </div>

          {/* Column 3: Awards */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold text-center">Awards & Recognition</h2>
            </div>
            <ul className="space-y-4 text-left">
              {resumeData.awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <ChevronRight size={18} className="text-purple-500 shrink-0 mt-0.5" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT ME SECTION - COMPACT CARDS */}
        <section id="bio" className="scroll-mt-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <User size={24} />
            </div>
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Active Lifestyle Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400">
                <Dumbbell size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">Former college athlete, current home gym enthusiast.</p>
              </div>
            </div>

            {/* Gamer Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                <Gamepad2 size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">Competitive FPS player and lifelong MMO/RPG fan.</p>
              </div>
            </div>

            {/* Collector Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                <MousePointer2 size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">PC Builder/Hobbyist and collector of way too many gaming mice.</p>
              </div>
            </div>

            {/* Family Man Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                <Dog size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">Husband & Husky dad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-8 text-center text-slate-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Brady Barker. Built with React & Tailwind CSS.</p>
        </footer>

      </main>
      
      {/* Mobile Nav (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 z-50 px-4 py-3 flex justify-between items-center overflow-x-auto no-scrollbar">
         <button onClick={() => scrollToSection('experience')} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]">
            <Trophy size={20} />
            Exp.
         </button>
         <button onClick={() => scrollToSection('projects')} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]">
            <Gem size={20} />
            Projects
         </button>
         <button onClick={() => scrollToSection('skills')} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]">
            <Cpu size={20} />
            Skills
         </button>
         <button onClick={() => scrollToSection('education')} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]">
            <GraduationCap size={20} />
            Edu.
         </button>
         <button onClick={() => scrollToSection('bio')} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]">
            <User size={20} />
            Bio
         </button>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 1cm; }
          body { background: white !important; color: black !important; }
          nav, aside, button, footer { display: none !important; }
          .min-h-screen { min-height: auto !important; }
          main { padding-top: 0 !important; margin-left: 0 !important; }
          section { margin-bottom: 2cm !important; page-break-inside: avoid; }
          .text-slate-400 { color: #666 !important; }
          .bg-clip-text { -webkit-text-fill-color: black !important; background: none !important; }
        }
      `}</style>
    </div>
  );
};

export default App;