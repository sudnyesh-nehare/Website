"use client";
import { useEffect, useRef } from "react";
export default function PixelGame() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const W = () => canvas.width;
    const H = () => canvas.height;
    const PX = 4;
    let offset = 0;
    let runFrame = 0;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 400,
      size: Math.random() > 0.7 ? 2 : 1,
      speed: Math.random() * 0.2 + 0.05,
    }));

    // Proper pixel buildings with floors and windows
    const buildingTemplates = [
      { w: 80, h: 200, floors: 8, winW: 12, winH: 14, winGapX: 16, winGapY: 20, winOffX: 10 },
      { w: 60, h: 280, floors: 12, winW: 10, winH: 12, winGapX: 14, winGapY: 20, winOffX: 8 },
      { w: 100, h: 160, floors: 6, winW: 14, winH: 14, winGapX: 18, winGapY: 22, winOffX: 10 },
      { w: 48, h: 320, floors: 14, winW: 8, winH: 10, winGapX: 12, winGapY: 20, winOffX: 8 },
      { w: 120, h: 180, floors: 7, winW: 16, winH: 14, winGapX: 20, winGapY: 22, winOffX: 12 },
      { w: 72, h: 240, floors: 10, winW: 12, winH: 12, winGapX: 16, winGapY: 22, winOffX: 8 },
    ];

    const buildings = Array.from({ length: 14 }, (_, i) => {
      const t = buildingTemplates[i % buildingTemplates.length];
      const lit = Array.from({ length: t.floors * 6 }, () => Math.random() > 0.45);
      return { x: i * 180 - 200, ...t, lit, speed: 0.5 };
    });

    const clouds = Array.from({ length: 6 }, (_, i) => ({
      x: i * 320,
      y: 50 + Math.random() * 120,
      w: 100 + Math.random() * 80,
      speed: 0.2 + Math.random() * 0.15,
    }));

    function px(x) { return Math.round(x / PX) * PX; }
    function py(y) { return Math.round(y / PX) * PX; }

    function rect(x, y, w, h, color, alpha = 1) {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fillRect(px(x), py(y), Math.round(w / PX) * PX, Math.round(h / PX) * PX);
      ctx.globalAlpha = 1;
    }

    function drawBuilding(b) {
      const ground = H() * 0.78;
      const bx = ((b.x - offset * b.speed) % (W() + 400) + (W() + 400)) % (W() + 400) - 200;
      const by = ground - b.h;

      // Building body
      rect(bx, by, b.w, b.h, "rgba(255,255,255,0.07)");

      // Roof line
      rect(bx, by, b.w, PX, "rgba(255,255,255,0.2)");

      // Antenna on some buildings
      if (b.w > 70) {
        rect(bx + b.w / 2 - 2, by - 24, 4, 24, "rgba(255,255,255,0.15)");
        rect(bx + b.w / 2 - 6, by - 28, 12, 4, "rgba(255,255,255,0.2)");
      }

      // Windows per floor
      let winIdx = 0;
      for (let row = 0; row < b.floors; row++) {
        const wy = by + 12 + row * b.winGapY;
        for (let col = 0; col * b.winGapX + b.winOffX + b.winW < b.w; col++) {
          const wx = bx + b.winOffX + col * b.winGapX;
          const isLit = b.lit[winIdx % b.lit.length];
          winIdx++;
          if (isLit) {
            rect(wx, wy, b.winW, b.winH, "rgba(255,255,255,0.25)");
            rect(wx + 2, wy + 2, b.winW - 4, b.winH - 4, "rgba(255,255,255,0.12)");
          } else {
            rect(wx, wy, b.winW, b.winH, "rgba(255,255,255,0.04)");
          }
        }
      }

      // Left edge line
      rect(bx, by, PX, b.h, "rgba(255,255,255,0.1)");
    }

    function drawRunner(x, y, frame) {
      const f = Math.floor(frame / 7) % 4;
      // Head
      rect(x + 8, y, 16, 16, "rgba(255,255,255,0.95)");
      // Body
      rect(x + 6, y + 16, 20, 14, "rgba(255,255,255,0.85)");
      // Arms + legs based on frame
      if (f === 0) {
        rect(x + 2, y + 18, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 22, y + 22, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 8, y + 30, 8, 14, "rgba(255,255,255,0.85)");
        rect(x + 16, y + 30, 8, 10, "rgba(255,255,255,0.85)");
      } else if (f === 1) {
        rect(x + 0, y + 22, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 24, y + 18, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 10, y + 30, 8, 10, "rgba(255,255,255,0.85)");
        rect(x + 18, y + 30, 8, 14, "rgba(255,255,255,0.85)");
      } else if (f === 2) {
        rect(x + 4, y + 20, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 20, y + 20, 8, 10, "rgba(255,255,255,0.7)");
        rect(x + 8, y + 30, 8, 14, "rgba(255,255,255,0.85)");
        rect(x + 16, y + 30, 8, 12, "rgba(255,255,255,0.85)");
      } else {
        rect(x + 2, y + 18, 8, 12, "rgba(255,255,255,0.7)");
        rect(x + 22, y + 18, 8, 12, "rgba(255,255,255,0.7)");
        rect(x + 10, y + 28, 8, 12, "rgba(255,255,255,0.85)");
        rect(x + 18, y + 30, 8, 14, "rgba(255,255,255,0.85)");
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W(), H());
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W(), H());

      // Stars
      stars.forEach(s => {
        s.x -= s.speed;
        if (s.x < 0) s.x = W() + 10;
        rect(s.x, s.y, s.size * PX, s.size * PX, "rgba(255,255,255,0.5)");
      });

      // Moon
      rect(W() - 120, 60, 32, 32, "rgba(255,255,255,0.08)");
      rect(W() - 116, 64, 24, 24, "rgba(255,255,255,0.06)");

      // Clouds
      clouds.forEach(c => {
        c.x -= c.speed;
        if (c.x < -200) c.x = W() + 100;
        rect(c.x, c.y, c.w, 16, "rgba(255,255,255,0.04)");
        rect(c.x + 16, c.y - 12, c.w - 32, 12, "rgba(255,255,255,0.04)");
      });

      // Buildings (bg layer — slower)
      buildings.forEach(b => drawBuilding(b));

      // Ground
      const ground = H() * 0.78;
      rect(0, ground, W(), PX, "rgba(255,255,255,0.2)");

      // Ground dashes
      for (let gx = ((-offset * 2) % 48 + 48) % 48; gx < W(); gx += 48) {
        rect(gx, ground + 8, 24, PX, "rgba(255,255,255,0.06)");
      }

      // Runner
      drawRunner(W() * 0.12, ground - 44, runFrame);

      offset += 1.5;
      runFrame++;
      requestAnimationFrame(loop);
    }

    loop();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
