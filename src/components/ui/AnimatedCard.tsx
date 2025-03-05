
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  className, 
  children, 
  hoverEffect = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 ease-out",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1",
        isHovered && "transform-none shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      {hoverEffect && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100"
          )}
        />
      )}
    </div>
  );
};

export { AnimatedCard };
