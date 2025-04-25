import React, { useRef, useEffect } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    function drawPixels() {
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight;
      const size = 24;  // size of each “pixel block”

      for (let y = 0; y < h; y += size) {
        for (let x = 0; x < w; x += size) {
          // random opacity for variation
          const alpha = 0.05 + Math.random() * 0.15;
          ctx.fillStyle = `rgba(242,0,255,${alpha})`;
          ctx.fillRect(x, y, size, size);
        }
      }
    }

    // initial draw
    drawPixels();
    // redraw on resize
    window.addEventListener('resize', drawPixels);
    return () => window.removeEventListener('resize', drawPixels);
  }, []);

  return <canvas id="background-canvas" ref={canvasRef} />;
}
