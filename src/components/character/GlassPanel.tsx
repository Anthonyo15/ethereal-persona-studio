import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export const GlassPanel = ({ children, className }: GlassPanelProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
        "transition-all duration-300 backdrop-blur-[16px] bg-[rgba(15,23,42,0.5)]",
        className
      )}
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      {children}
    </div>
  );
};
