import { cn } from '@/lib/utils';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  label: string;
}

export const ColorPicker = ({ colors, selectedColor, onColorSelect, label }: ColorPickerProps) => {
  return (
    <div className="space-y-3">
      <label className="text-xs font-semibold text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{label}</label>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={cn(
              "w-10 h-10 rounded-full border-2 transition-all duration-300",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400",
              selectedColor === color
                ? "border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110"
                : "border-white/20 hover:border-white/40"
            )}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};
