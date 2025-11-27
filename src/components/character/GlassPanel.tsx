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
        "backdrop-blur-xl bg-glass/60 border border-glass-border/30 rounded-xl shadow-soft",
        "transition-all duration-300 hover:bg-glass/70",
        className
      )}
    >
      {children}
    </div>
  );
};
