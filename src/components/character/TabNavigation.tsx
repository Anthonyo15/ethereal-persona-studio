import { Dna, User, Droplet, Scissors, Paintbrush, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TabId = 'identity' | 'facial' | 'skin' | 'hair' | 'makeup' | 'presets';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

const tabs: Tab[] = [
  { id: 'identity', label: 'Identity', icon: Dna },
  { id: 'facial', label: 'Facial', icon: User },
  { id: 'skin', label: 'Skin', icon: Droplet },
  { id: 'hair', label: 'Hair', icon: Scissors },
  { id: 'makeup', label: 'Makeup', icon: Paintbrush },
  { id: 'presets', label: 'Presets', icon: Save },
];

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 p-2 rounded-2xl backdrop-blur-[16px] bg-[rgba(15,23,42,0.5)] border border-white/10" style={{ WebkitBackdropFilter: 'blur(16px)' }}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 px-4 py-3 rounded-lg transition-all duration-300 min-h-[76px]",
              "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400",
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_16px_rgba(6,182,212,0.6)]"
                : "text-white/60 hover:text-white"
            )}
          >
            <Icon className={cn("w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", isActive && "animate-glow-pulse")} />
            <span className="text-xs font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
