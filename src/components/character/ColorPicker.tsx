import { cn } from '@/lib/utils';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  label: string;
}

export const ColorPicker = ({ colors, selectedColor, onColorSelect, label }: ColorPickerProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={cn(
              "w-10 h-10 rounded-full border-2 transition-all duration-200",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
              selectedColor === color
                ? "border-accent shadow-glow scale-110"
                : "border-glass-border/50"
            )}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};
