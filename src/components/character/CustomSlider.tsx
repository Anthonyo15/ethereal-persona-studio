import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

interface CustomSliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  label: string;
  className?: string;
}

export const CustomSlider = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  className,
}: CustomSliderProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-accent">{value[0]}</span>
      </div>
      <Slider
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
        className="[&_.relative]:h-1.5 [&_.relative]:bg-secondary/50 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-accent [&_[role=slider]]:shadow-glow [&_[role=slider]]:border-0 [&_.bg-primary]:bg-accent"
      />
    </div>
  );
};
