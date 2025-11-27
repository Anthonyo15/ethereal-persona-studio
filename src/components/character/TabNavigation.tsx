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
    <div className="flex justify-center gap-2 p-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1.5 px-4 py-3 rounded-lg transition-all duration-300",
              "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-accent",
              isActive
                ? "bg-accent text-accent-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive && "animate-glow-pulse")} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
