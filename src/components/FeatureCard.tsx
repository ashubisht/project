import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  descriptionOne: string;
  className?: string;
  classNameRight?: string; // Additional class for right alignment
}

export function FeatureCard({ icon: Icon, title, description, descriptionOne, className = '', classNameRight = '' }: FeatureCardProps) {
  return (
    <Card className={`card flex flex-col justify-around gap-5 items-start ${className} h-full`}>
      {/* Bottom-aligned Content */}
      <div className={`mt-auto ${classNameRight}`}>
        <div className="bg-gradient-to-br from-orange-400/20 to-purple-500/20 p-3 rounded-lg mb-4 inline-block">
          <Icon className="w-6 h-6 text-orange-400 2xl:w-9 2xl:h-9" />
        </div>
        <h3 className="text-white font-semibold mb-2 2xl:text-4xl">{title}</h3>
        <p className="text-gray-400 text-sm 2xl:text-2xl">{description}</p>
        <p className="text-gray-400 text-sm 2xl:text-2xl">{descriptionOne}</p>
      </div>
    </Card>
  );
}
