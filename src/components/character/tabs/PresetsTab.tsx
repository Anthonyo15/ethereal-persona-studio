import { User } from 'lucide-react';
import { GlassPanel } from '../GlassPanel';
import { cn } from '@/lib/utils';

interface PresetsTabProps {
  selectedPreset: number | null;
  onPresetSelect: (presetId: number) => void;
}

export const PresetsTab = ({ selectedPreset, onPresetSelect }: PresetsTabProps) => {
  const presets = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="animate-fade-in">
      <GlassPanel>
        <h3 className="text-xs font-semibold mb-5 text-white/80 uppercase tracking-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Character Presets
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {presets.map((presetId) => (
            <button
              key={presetId}
              onClick={() => onPresetSelect(presetId)}
              className={cn(
                "flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300",
                "bg-white/5 hover:bg-white/10 border backdrop-blur-sm",
                selectedPreset === presetId
                  ? "border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.8)]"
                  : "border-white/10 hover:border-white/20"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                selectedPreset === presetId
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                  : "bg-white/10"
              )}>
                <User className={cn(
                  "w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                  selectedPreset === presetId ? "text-white" : "text-white/60"
                )} />
              </div>
              <span className={cn(
                "text-xs font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                selectedPreset === presetId ? "text-cyan-400" : "text-white/80"
              )}>
                Face {presetId}
              </span>
            </button>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
