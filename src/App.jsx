import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  Github, Linkedin, Mail, Download, Moon, Sun, MapPin,
  Database, Server, BarChart3, Terminal, Cpu, GraduationCap,
  Trophy, Users, ChevronRight, Home, Gem, User, Menu, X,
  Dumbbell, Gamepad2, Dog, MousePointer2, Cloud, Award, Check,
  Timer, TrendingUp, Zap, ChevronDown, ChevronUp,
  Workflow, PieChart
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';

// --- DATA ---
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
      tech: ["Python", "SQL", "Databricks", "Automation"]
    },
    {
      title: "Product Information Modernization",
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

// Impact chart data
const performanceData = [
  { name: "Legacy System", value: 100, label: "~12 Hours" },
  { name: "Improved Stack", value: 2, label: "< 10 mins" },
];

// Section configs
const MAIN_SECTIONS = [
  'hero',
  'experience',
  'projects',
  'skills',
  'education',
  'bio',
];

const SIDE_NAV_ITEMS = [
  { id: 'experience', label: 'Experience', icon: Trophy },
  { id: 'projects', label: 'Key Projects', icon: Gem },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'bio', label: 'About Me', icon: User },
];

const MOBILE_NAV_ITEMS = [
  { id: 'experience', label: 'Exp.', icon: Trophy },
  { id: 'projects', label: 'Projects', icon: Gem },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Edu.', icon: GraduationCap },
  { id: 'bio', label: 'Bio', icon: User },
];

// --- HELPER COMPONENTS ---

