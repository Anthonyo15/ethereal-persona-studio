import { ColorPicker } from '../ColorPicker';
import { TypeSelector } from '../TypeSelector';
import { CustomSlider } from '../CustomSlider';
import { GlassPanel } from '../GlassPanel';
import { Checkbox } from '@/components/ui/checkbox';

interface HairTabProps {
  values: {
    hairStyle: number;
    hairPrimaryColor: string;
    hairSecondaryColor: string;
    useSecondaryColor: boolean;
    beardStyle: number;
    beardColor: string;
    beardOpacity: number[];
    eyebrowStyle: number;
    eyebrowColor: string;
    eyebrowOpacity: number[];
  };
  onValueChange: (key: string, value: number | number[] | string | boolean) => void;
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

export const HairTab = ({ values, onValueChange }: HairTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hair */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Hair
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Style"
            value={values.hairStyle}
            onChange={(val) => onValueChange('hairStyle', val)}
            max={50}
          />
          <ColorPicker
            label="Primary Color"
            colors={hairColors}
            selectedColor={values.hairPrimaryColor}
            onColorSelect={(val) => onValueChange('hairPrimaryColor', val)}
          />
          <div className="flex items-center gap-2">
            <Checkbox
              checked={values.useSecondaryColor}
              onCheckedChange={(checked) => onValueChange('useSecondaryColor', checked)}
              id="use-secondary"
              className="border-white/20 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
            />
            <label
              htmlFor="use-secondary"
              className="text-sm font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              Use Secondary Color
            </label>
          </div>
          {values.useSecondaryColor && (
            <ColorPicker
              label="Secondary Color"
              colors={hairColors}
              selectedColor={values.hairSecondaryColor}
              onColorSelect={(val) => onValueChange('hairSecondaryColor', val)}
            />
          )}
        </div>
      </GlassPanel>

      {/* Beard */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Beard
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Style"
            value={values.beardStyle}
            onChange={(val) => onValueChange('beardStyle', val)}
            max={28}
          />
          <ColorPicker
            label="Color"
            colors={hairColors}
            selectedColor={values.beardColor}
            onColorSelect={(val) => onValueChange('beardColor', val)}
          />
          <CustomSlider
            label="Opacity"
            value={values.beardOpacity}
            onValueChange={(val) => onValueChange('beardOpacity', val)}
          />
        </div>
      </GlassPanel>

      {/* Eyebrows */}
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Eyebrows
        </h3>
        <div className="space-y-4">
          <TypeSelector
            label="Style"
            value={values.eyebrowStyle}
            onChange={(val) => onValueChange('eyebrowStyle', val)}
            max={33}
          />
          <ColorPicker
            label="Color"
            colors={hairColors}
            selectedColor={values.eyebrowColor}
            onColorSelect={(val) => onValueChange('eyebrowColor', val)}
          />
          <CustomSlider
            label="Opacity"
            value={values.eyebrowOpacity}
            onValueChange={(val) => onValueChange('eyebrowOpacity', val)}
          />
        </div>
      </GlassPanel>
    </div>
  );
};
