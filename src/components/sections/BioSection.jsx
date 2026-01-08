// src/components/sections/BioSection.jsx
import React from 'react';
import { Dumbbell, Gamepad2, MousePointer2, Dog } from 'lucide-react';
import UserIcon from '../icons/UserIcon';
import SectionHeader from '../common/SectionHeader';

const BioSection = () => (
  <section id="bio" className="scroll-mt-24 text-center">
    <SectionHeader
      icon={UserIcon}
      title="About Me"
      colorClass="bg-purple-500/10 text-purple-400"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-neutral-800 rounded-full text-neutral-400">
          <Dumbbell size={20} />
        </div>
        <p className="text-sm text-neutral-300 leading-snug">
          Former college athlete, current home gym enthusiast.
        </p>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-neutral-800 rounded-full text-neutral-400">
          <Gamepad2 size={20} />
        </div>
        <p className="text-sm text-neutral-300 leading-snug">
          Competitive FPS player and lifelong MMO/RPG fan.
        </p>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-neutral-800 rounded-full text-neutral-400">
          <MousePointer2 size={20} />
        </div>
        <p className="text-sm text-neutral-300 leading-snug">
          PC Builder/Hobbyist and collector of way too many gaming mice.
        </p>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all flex flex-col items-center gap-3 text-center">
        <div className="p-2 bg-neutral-800 rounded-full text-neutral-400">
          <Dog size={20} />
        </div>
        <p className="text-sm text-neutral-300 leading-snug">
          Husband & Husky dad.
        </p>
      </div>
    </div>
  </section>
);

export default BioSection;
