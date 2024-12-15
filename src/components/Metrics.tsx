import React from 'react';
import { TrendingUp, Users } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '25M',
    label: 'Created Prompts',
  },
  {
    icon: Users,
    value: '12K',
    label: 'Happy Users',
  },
];

export function Metrics() {
  return (
    <div className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900 border border-purple-500/20"
            >
              <metric.icon className="w-12 h-12 text-orange-400 mr-6" />
              <div>
                <div className="text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}