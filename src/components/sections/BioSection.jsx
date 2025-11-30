// src/components/sections/BioSection.jsx
import React from 'react';
import { User, Dumbbell, Gamepad2, MousePointer2, Dog } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

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

export default BioSection;
