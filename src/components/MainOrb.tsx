import React from 'react';

export function MainOrb() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 blur-3xl opacity-20 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-purple-500 to-orange-400 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Powered by AI</div>
          <div className="text-sm text-gray-300">Enhance • Generate • Perfect</div>
        </div>
      </div>
    </div>
  );
}