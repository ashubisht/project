import React from 'react';
import { Brain, GitBranch, Key, LayoutTemplate } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Effortless Prompt Perfection',
    description: 'Start with our 14-day free trial. Only $5/month thereafter.',
  },
  {
    icon: GitBranch,
    title: 'Branching Paths',
    description: 'Explore multiple creative directions with our advanced AI system.',
  },
  {
    icon: Key,
    title: 'Keyword Enhancer',
    description: 'Optimize your prompts with intelligent keyword suggestions.',
  },
  {
    icon: LayoutTemplate,
    title: 'Prompt Templates',
    description: 'Access pre-made templates for various industries and use cases.',
  },
];

export function Features() {
  return (
    <div className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <feature.icon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}