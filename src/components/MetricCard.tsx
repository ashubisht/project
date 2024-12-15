import React from 'react';
import { Card } from './Card';

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className = '' }: MetricCardProps) {
  return (
    <Card className={`text-center justify-center flex flex-col ${className}`}>
      <div className="text-[64px] font-bold text-white bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">{value}</div>
      <div className="text-gray-400 text-sm text-[#B2A1FD] ">{label}</div>
    </Card>
  );
}