const CustomBBICon = ({ size = '24px', className = '' }) => (
  <span
    className={`inline-flex items-center justify-center font-extrabold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}
    style={{ width: size, height: size, fontSize: `calc(${size} / 2)`, lineHeight: 1, transform: 'translateY(-1px)' }}
  >
    bb
  </span>
);

const SectionHeader = ({ icon: Icon, title, colorClass }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <div className={`p-3 rounded-xl ${colorClass}`}>
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-center">{title}</h2>
  </div>
);

// --- SECTIONS ---

const HeroSection = ({ resumeData }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[60vh] scroll-mt-32 overflow-hidden">
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

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            onClick={handleCopyEmail}
            className={`px-6 py-3 rounded-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer min-w-[170px]
              ${isCopied
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-blue-600/40'
              }
            `}
          >
            {isCopied ? <Check size={18} /> : <Mail size={18} />}
            {isCopied ? "Email Copied!" : "Contact Me"}
          </a>
          {/* Resume Button */}
          <a
            href="/Brady_Barker_Resume.pdf"
            download="Brady_Barker_Resume.pdf"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-all flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            <Download size={18} /> Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 md:gap-3 pl-0 md:pl-2 border-l-0 md:border-l border-slate-300 dark:border-slate-700 ml-0 md:ml-2 mt-2 md:mt-0 w-full md:w-auto justify-start md:justify-center">
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={25} />
            </a>
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Icons Animation */}
      <div className="hidden lg:flex w-72 h-72 relative shrink-0 items-center justify-center">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-30 blur-2xl animate-pulse-slow"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="relative z-10 grid grid-cols-2 gap-4 place-content-center">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
            <Database className="text-blue-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <BarChart3 className="text-cyan-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
            <Server className="text-indigo-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '4.5s' }}>
            <Cloud className="text-violet-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = ({ onClose }) => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // Watch the chart container width
  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry?.contentRect?.width) {
        setChartWidth(entry.contentRect.width);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      className="scroll-mt-24 animate-fade-in-up relative pt-10 pb-6 border-t border-b border-slate-100 dark:border-slate-800/50 my-10 bg-slate-50/50 dark:bg-slate-900/30 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:dark:bg-transparent sm:border-0 rounded-3xl"
    >
      {/* Top Right Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:right-0 p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
        title="Close Impact Section"
      >
        <X size={24} />
      </button>

      <SectionHeader
        icon={TrendingUp}
        title="Engineering Impact"
        colorClass="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={64} className="text-yellow-500" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">99%</div>
              <div className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                Refresh Time Reduction
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Migrated legacy MSAS cubes to optimized Databricks pipelines.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={64} className="text-blue-500" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">3,000+</div>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Finance Users Scaled
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Supporting enterprise analytics across multiple finance divisions.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={64} className="text-purple-500" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">$4.6B</div>
              <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                Trade Value Supported
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Ensured continuous data support for USMCA compliance reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Optimization Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Timer className="text-slate-400" size={20} />
            <h3 className="font-bold text-slate-900 dark:text-white">Pipeline Latency Optimization</h3>
          </div>

          <div ref={chartContainerRef} className="w-full h-[260px] min-h-[260px]">
            {chartWidth > 10 ? (
              <BarChart
                width={Math.max(chartWidth, 200)}
                height={260}
                data={performanceData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#94a3b8"
                  strokeOpacity={0.2}
                />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={140}
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload }) =>
                    active && payload && payload.length ? (
                      <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-xl">
                        {payload[0].payload.label}
                      </div>
                    ) : null
                  }
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                  {performanceData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={index === 0 ? "#94a3b8" : "#22c55e"}
                    />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                Loading chart…
              </div>
            )}
          </div>

          <div className="text-center text-xs text-slate-400 mt-2">
            Visualization of refresh time reduction from Legacy MSAS to Databricks/Power BI stack.
          </div>
        </div>

        {/* Tech Stack Diagram */}
        <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-2">
            <Server size={20} className="text-slate-400" /> Improved Data Stack
          </h3>

          <div className="relative space-y-2">
            {/* Item 1: Raw Data */}
            <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <div className="absolute left-3 p-2 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-lg shrink-0">
                <Database size={18} />
              </div>
              <div className="w-full text-center px-10">
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                  Raw Data
                </div>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Item 2: Databricks Workflow */}
            <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <div className="absolute left-3 p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg shrink-0">
                <Workflow size={18} />
              </div>
              <div className="w-full text-center px-10">
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  Databricks Workflow
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Creates Semantic Layer Tables
                </div>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Item 3: Semantic Models */}
            <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <div className="absolute left-3 p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 rounded-lg shrink-0">
                <BarChart3 size={18} />
              </div>
              <div className="w-full text-center px-10">
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                  Semantic Models
                </div>
              </div>
            </div>

            {/* Connector 3 */}
            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Item 4: Reports */}
            <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <div className="absolute left-3 p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-lg shrink-0">
                <PieChart size={18} />
              </div>
              <div className="w-full text-center px-10">
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  Pre-Built & Self-Service Reports
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Power BI Reports
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500 leading-relaxed text-center">
            End-to-end lineage ensuring data integrity from ingestion to executive dashboards.
          </p>
        </div>
      </div>

      {/* Bottom Close Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
        >
          <ChevronUp size={16} /> Hide Impact Section
        </button>
      </div>
    </section>
  );
};

const ExperienceSection = ({ resumeData }) => (
  <section id="experience" className="scroll-mt-24">
    <SectionHeader
      icon={Trophy}
      title="Professional Experience"
      colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    />
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
          <p className="text-slate-600 dark:text-slate-400 mb-6 italic">{job.description}</p>
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
);

const ProjectsSection = ({ resumeData }) => (
  <section id="projects" className="scroll-mt-24">
    <SectionHeader
      icon={Gem}
      title="Key Projects"
      colorClass="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumeData.projects.map((project, idx) => (
        <div
          key={idx}
          className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {project.role}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
          <ul className="space-y-2 mb-6 flex-grow">
            {project.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span> {detail}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SkillsSection = ({ resumeData }) => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader
      icon={Cpu}
      title="Technical Skills"
      colorClass="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resumeData.skills.map((skillGroup, idx) => {
        const Icon = skillGroup.icon;
        return (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <Icon size={18} className="text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="font-bold text-md">{skillGroup.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const EducationAndCommunitySection = ({ resumeData }) => (
  <section id="education" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Education */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Education</h2>
      </div>
      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{edu.school}</h3>
            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
              {edu.degree}
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500 mt-1">
              <span>{edu.location}</span> <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Leadership */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Users className="text-cyan-600 dark:text-cyan-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Leadership</h2>
      </div>
      <div className="space-y-6">
        {resumeData.leadership.map((lead, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{lead.role}</h3>
            <div className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">
              {lead.org}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {lead.description}
            </p>
          </div>
        ))}
        <div className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors">
          <h3 className="font-bold text-slate-900 dark:text-white">Community & Activities</h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {resumeData.activities.join(' • ')}
          </div>
        </div>
      </div>
    </div>
    {/* Awards */}
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Award className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-center">Awards</h2>
      </div>
      <ul className="space-y-4 text-left">
        {resumeData.awards.map((award, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
          >
            <ChevronRight size={18} className="text-purple-500 shrink-0 mt-0.5" /> {award}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const BioSection = () => (
  <section id="bio" className="scroll-mt-24 text-center">
    <SectionHeader
      icon={User}
      title="About Me"
      colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400">
          <Dumbbell size={20} />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
          Former college athlete, current home gym enthusiast.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
          <Gamepad2 size={20} />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
          Competitive FPS player and lifelong MMO/RPG fan.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
          <MousePointer2 size={20} />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
          PC Builder/Hobbyist and collector of way too many gaming mice.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
          <Dog size={20} />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
          Husband & Husky dad.
        </p>
      </div>
    </div>
  </section>
);

const Navbar = ({ darkMode, setDarkMode, isSidebarOpen, setIsSidebarOpen, scrollToSection }) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${
      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
    } backdrop-blur-md`}
  >
    <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex justify-between items-center h-full">
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
            <CustomBBICon size="32px" />
            <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">
              Brady Barker
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Home size={18} /> Home
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
);

