import { useState } from 'react';
import { CharacterPreview } from '@/components/character/CharacterPreview';
import { TabNavigation, TabId } from '@/components/character/TabNavigation';
import { GlassPanel } from '@/components/character/GlassPanel';
import { IdentityTab } from '@/components/character/tabs/IdentityTab';
import { FacialTab } from '@/components/character/tabs/FacialTab';
import { HairTab } from '@/components/character/tabs/HairTab';
import { Button } from '@/components/ui/button';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>('identity');
  const [identityValues, setIdentityValues] = useState({
    fatherSimilarity: [50],
    motherSimilarity: [50],
    skinTone: [50],
  });
  const [facialValues, setFacialValues] = useState({
    noseWidth: [50],
    noseHeight: [50],
    mouthWidth: [50],
    eyeSpacing: [50],
    cheekbones: [50],
  });
  const [hairStyle, setHairStyle] = useState(0);
  const [hairColor, setHairColor] = useState('#1A1A1A');

  const handleIdentityChange = (key: string, value: number[]) => {
    setIdentityValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleFacialChange = (key: string, value: number[]) => {
    setFacialValues((prev) => ({ ...prev, [key]: value }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'identity':
        return <IdentityTab values={identityValues} onValueChange={handleIdentityChange} />;
      case 'facial':
        return <FacialTab values={facialValues} onValueChange={handleFacialChange} />;
      case 'hair':
        return (
          <HairTab
            hairStyle={hairStyle}
            hairColor={hairColor}
            onHairStyleChange={setHairStyle}
            onHairColorChange={setHairColor}
          />
        );
      case 'skin':
        return (
          <div className="animate-fade-in">
            <GlassPanel className="p-6">
              <p className="text-muted-foreground text-center">Skin & Age controls coming soon...</p>
            </GlassPanel>
          </div>
        );
      case 'makeup':
        return (
          <div className="animate-fade-in">
            <GlassPanel className="p-6">
              <p className="text-muted-foreground text-center">Makeup controls coming soon...</p>
            </GlassPanel>
          </div>
        );
      case 'presets':
        return (
          <div className="animate-fade-in">
            <GlassPanel className="p-6">
              <p className="text-muted-foreground text-center">Presets & Save options coming soon...</p>
            </GlassPanel>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative" style={{ background: 'transparent' }}>
      {/* Full screen character preview */}
      <div className="fixed inset-0 z-0">
        <CharacterPreview />
      </div>
      
      {/* Camera controls - Bottom center dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 px-6 py-3 rounded-3xl backdrop-blur-[20px] bg-[rgba(15,23,42,0.7)] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 text-white hover:text-cyan-400 transition-all"
        >
          <ZoomIn className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 text-white hover:text-cyan-400 transition-all"
        >
          <ZoomOut className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 text-white hover:text-cyan-400 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>

      {/* Floating Right Panel - Game HUD style */}
      <div className="fixed top-0 right-0 h-screen flex items-center pr-10 z-20">
        <div className="w-[420px] h-[calc(100vh-80px)] flex flex-col gap-6 p-6 rounded-3xl backdrop-blur-[20px] bg-[rgba(15,23,42,0.7)] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
          {/* Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Character Creator
            </h1>
            <p className="text-sm text-white/60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Craft your perfect character
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="animate-slide-up">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent pr-2">
            {renderTabContent()}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 animate-slide-up">
            <Button
              variant="outline"
              className="flex-1 border-white/20 bg-transparent hover:bg-white/10 text-white hover:border-cyan-400 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Reset
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
