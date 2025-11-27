import { useState } from 'react';
import { CharacterPreview } from '@/components/character/CharacterPreview';
import { TabNavigation, TabId } from '@/components/character/TabNavigation';
import { GlassPanel } from '@/components/character/GlassPanel';
import { IdentityTab } from '@/components/character/tabs/IdentityTab';
import { FacialTab } from '@/components/character/tabs/FacialTab';
import { HairTab } from '@/components/character/tabs/HairTab';
import { SkinTab } from '@/components/character/tabs/SkinTab';
import { MakeupTab } from '@/components/character/tabs/MakeupTab';
import { PresetsTab } from '@/components/character/tabs/PresetsTab';
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
  const [hairValues, setHairValues] = useState({
    hairStyle: 0,
    hairPrimaryColor: '#1A1A1A',
    hairSecondaryColor: '#8B0000',
    useSecondaryColor: false,
    beardStyle: 0,
    beardColor: '#1A1A1A',
    beardOpacity: [100],
    eyebrowStyle: 0,
    eyebrowColor: '#1A1A1A',
    eyebrowOpacity: [100],
  });
  const [skinValues, setSkinValues] = useState({
    agingType: 0,
    agingIntensity: [0],
    sunDamageType: 0,
    sunDamageIntensity: [0],
    molesType: 0,
    molesIntensity: [0],
    blemishesType: 0,
    blemishesIntensity: [0],
  });
  const [makeupValues, setMakeupValues] = useState({
    eyeMakeupType: 0,
    eyeMakeupColor: '#8B4513',
    eyeMakeupOpacity: [0],
    blushType: 0,
    blushColor: '#FF69B4',
    blushOpacity: [0],
    lipstickType: 0,
    lipstickColor: '#DC143C',
    lipstickOpacity: [0],
  });
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const handleIdentityChange = (key: string, value: number[]) => {
    setIdentityValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleFacialChange = (key: string, value: number[]) => {
    setFacialValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleHairChange = (key: string, value: number | number[] | string | boolean) => {
    setHairValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSkinChange = (key: string, value: number | number[]) => {
    setSkinValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleMakeupChange = (key: string, value: number | number[] | string) => {
    setMakeupValues((prev) => ({ ...prev, [key]: value }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'identity':
        return <IdentityTab values={identityValues} onValueChange={handleIdentityChange} />;
      case 'facial':
        return <FacialTab values={facialValues} onValueChange={handleFacialChange} />;
      case 'hair':
        return <HairTab values={hairValues} onValueChange={handleHairChange} />;
      case 'skin':
        return <SkinTab values={skinValues} onValueChange={handleSkinChange} />;
      case 'makeup':
        return <MakeupTab values={makeupValues} onValueChange={handleMakeupChange} />;
      case 'presets':
        return <PresetsTab selectedPreset={selectedPreset} onPresetSelect={setSelectedPreset} />;
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
        <div className="w-[420px] h-[calc(100vh-80px)] flex flex-col gap-6 p-8 rounded-3xl backdrop-blur-[20px] bg-[rgba(15,23,42,0.7)] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
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
