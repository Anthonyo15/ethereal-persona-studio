import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TypeSelectorProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const TypeSelector = ({
  label,
  value,
  onChange,
  min = 0,
  max = 30,
  className,
}: TypeSelectorProps) => {
  const handlePrevious = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleNext = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          disabled={value <= min}
          className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-2xl font-bold text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] min-w-[60px] text-center">
            {value}
          </span>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={value >= max}
          className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