const MobileNav = ({ scrollToSection }) => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 z-50 px-4 py-3 flex justify-between items-center overflow-x-auto no-scrollbar">
    {MOBILE_NAV_ITEMS.map(item => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]"
      >
        <item.icon size={20} /> {item.label}
      </button>
    ))}
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  const isManualScroll = useRef(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.willChange = 'scroll-position';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.willChange = 'auto';
    }
  }, [darkMode]);

  // Intersection Observer for Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sectionsToObserve = showImpact ? [...MAIN_SECTIONS, 'impact'] : MAIN_SECTIONS;

    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [showImpact]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScroll.current = true;

      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);

      setTimeout(() => {
        isManualScroll.current = false;
      }, 1000);

      if (window.innerWidth < 768) setIsSidebarOpen(false);
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
      {Icon && <Icon size={18} />} <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        scrollToSection={scrollToSection}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 border-r transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}
      >
        <div className="p-6 space-y-2 h-full overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">
            Sections
          </div>
          {SIDE_NAV_ITEMS.map(item => (
            <SideNavItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
            />
          ))}
          {showImpact && (
            <SideNavItem
              id="impact"
              label="Engineering Impact"
              icon={TrendingUp}
            />
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 transition-all duration-300 ease-in-out"
        style={{ transform: 'translateZ(0)' }}
      >
        <HeroSection resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />

        {/* Toggle Button for Impact Section */}
        {!showImpact && (
          <div className="flex justify-center -mt-12 mb-12">
            <button
              onClick={() => setShowImpact(true)}
              className="group flex flex-col items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <div className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-lg group-hover:border-blue-500/50 transition-all flex items-center gap-2 font-semibold">
                <TrendingUp size={18} /> See Engineering Impact
              </div>
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="w-0.5 h-3 bg-slate-300 dark:bg-slate-700"></span>
                <ChevronDown size={16} />
              </div>
            </button>
          </div>
        )}

        {showImpact && (
          <ImpactSection onClose={() => setShowImpact(false)} />
        )}

        <SkillsSection resumeData={resumeData} />
        <EducationAndCommunitySection resumeData={resumeData} />
        <BioSection />
        <footer className="pt-20 pb-8 text-center text-slate-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Brady Barker. Built with React & Tailwind CSS.</p>
        </footer>
      </main>

      <MobileNav scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
