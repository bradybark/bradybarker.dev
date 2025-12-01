import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  X,
  Zap,
  Users,
  Award,
  Timer,
  Server,
  Database,
  Workflow,
  BarChart3,
  PieChart,
  ChevronUp,
  Shield,
  CheckCircle,
  Activity,
  LayoutGrid,
  Cloud,
  FileText,
  RefreshCw,
  Archive
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  AreaChart,
  Area,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LabelList,
  ComposedChart,
  Line
} from 'recharts';
import { impactData } from '../../data/resumeData';
import SectionHeader from '../common/SectionHeader';

const ICON_MAP = {
  Zap,
  Users,
  Award,
  Timer,
  Shield,
  CheckCircle,
  Activity,
  Server,
  Database,
  LayoutGrid,
  Cloud,
  FileText,
  RefreshCw,
  Archive
};

const ImpactSection = ({ onClose }) => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const [activeTabId, setActiveTabId] = useState(impactData[0].id);

  const activeData = impactData.find(d => d.id === activeTabId) || impactData[0];

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

  // --- Dynamic Chart Rendering Logic ---
  const renderChart = () => {
    const width = Math.max(chartWidth, 200);
    const height = 260;

    switch (activeData.chart.type) {
      case 'bar': // Horizontal Bar (Cost Analytics)
        return (
          <BarChart
            width={width}
            height={height}
            data={activeData.chart.data}
            layout="vertical"
            margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#94a3b8" strokeOpacity={0.2} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={100}
              tick={{ fill: "#64748b", fontSize: 11, fontWeight: "bold" }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) =>
                active && payload && payload.length ? (
                  <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-xl border border-slate-700">
                    <div className="font-bold mb-1">{payload[0].payload.name}</div>
                    <div className="text-slate-300">{payload[0].payload.label}</div>
                  </div>
                ) : null
              }
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
              {activeData.chart.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="label" 
                position="right" 
                fill="#94a3b8" 
                fontSize={12} 
                fontWeight="bold" 
              />
            </Bar>
          </BarChart>
        );

      case 'benchmark': // Vertical Benchmark (Compliance)
        return (
          <BarChart
            width={width}
            height={height}
            data={activeData.chart.data}
            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.1} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: "600" }} 
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.05)" }}
              content={({ active, payload }) =>
                active && payload && payload.length ? (
                  <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-xl border border-slate-700">
                    <div className="font-bold mb-1">{payload[0].payload.name}</div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].color }}></span>
                      <span>Value: {payload[0].value}</span>
                    </div>
                  </div>
                ) : null
              }
            />
            <Bar 
              dataKey="value" 
              radius={[8, 8, 0, 0]} 
              barSize={60}
              minPointSize={3}
              animationDuration={1000}
            >
              {activeData.chart.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="label" 
                position="top" 
                fill="#94a3b8" 
                fontSize={14} 
                fontWeight="bold" 
                offset={10}
              />
            </Bar>
          </BarChart>
        );

      case 'composed': // Scale vs Stability (Composed Chart)
        return (
          <ComposedChart
            width={width}
            height={height}
            data={activeData.chart.data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.1} />
            <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} />
            <YAxis yAxisId="left" hide />
            <YAxis yAxisId="right" orientation="right" hide />
            <Tooltip
              content={({ active, payload, label }) =>
                active && payload && payload.length ? (
                  <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-xl border border-slate-700">
                    <div className="font-bold mb-2">{label}</div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-300">Users: <span className="text-white">{payload[0].value}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-300">Errors: <span className="text-white">{payload[1].value}</span></span>
                    </div>
                  </div>
                ) : null
              }
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} iconSize={8} />
            
            <Bar yAxisId="left" dataKey="users" name="Active Users" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
            
            <Line yAxisId="right" type="monotone" dataKey="failures" name="System Errors" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: "#ef4444", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6, fill: "#ef4444" }} />
          </ComposedChart>
        );

      case 'capability-grid': // NEW: Modernization Scorecard
        return (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full w-full">
            {activeData.chart.data.map((badge, idx) => {
              const Icon = ICON_MAP[badge.icon] || CheckCircle;
              const colorConfig = {
                green:  { bg: "bg-green-50 dark:bg-green-900/20",  text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800" },
                blue:   { bg: "bg-blue-50 dark:bg-blue-900/20",    text: "text-blue-700 dark:text-blue-300",   border: "border-blue-200 dark:border-blue-800" },
                purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800" },
                yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800" },
              };
              const colors = colorConfig[badge.color] || colorConfig.green;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 h-full w-full rounded-xl border ${colors.bg} ${colors.border} transition-all hover:scale-[1.02]`}
                >
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.text}`} strokeWidth={1.5} />
                  <span className={`font-bold text-xs sm:text-lg leading-tight ${colors.text}`}>
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  // Determine the correct icon component for the chart header
  const ChartHeaderIcon = ICON_MAP[activeData.chart.icon] || Timer;

  const stackItems = [
    {
      label: 'Raw Data',
      Icon: Database,
      classes: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    },
    {
      label: 'Databricks Workflows',
      Icon: Workflow,
      classes: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Semantic Models',
      Icon: BarChart3,
      classes: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
    },
    {
      label: 'Prebuilt & Self-Service Reports',
      Icon: PieChart,
      classes: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section
      id="impact"
      className="scroll-mt-24 animate-fade-in-up relative pt-10 pb-6 border-t border-b border-slate-100 dark:border-slate-800/50 my-10 bg-slate-50/50 dark:bg-slate-900/30 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:dark:bg-transparent sm:border-0 rounded-3xl"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:right-0 p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all z-20"
        title="Close Impact Section"
      >
        <X size={24} />
      </button>

      <SectionHeader
        icon={TrendingUp}
        title="Engineering Impact"
        colorClass="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
      />

      {/* --- UNIFIED GRID TABS --- */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
          {impactData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTabId(project.id)}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 w-full
                flex items-center justify-center text-center
                ${activeTabId === project.id
                  ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm ring-1 ring-slate-200 dark:ring-slate-600'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/30'
                }
              `}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Key Metrics Cards --- */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {activeData.metrics.map((metric, idx) => {
            const IconComponent = ICON_MAP[metric.icon] || Award;
            const colorClasses = {
              yellow: "text-yellow-500 text-yellow-600 dark:text-yellow-400",
              blue: "text-blue-500 text-blue-600 dark:text-blue-400",
              purple: "text-purple-500 text-purple-600 dark:text-purple-400",
              green: "text-green-500 text-green-600 dark:text-green-400"
            };
            const [iconColor, textColor] = colorClasses[metric.color].split(' ');

            return (
              <div
                key={`${activeTabId}-${idx}`}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${iconColor}`}>
                  <IconComponent size={64} />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className={`text-sm font-semibold uppercase tracking-wide ${textColor}`}>
                    {metric.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {metric.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Dynamic Chart Section --- */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ChartHeaderIcon className="text-slate-400" size={20} />
            <h3 className="font-bold text-slate-900 dark:text-white">{activeData.chart.title}</h3>
          </div>

          <div 
            className="w-full h-[260px] min-h-[260px] flex items-center justify-center"
            ref={chartContainerRef}
          >
            {chartWidth > 10 ? renderChart() : (
              <div className="text-slate-400 text-xs">Loading chart...</div>
            )}
          </div>

          <div className="text-center text-xs text-slate-400 mt-2">
            {activeData.chart.subtitle}
          </div>
        </div>

        {/* --- Static Data Stack Visualization --- */}
        <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-2">
            <Server size={20} className="text-slate-400" /> Improved Data Stack
          </h3>
          <div className="relative space-y-2">
             {stackItems.map((item, i) => (
               <React.Fragment key={i}>
                 <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                    <div className={`absolute left-3 p-2 rounded-lg shrink-0 ${item.classes}`}>
                      <item.Icon size={18} />
                    </div>
                    <div className="w-full text-center px-10">
                      <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 leading-tight">
                        {item.label}
                      </div>
                    </div>
                 </div>
                 {i < stackItems.length - 1 && (
                   <div className="flex justify-center h-4">
                     <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                   </div>
                 )}
               </React.Fragment>
             ))}
          </div>
          <p className="mt-6 text-xs text-slate-500 leading-relaxed text-center">
            Clean, well-governed data pipelines connect raw sources to trusted reports and analytics.
          </p>
        </div>
      </div>

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

export default ImpactSection;