import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated orb */}
      <div className="absolute w-[600px] h-[600px] animate-pulse">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute inset-10 rounded-full bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 blur-2xl opacity-20 animate-reverse-spin"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
          Your AI Prompt Companion
          <Sparkles className="inline-block ml-4 text-orange-400" />
        </h1>
        <p className="text-xl text-gray-300 mb-8">Effortless Creativity at Your Fingertips</p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-all flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Generate Now
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/20 transition-all">
            Start 14-Day Trial
          </button>
        </div>
      </div>
    </div>
  );
}