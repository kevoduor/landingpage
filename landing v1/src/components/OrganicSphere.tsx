import React, { useEffect, useRef } from 'react';

export default function OrganicSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let audioContext: AudioContext;
    let analyser: AnalyserNode;
    let dataArray: Uint8Array;
    
    const init = async () => {
      try {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        const oscillator = audioContext.createOscillator();
        oscillator.connect(analyser);
        analyser.connect(audioContext.destination);
        oscillator.start();
        
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
      } catch (error) {
        console.error('Audio Context initialization failed:', error);
      }
    };

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
        
        // Create gradient for glossy effect
        const gradient = ctx.createRadialGradient(
          width/2, height/2, 0,
          width/2, height/2, width/2
        );
        gradient.addColorStop(0, '#60A5FA');
        gradient.addColorStop(0.5, '#3B82F6');
        gradient.addColorStop(1, '#2563EB');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Draw organic sphere
        for (let i = 0; i < 360; i++) {
          const radius = 50 + (dataArray[i % dataArray.length] / 8);
          const x = width/2 + radius * Math.cos(i * Math.PI / 180);
          const y = height/2 + radius * Math.sin(i * Math.PI / 180);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.fill();
        
        // Add highlight for glossy effect
        const highlight = ctx.createRadialGradient(
          width/2 - 20, height/2 - 20, 0,
          width/2 - 20, height/2 - 20, 30
        );
        highlight.addColorStop(0, 'rgba(255,255,255,0.8)');
        highlight.addColorStop(1, 'rgba(255,255,255,0)');
        
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(width/2 - 20, height/2 - 20, 30, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="w-16 h-16"
    />
  );
}