import { ColorPicker } from '../ColorPicker';
import { GlassPanel } from '../GlassPanel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HairTabProps {
  hairStyle: number;
  hairColor: string;
  onHairStyleChange: (style: number) => void;
  onHairColorChange: (color: string) => void;
}

const hairColors = [
  '#1A1A1A', // Black
  '#3D2817', // Dark Brown
  '#6B4423', // Brown
  '#B58143', // Light Brown
  '#D4A574', // Blonde
  '#E6BE8A', // Light Blonde
  '#8B0000', // Red
  '#C0C0C0', // Silver
];

export const HairTab = ({ hairStyle, hairColor, onHairStyleChange, onHairColorChange }: HairTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <GlassPanel className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-accent">Hair Style</h3>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onHairStyleChange(Math.max(0, hairStyle - 1))}
            className="border-glass-border/50 hover:bg-muted/50 hover:border-accent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-accent mb-1">{hairStyle}</div>
            <div className="text-xs text-muted-foreground">Style ID</div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => onHairStyleChange(Math.min(99, hairStyle + 1))}
            className="border-glass-border/50 hover:bg-muted/50 hover:border-accent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </GlassPanel>

      <GlassPanel className="p-6">
        <ColorPicker
          label="Hair Color"
          colors={hairColors}
          selectedColor={hairColor}
          onColorSelect={onHairColorChange}
        />
      </GlassPanel>
    </div>
  );
};
