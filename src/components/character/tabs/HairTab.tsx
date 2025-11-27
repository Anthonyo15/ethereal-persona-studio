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
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Hair Style
        </h3>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onHairStyleChange(Math.max(0, hairStyle - 1))}
            className="hover:bg-white/10 text-white hover:text-cyan-400 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{hairStyle}</div>
            <div className="text-xs text-white/60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Style ID</div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onHairStyleChange(Math.min(99, hairStyle + 1))}
            className="hover:bg-white/10 text-white hover:text-cyan-400 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </GlassPanel>

      <GlassPanel>
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
