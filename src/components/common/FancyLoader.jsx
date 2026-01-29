import React from 'react';

const FancyLoader = () => {
    return (
        <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-neutral-950 z-50">
            <div className="relative flex flex-col items-center gap-8">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-neutral-800/20 blur-3xl rounded-full scale-150 animate-pulse" />

                {/* Main Logo Container */}
                <div className="relative group">
                    {/* Animated Border */}
                    <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 opacity-75 blur-sm animate-pulse duration-3000" />

                    {/* Logo Box */}
                    <div className="relative flex items-center justify-center w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-sm shadow-2xl overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer" />

                        {/* Text */}
                        <span className="font-mono text-3xl font-bold text-white tracking-tighter select-none relative z-10">
                            bb
                        </span>
                    </div>
                </div>

                {/* Text/Status */}
                <div className="flex flex-col items-center gap-2">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 animate-pulse">
                        System Initializing
                    </p>

                    {/* Loading Bar */}
                    <div className="w-32 h-0.5 bg-neutral-900 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-neutral-500 w-full origin-left animate-loading-bar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FancyLoader;
