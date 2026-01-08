// src/components/sections/BioSection.jsx
import React from 'react';
import { Dumbbell, Gamepad2, MousePointer2, Dog } from 'lucide-react';
import UserIcon from '../icons/UserIcon';
import SectionHeader from '../common/SectionHeader';

const BioSection = () => (
  <section id="bio" className="scroll-mt-24 pt-12 mt-12 border-t border-neutral-800/50">
    <SectionHeader title="Personal Interests" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="px-6 py-5 flex flex-col gap-3 bg-dot-pattern">
          <div className="text-neutral-400/40">
            <Dumbbell size={18} strokeWidth={1.5} />
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Former college athlete, current home gym enthusiast.
          </p>
        </div>
      </div>
      <div className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="px-6 py-5 flex flex-col gap-3 bg-diagonal-lines">
          <div className="text-neutral-400/40">
            <Gamepad2 size={18} strokeWidth={1.5} />
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Competitive FPS player and lifelong MMO/RPG fan.
          </p>
        </div>
      </div>
      <div className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="px-6 py-5 flex flex-col gap-3 bg-circuit-pattern">
          <div className="text-neutral-400/40">
            <MousePointer2 size={18} strokeWidth={1.5} />
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            PC Builder/Hobbyist and collector of way too many gaming mice.
          </p>
        </div>
      </div>
      <div className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="px-6 py-5 flex flex-col gap-3 bg-grid-pattern">
          <div className="text-neutral-400/40">
            <Dog size={18} strokeWidth={1.5} />
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Husband & Husky dad.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BioSection;
