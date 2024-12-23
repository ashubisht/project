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
      <div className="text-[64px] font-bold text-white bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">
        <h2 className="2k:text-9xl 2xl:text-8xl text-[62px] font-semibold bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">
          {value}
        </h2>
      </div>
      <div className="text-sm text-[#B2A1FD] 2xl:text-2xl 2k:text-4xl">{label}</div>
    </Card>
  );
}