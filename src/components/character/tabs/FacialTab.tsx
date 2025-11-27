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
      <GlassPanel className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-accent">Facial Features</h3>
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
