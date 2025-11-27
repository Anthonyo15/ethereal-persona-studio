import { CustomSlider } from '../CustomSlider';
import { GlassPanel } from '../GlassPanel';
import { User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface IdentityTabProps {
  values: {
    fatherSimilarity: number[];
    motherSimilarity: number[];
    skinTone: number[];
  };
  onValueChange: (key: string, value: number[]) => void;
}

export const IdentityTab = ({ values, onValueChange }: IdentityTabProps) => {
  const [selectedParent, setSelectedParent] = useState<'father' | 'mother' | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Heritage & Lineage
        </h3>
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

      <GlassPanel>
        <h4 className="text-xs font-semibold mb-4 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Parents Preview
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {/* Father Card */}
          <button
            onClick={() => setSelectedParent(selectedParent === 'father' ? null : 'father')}
            className={cn(
              "aspect-square rounded-lg flex flex-col items-center justify-center gap-3 transition-all duration-300",
              "backdrop-blur-[12px] bg-[rgba(0,0,0,0.3)] border-2",
              selectedParent === 'father'
                ? "border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.6)]"
                : "border-white/10 hover:border-white/20 hover:bg-[rgba(0,0,0,0.4)]"
            )}
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
          >
            <User className="w-12 h-12 text-white/40" strokeWidth={1.5} />
            <span className="text-xs text-white/60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Father</span>
          </button>

          {/* Mother Card */}
          <button
            onClick={() => setSelectedParent(selectedParent === 'mother' ? null : 'mother')}
            className={cn(
              "aspect-square rounded-lg flex flex-col items-center justify-center gap-3 transition-all duration-300",
              "backdrop-blur-[12px] bg-[rgba(0,0,0,0.3)] border-2",
              selectedParent === 'mother'
                ? "border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.6)]"
                : "border-white/10 hover:border-white/20 hover:bg-[rgba(0,0,0,0.4)]"
            )}
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
          >
            <User className="w-12 h-12 text-white/40" strokeWidth={1.5} />
            <span className="text-xs text-white/60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Mother</span>
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};
