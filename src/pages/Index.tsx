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
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-glow-secondary/5 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 h-screen flex">
        {/* Left side - Character Preview */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-2xl h-full">
            <CharacterPreview />
          </div>
          
          {/* Camera controls */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl bg-glass/60 border-glass-border/30 hover:bg-glass/80"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl bg-glass/60 border-glass-border/30 hover:bg-glass/80"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl bg-glass/60 border-glass-border/30 hover:bg-glass/80"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="w-[420px] h-full flex flex-col p-6 gap-6">
          {/* Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Character Creator
            </h1>
            <p className="text-sm text-muted-foreground">
              Craft your perfect character
            </p>
          </div>

          {/* Tab Navigation */}
          <GlassPanel className="animate-slide-up">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </GlassPanel>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
            {renderTabContent()}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 animate-slide-up">
            <Button
              variant="outline"
              className="flex-1 border-glass-border/50 hover:bg-muted/50 hover:border-accent"
            >
              Reset
            </Button>
            <Button className="flex-1 bg-gradient-primary hover:opacity-90 shadow-glow">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
