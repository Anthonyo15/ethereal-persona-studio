import { CustomSlider } from '../CustomSlider';
import { TypeSelector } from '../TypeSelector';
import { ColorPicker } from '../ColorPicker';
import { GlassPanel } from '../GlassPanel';

const makeupColors = [
  '#8B4513', // Brown
  '#A0522D', // Sienna
  '#D2691E', // Chocolate
  '#CD853F', // Peru
  '#DEB887', // Burlywood
  '#F4A460', // Sandy Brown
  '#FFB6C1', // Light Pink
  '#FF69B4', // Hot Pink
  '#FF1493', // Deep Pink
  '#DC143C', // Crimson
  '#8B0000', // Dark Red
  '#A52A2A', // Brown
  '#800080', // Purple
  '#9370DB', // Medium Purple
];

interface MakeupTabProps {
  values: {
    eyeMakeupType: number;
    eyeMakeupColor: string;
    eyeMakeupOpacity: number[];
    blushType: number;
    blushColor: string;
    blushOpacity: number[];
    lipstickType: number;
    lipstickColor: string;
    lipstickOpacity: number[];
  };
  onValueChange: (key: string, value: number | number[] | string) => void;
}

export const MakeupTab = ({ values, onValueChange }: MakeupTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Eye Makeup / Shadow */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Eye Makeup / Shadow
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Type"
            value={values.eyeMakeupType}
            onChange={(val) => onValueChange('eyeMakeupType', val)}
            max={15}
          />
          <ColorPicker
            label="Color"
            colors={makeupColors}
            selectedColor={values.eyeMakeupColor}
            onColorSelect={(val) => onValueChange('eyeMakeupColor', val)}
          />
          <CustomSlider
            label="Opacity"
            value={values.eyeMakeupOpacity}
            onValueChange={(val) => onValueChange('eyeMakeupOpacity', val)}
          />
        </div>
      </GlassPanel>

      {/* Blush */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Blush
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Type"
            value={values.blushType}
            onChange={(val) => onValueChange('blushType', val)}
            max={12}
          />
          <ColorPicker
            label="Color"
            colors={makeupColors}
            selectedColor={values.blushColor}
            onColorSelect={(val) => onValueChange('blushColor', val)}
          />
          <CustomSlider
            label="Opacity"
            value={values.blushOpacity}
            onValueChange={(val) => onValueChange('blushOpacity', val)}
          />
        </div>
      </GlassPanel>

      {/* Lipstick */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Lipstick
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Type"
            value={values.lipstickType}
            onChange={(val) => onValueChange('lipstickType', val)}
            max={9}
          />
          <ColorPicker
            label="Color"
            colors={makeupColors}
            selectedColor={values.lipstickColor}
            onColorSelect={(val) => onValueChange('lipstickColor', val)}
          />
          <CustomSlider
            label="Opacity"
            value={values.lipstickOpacity}
            onValueChange={(val) => onValueChange('lipstickOpacity', val)}
          />
        </div>
      </GlassPanel>
    </div>
  );
};
