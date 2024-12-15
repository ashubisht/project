import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  descriptionOne: string;
}

export function FeatureCard({ icon: Icon, title, description,descriptionOne }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-start ">
      <div className="bg-gradient-to-br from-orange-400/20 to-purple-500/20 p-3 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-orange-400" />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <p className="text-gray-400 text-sm">{descriptionOne}</p>
    </Card>
  );
}