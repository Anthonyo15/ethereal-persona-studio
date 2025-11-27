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
        <label className="text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{label}</label>
        <span className="text-sm font-semibold text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{value[0]}</span>
      </div>
      <Slider
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
        className="[&_.relative]:h-1 [&_.relative]:bg-white/10 [&_[role=slider]]:h-3.5 [&_[role=slider]]:w-3.5 [&_[role=slider]]:bg-cyan-400 [&_[role=slider]]:shadow-[0_0_8px_rgba(6,182,212,0.8)] [&_[role=slider]]:border-0 [&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-cyan-500 [&_.bg-primary]:to-blue-500 [&_.bg-primary]:shadow-[0_0_8px_rgba(6,182,212,0.6)]"
      />
    </div>
  );
};
