import React, { useEffect, useRef, useState } from 'react';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import XIcon from '../icons/XIcon';
import ZapIcon from '../icons/ZapIcon';
import UsersIcon from '../icons/UsersIcon';
import AwardIcon from '../icons/AwardIcon';
import TimerIcon from '../icons/TimerIcon';
import ServerIcon from '../icons/ServerIcon';
import DatabaseIcon from '../icons/DatabaseIcon';
import WorkflowIcon from '../icons/WorkflowIcon';
import BarChart3Icon from '../icons/BarChart3Icon';
import PieChartIcon from '../icons/PieChartIcon';
import ChevronUpIcon from '../icons/ChevronUpIcon';
import ShieldIcon from '../icons/ShieldIcon';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import ActivityIcon from '../icons/ActivityIcon';
import LayoutGridIcon from '../icons/LayoutGridIcon';
import CloudIcon from '../icons/CloudIcon';
import FileTextIcon from '../icons/FileTextIcon';
import RefreshCwIcon from '../icons/RefreshCwIcon';
import ArchiveIcon from '../icons/ArchiveIcon';
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
  Zap: ZapIcon,
  Users: UsersIcon,
  Award: AwardIcon,
  Timer: TimerIcon,
  Shield: ShieldIcon,
  CheckCircle: CheckCircleIcon,
  Activity: ActivityIcon,
  Server: ServerIcon,
  Database: DatabaseIcon,
  LayoutGrid: LayoutGridIcon,
  Cloud: CloudIcon,
  FileText: FileTextIcon,
  RefreshCw: RefreshCwIcon,
  Archive: ArchiveIcon
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
                  <div className="bg-black/90 text-white text-xs p-2 rounded-sm shadow-xl border border-neutral-700">
                    <div className="font-bold mb-1">{payload[0].payload.name}</div>
                    <div className="text-neutral-300">{payload[0].payload.label}</div>
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
                  <div className="bg-black/90 text-white text-xs p-2 rounded-sm shadow-xl border border-neutral-700">
                    <div className="font-bold mb-1">{payload[0].payload.name}</div>
                    <div className="flex items-center gap-2 text-neutral-300">
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
                  <div className="bg-black/90 text-white text-xs p-2 rounded-sm shadow-xl border border-neutral-700">
                    <div className="font-bold mb-2">{label}</div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-300">Users: <span className="text-white">{payload[0].value}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-neutral-300">Errors: <span className="text-white">{payload[1].value}</span></span>
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
          <div className="grid grid-cols-2 gap-3 h-full w-full">
            {activeData.chart.data.map((badge, idx) => {
              const Icon = ICON_MAP[badge.icon] || CheckCircleIcon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center gap-3 p-4 h-full w-full rounded-sm border border-neutral-800/80 bg-black/40 hover:border-neutral-600 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <Icon className="w-10 h-10 text-neutral-400" strokeWidth={1.5} />
                  <span className="font-bold text-sm font-mono leading-tight text-white">
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
  const ChartHeaderIcon = ICON_MAP[activeData.chart.icon] || TimerIcon;

  const stackItems = [
    {
      label: 'Raw Data',
      Icon: DatabaseIcon,
      classes: 'bg-neutral-800/50 text-neutral-400'
    },
    {
      label: 'Databricks Workflows',
      Icon: WorkflowIcon,
      classes: 'bg-neutral-800/50 text-neutral-400'
    },
    {
      label: 'Semantic Models',
      Icon: BarChart3Icon,
      classes: 'bg-neutral-800/50 text-neutral-400'
    },
    {
      label: 'Prebuilt & Self-Service Reports',
      Icon: PieChartIcon,
      classes: 'bg-neutral-800/50 text-neutral-400'
    }
  ];

  return (
    <section
      id="impact"
      className="scroll-mt-24 animate-fade-in-up relative py-8 my-10"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-0 p-2 text-neutral-400 hover:text-white hover:bg-neutral-950/80 rounded-sm transition-all z-20 border border-transparent hover:border-neutral-600"
        title="Close Impact Section"
      >
        <XIcon size={20} />
      </button>

      <SectionHeader
        title="Engineering Impact"
      />

      {/* --- TABS --- */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex p-1 bg-black/40 rounded-sm border border-neutral-800/80 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {impactData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTabId(project.id)}
              className={`
                px-5 py-2 rounded-sm text-sm font-medium font-mono transition-all duration-200
                ${activeTabId === project.id
                  ? 'bg-neutral-950/80 text-white border border-neutral-600'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50'
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
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {activeData.metrics.map((metric, idx) => {
            const IconComponent = ICON_MAP[metric.icon] || AwardIcon;

            return (
              <div
                key={`${activeTabId}-${idx}`}
                className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="px-6 py-5 bg-dot-pattern">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3 font-mono">
                    {metric.label}
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Dynamic Chart Section --- */}
        <div className="corner-brackets lg:col-span-2 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern">
            <h3 className="font-semibold text-white text-base tracking-tight font-mono">{activeData.chart.title}</h3>
          </div>
          <div className="px-6 py-5 bg-circuit-pattern"
>

            <div
              className="w-full h-[260px] min-h-[260px] flex items-center justify-center"
              ref={chartContainerRef}
            >
              {chartWidth > 10 ? renderChart() : (
                <div className="text-neutral-400 text-xs">Loading chart...</div>
              )}
            </div>

            <div className="text-center text-xs text-neutral-500 mt-4">
              {activeData.chart.subtitle}
            </div>
          </div>
        </div>

        {/* --- Static Data Stack Visualization --- */}
        <div className="corner-brackets lg:col-span-1 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col">
          <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-diagonal-lines">
            <h3 className="font-semibold text-white text-base tracking-tight font-mono">Improved Data Stack</h3>
          </div>
          <div className="px-6 py-5 flex-grow bg-dot-pattern"
>
            <div className="relative space-y-2.5">
              {stackItems.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-3 p-3 bg-neutral-950/50 border border-neutral-800/80 rounded-sm">
                    <div className={`p-1.5 rounded-sm shrink-0 ${item.classes}`}>
                      <item.Icon size={14} />
                    </div>
                    <div className="text-xs font-medium text-neutral-300 font-mono">
                      {item.label}
                    </div>
                  </div>
                  {i < stackItems.length - 1 && (
                    <div className="flex justify-center h-2">
                      <div className="w-px bg-neutral-400/30"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-5 text-xs text-neutral-500 leading-relaxed">
              Clean, well-governed data pipelines connect raw sources to trusted reports and analytics.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium font-mono text-neutral-400 hover:text-white bg-black/40 hover:bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-600 rounded-sm transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
           <ChevronUpIcon size={16} /> Hide Impact Section
        </button>
      </div>
    </section>
  );
};

export default ImpactSection;