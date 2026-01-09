// src/components/sections/BioSection.jsx
import React from 'react';
import { Dumbbell, Gamepad2, MousePointer2, Dog } from 'lucide-react';
import UserIcon from '../icons/UserIcon';
import SectionHeader from '../common/SectionHeader';

const BioSection = () => {
  const interests = [
    { icon: Dumbbell, text: "Former college athlete, current home gym enthusiast.", bg: "bg-dot-pattern" },
    { icon: Gamepad2, text: "Competitive FPS player and lifelong MMO/RPG fan.", bg: "bg-diagonal-lines" },
    { icon: MousePointer2, text: "PC Builder/Hobbyist and collector of way too many gaming mice.", bg: "bg-circuit-pattern" },
    { icon: Dog, text: "Husband & Husky dad.", bg: "bg-grid-pattern" }
  ];

  return (
    <section id="bio" className="scroll-mt-24 pt-12 mt-12 border-t border-neutral-800/50 overflow-hidden">
      <div className="animate-child-reveal" style={{ animationDelay: '0.1s' }}>
        <SectionHeader title="Personal Interests" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((interest, idx) => {
          const Icon = interest.icon;
          return (
            <div
              key={idx}
              className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-child-reveal"
              style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
            >
              <div className={`px-6 py-5 flex flex-col gap-3 ${interest.bg}`}>
                <div className="text-neutral-400/40">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {interest.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BioSection;