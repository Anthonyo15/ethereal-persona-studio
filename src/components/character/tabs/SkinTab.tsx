import { CustomSlider } from '../CustomSlider';
import { TypeSelector } from '../TypeSelector';
import { GlassPanel } from '../GlassPanel';

interface SkinTabProps {
  values: {
    agingType: number;
    agingIntensity: number[];
    sunDamageType: number;
    sunDamageIntensity: number[];
    molesType: number;
    molesIntensity: number[];
    blemishesType: number;
    blemishesIntensity: number[];
  };
  onValueChange: (key: string, value: number | number[]) => void;
}

export const SkinTab = ({ values, onValueChange }: SkinTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Aging & Damage
        </h3>
        <div className="space-y-6">
          {/* Aging / Wrinkles */}
          <div className="space-y-3">
            <TypeSelector
              label="Aging / Wrinkles Type"
              value={values.agingType}
              onChange={(val) => onValueChange('agingType', val)}
              max={15}
            />
            <CustomSlider
              label="Intensity"
              value={values.agingIntensity}
              onValueChange={(val) => onValueChange('agingIntensity', val)}
            />
          </div>

          {/* Sun Damage */}
          <div className="space-y-3">
            <TypeSelector
              label="Sun Damage Type"
              value={values.sunDamageType}
              onChange={(val) => onValueChange('sunDamageType', val)}
              max={10}
            />
            <CustomSlider
              label="Intensity"
              value={values.sunDamageIntensity}
              onValueChange={(val) => onValueChange('sunDamageIntensity', val)}
            />
          </div>

          {/* Moles & Freckles */}
          <div className="space-y-3">
            <TypeSelector
              label="Moles & Freckles Type"
              value={values.molesType}
              onChange={(val) => onValueChange('molesType', val)}
              max={17}
            />
            <CustomSlider
              label="Intensity"
              value={values.molesIntensity}
              onValueChange={(val) => onValueChange('molesIntensity', val)}
            />
          </div>

          {/* Body Blemishes */}
          <div className="space-y-3">
            <TypeSelector
              label="Body Blemishes Type"
              value={values.blemishesType}
              onChange={(val) => onValueChange('blemishesType', val)}
              max={11}
            />
            <CustomSlider
              label="Intensity"
              value={values.blemishesIntensity}
              onValueChange={(val) => onValueChange('blemishesIntensity', val)}
            />
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};
