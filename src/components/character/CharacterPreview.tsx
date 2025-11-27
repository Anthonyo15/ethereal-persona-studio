import { useEffect, useRef } from 'react';

export const CharacterPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create gradient background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient.addColorStop(0, 'rgba(14, 165, 233, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw simple character silhouette placeholder
    ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.6)';
    ctx.lineWidth = 2;

    // Head
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height * 0.3, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, canvas.height * 0.55, 70, 90, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 70, canvas.height * 0.45);
    ctx.lineTo(canvas.width / 2 - 100, canvas.height * 0.65);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 70, canvas.height * 0.45);
    ctx.lineTo(canvas.width / 2 + 100, canvas.height * 0.65);
    ctx.stroke();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'crisp-edges' }}
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
        Character Preview
      </div>
    </div>
  );
};
