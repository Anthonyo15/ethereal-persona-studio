import { CustomSlider } from '../CustomSlider';
import { GlassPanel } from '../GlassPanel';

interface FacialTabProps {
  values: {
    noseWidth: number[];
    noseHeight: number[];
    mouthWidth: number[];
    eyeSpacing: number[];
    cheekbones: number[];
  };
  onValueChange: (key: string, value: number[]) => void;
}

export const FacialTab = ({ values, onValueChange }: FacialTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Facial Features
        </h3>
        <div className="space-y-4">
          <CustomSlider
            label="Nose Width"
            value={values.noseWidth}
            onValueChange={(val) => onValueChange('noseWidth', val)}
          />
          <CustomSlider
            label="Nose Height"
            value={values.noseHeight}
            onValueChange={(val) => onValueChange('noseHeight', val)}
          />
          <CustomSlider
            label="Mouth Width"
            value={values.mouthWidth}
            onValueChange={(val) => onValueChange('mouthWidth', val)}
          />
          <CustomSlider
            label="Eye Spacing"
            value={values.eyeSpacing}
            onValueChange={(val) => onValueChange('eyeSpacing', val)}
          />
          <CustomSlider
            label="Cheekbones"
            value={values.cheekbones}
            onValueChange={(val) => onValueChange('cheekbones', val)}
          />
        </div>
      </GlassPanel>
    </div>
  );
};
