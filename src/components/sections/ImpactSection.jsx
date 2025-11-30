// src/components/sections/ImpactSection.jsx
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
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { performanceData } from '../../data/resumeData';
import SectionHeader from '../common/SectionHeader';

const ImpactSection = ({ onClose }) => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

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

        <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-2">
            <Server size={20} className="text-slate-400" /> Improved Data Stack
          </h3>

          <div className="relative space-y-2">
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

            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            <div className="relative z-10 flex items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
              <div className="absolute left-3 p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg shrink-0">
                <Workflow size={18} />
              </div>
              <div className="w-full text-center px-10">
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  Databricks Workflows
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Creates Gold Source Tables
                </div>
              </div>
            </div>

            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

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

            <div className="flex justify-center h-4">
              <div className="w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

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
