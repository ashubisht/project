import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#1a1b2e] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}