import { CustomSlider } from '../CustomSlider';
import { GlassPanel } from '../GlassPanel';

interface IdentityTabProps {
  values: {
    fatherSimilarity: number[];
    motherSimilarity: number[];
    skinTone: number[];
  };
  onValueChange: (key: string, value: number[]) => void;
}

export const IdentityTab = ({ values, onValueChange }: IdentityTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <GlassPanel className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-accent">Heritage & Lineage</h3>
        <div className="space-y-4">
          <CustomSlider
            label="Father Similarity"
            value={values.fatherSimilarity}
            onValueChange={(val) => onValueChange('fatherSimilarity', val)}
          />
          <CustomSlider
            label="Mother Similarity"
            value={values.motherSimilarity}
            onValueChange={(val) => onValueChange('motherSimilarity', val)}
          />
          <CustomSlider
            label="Skin Tone Mix"
            value={values.skinTone}
            onValueChange={(val) => onValueChange('skinTone', val)}
          />
        </div>
      </GlassPanel>

      <GlassPanel className="p-6">
        <h4 className="text-sm font-medium mb-3 text-muted-foreground">Parents Preview</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-secondary/50 rounded-lg border border-glass-border/30 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Father</span>
          </div>
          <div className="aspect-square bg-secondary/50 rounded-lg border border-glass-border/30 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Mother</span>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};
