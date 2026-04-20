'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 120;

interface Node {
  x: number;
  y: number;
  radius: number;
  label: string;
  appearAt: number;
  color: string;
}

interface Edge {
  from: number;
  to: number;
  appearAt: number;
}

interface CardEl {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  appearAt: number;
}

const BG = '#050505';
const ACCENT = '#00d4aa';
const ACCENT_GLOW = 'rgba(0,212,170,0.15)';
const TEXT_DIM = 'rgba(255,255,255,0.6)';
const TEXT_BRIGHT = 'rgba(255,255,255,0.9)';

const nodes: Node[] = [
  { x: 0.5, y: 0.22, radius: 32, label: 'FlowForge', appearAt: 0.0, color: ACCENT },
  { x: 0.25, y: 0.48, radius: 18, label: 'Workflows', appearAt: 0.08, color: ACCENT },
  { x: 0.75, y: 0.48, radius: 18, label: 'BizPlan', appearAt: 0.14, color: ACCENT },
  { x: 0.15, y: 0.72, radius: 14, label: 'Outreach', appearAt: 0.20, color: ACCENT },
  { x: 0.5, y: 0.72, radius: 14, label: 'Doc Analysis', appearAt: 0.26, color: ACCENT },
  { x: 0.85, y: 0.72, radius: 14, label: 'Copywriter', appearAt: 0.32, color: ACCENT },
];

const edges: Edge[] = [
  { from: 0, to: 1, appearAt: 0.10 },
  { from: 0, to: 2, appearAt: 0.16 },
  { from: 1, to: 3, appearAt: 0.24 },
  { from: 1, to: 4, appearAt: 0.28 },
  { from: 2, to: 4, appearAt: 0.30 },
  { from: 2, to: 5, appearAt: 0.34 },
];

const cards: CardEl[] = [
  { x: 0.04, y: 0.50, w: 0.28, h: 0.14, label: 'Workflow Architect', appearAt: 0.40 },
  { x: 0.36, y: 0.50, w: 0.28, h: 0.14, label: 'BizPlan Builder', appearAt: 0.46 },
  { x: 0.68, y: 0.50, w: 0.28, h: 0.14, label: 'Outreach Engine', appearAt: 0.52 },
  { x: 0.12, y: 0.70, w: 0.28, h: 0.14, label: 'Doc Analyzer', appearAt: 0.58 },
  { x: 0.56, y: 0.70, w: 0.28, h: 0.14, label: 'Niche Copywriter', appearAt: 0.64 },
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  progress: number
) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const scale = Math.min(w, h);

  // Phase 1: Nodes + Edges (0–0.38)
  // Phase 2: Cards replace nodes (0.38–0.70)
  // Phase 3: Final dashboard reveal (0.70–1.0)

  const nodeOpacity = progress < 0.38 ? 1 : Math.max(0, 1 - (progress - 0.38) / 0.10);
  const cardOpacity = progress < 0.40 ? 0 : Math.min(1, (progress - 0.40) / 0.12);
  const finalGlow = progress < 0.70 ? 0 : Math.min(1, (progress - 0.70) / 0.15);

  // Draw edges
  if (nodeOpacity > 0) {
    ctx.globalAlpha = nodeOpacity;
    for (const edge of edges) {
      if (progress < edge.appearAt) continue;
      const t = Math.min(1, (progress - edge.appearAt) / 0.06);
      const a = easeOutExpo(t);
      const fromNode = nodes[edge.from];
      const toNode = nodes[edge.to];
      const fx = fromNode.x * w;
      const fy = fromNode.y * h;
      const tx = toNode.x * w;
      const ty = toNode.y * h;
      const ex = fx + (tx - fx) * a;
      const ey = fy + (ty - fy) * a;

      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = `rgba(0,212,170,${0.3 * a})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw nodes
    for (const node of nodes) {
      if (progress < node.appearAt) continue;
      const t = Math.min(1, (progress - node.appearAt) / 0.08);
      const a = easeOutExpo(t);
      const nx = node.x * w;
      const ny = node.y * h;
      const r = node.radius * (scale / 900) * a;

      // Glow
      const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 3);
      grad.addColorStop(0, ACCENT_GLOW);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(nx, ny, r * 3, 0, Math.PI * 2);
      ctx.fill();

      // Node circle
      ctx.beginPath();
      ctx.arc(nx, ny, r, 0, Math.PI * 2);
      ctx.fillStyle = BG;
      ctx.fill();
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label
      if (a > 0.5) {
        ctx.fillStyle = TEXT_DIM;
        ctx.font = `${Math.round(11 * (scale / 900))}px var(--font-geist-sans), system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + r + 18 * (scale / 900));
      }
    }
  }

  // Draw cards
  if (cardOpacity > 0) {
    ctx.globalAlpha = cardOpacity;
    for (const card of cards) {
      if (progress < card.appearAt) continue;
      const t = Math.min(1, (progress - card.appearAt) / 0.10);
      const a = easeOutExpo(t);
      const cx2 = card.x * w;
      const cy2 = card.y * h;
      const cw = card.w * w * a;
      const ch = card.h * h * a;

      // Card background
      ctx.fillStyle = '#111118';
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(cx2, cy2 - ch / 2, cw, ch, 12);
      ctx.fill();
      ctx.stroke();

      // Card label
      if (a > 0.6) {
        ctx.fillStyle = TEXT_BRIGHT;
        ctx.font = `600 ${Math.round(14 * (scale / 900))}px var(--font-geist-sans), system-ui, sans-serif`;
        ctx.textAlign = 'left';
        ctx.fillText(card.label, cx2 + 16 * (scale / 900), cy2 - ch / 2 + 28 * (scale / 900));
      }

      // Teal accent dot
      if (a > 0.4) {
        ctx.beginPath();
        ctx.arc(cx2 + 12 * (scale / 900), cy2 - ch / 2 + 22 * (scale / 900), 3, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT;
        ctx.fill();
      }
    }
  }

  // Final glow pulse
  if (finalGlow > 0) {
    ctx.globalAlpha = finalGlow * 0.3;
    const grad = ctx.createRadialGradient(cx, cy * 0.6, 0, cx, cy * 0.6, scale * 0.5);
    grad.addColorStop(0, 'rgba(0,212,170,0.08)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  ctx.globalAlpha = 1;
}

// roundRect polyfill
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x: number, y: number, w: number, h: number, r: number) {
    const rad = Math.min(r, w / 2, h / 2);
    this.moveTo(x + rad, y);
    this.lineTo(x + w - rad, y);
    this.arcTo(x + w, y, x + w, y + rad, rad);
    this.lineTo(x + w, y + h - rad);
    this.arcTo(x + w, y + h, x + w - rad, y + h, rad);
    this.lineTo(x + rad, y + h);
    this.arcTo(x, y + h, x, y + h - rad, rad);
    this.lineTo(x, y + rad);
    this.arcTo(x, y, x + rad, y, rad);
    this.closePath();
  };
}

export function ScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const animFrameRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Loading simulation — canvas draw doesn't need image preload
  // but we show a brief loading for polish
  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 25;
      if (p >= 100) {
        p = 100;
        setLoadProgress(100);
        clearInterval(iv);
        setTimeout(() => setLoaded(true), 300);
      } else {
        setLoadProgress(Math.round(p));
      }
    }, 80);
    return () => clearInterval(iv);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (!loaded) return;

    const unsub = smoothProgress.on('change', (v: number) => {
      const frame = Math.min(FRAME_COUNT - 1, Math.floor(v * FRAME_COUNT));
      if (frame === lastFrameRef.current) return;
      lastFrameRef.current = frame;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(ctx, window.innerWidth, window.innerHeight, v);
    });

    return () => {
      unsub();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [loaded, smoothProgress]);

  // Scroll indicator opacity
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  // Text beat transforms
  const beatA = useTransform(smoothProgress, [0, 0.04, 0.16, 0.20], [0, 1, 1, 0]);
  const beatAY = useTransform(smoothProgress, [0, 0.04, 0.16, 0.20], [20, 0, 0, -20]);
  const beatB = useTransform(smoothProgress, [0.22, 0.26, 0.40, 0.44], [0, 1, 1, 0]);
  const beatBY = useTransform(smoothProgress, [0.22, 0.26, 0.40, 0.44], [20, 0, 0, -20]);
  const beatC = useTransform(smoothProgress, [0.46, 0.50, 0.64, 0.68], [0, 1, 1, 0]);
  const beatCY = useTransform(smoothProgress, [0.46, 0.50, 0.64, 0.68], [20, 0, 0, -20]);
  const beatD = useTransform(smoothProgress, [0.72, 0.76, 0.92, 0.96], [0, 1, 1, 0]);
  const beatDY = useTransform(smoothProgress, [0.72, 0.76, 0.92, 0.96], [20, 0, 0, -20]);

  return (
    <>
      {/* Loading screen */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: BG }}>
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{ width: `${loadProgress}%`, background: ACCENT }}
            />
          </div>
          <p className="text-xs" style={{ color: TEXT_DIM }}>Loading experience...</p>
        </div>
      )}

      {/* Scroll container */}
      <div ref={containerRef} style={{ height: '400vh', background: BG }} className="relative">
        <canvas
          ref={canvasRef}
          className="sticky top-0 w-full h-screen"
          style={{ background: BG }}
        />

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: TEXT_DIM }}>
            Scroll to explore
          </span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 rounded-full animate-bounce" style={{ background: ACCENT }} />
          </div>
        </motion.div>

        {/* Text overlays */}
        <div className="sticky top-0 h-screen w-full pointer-events-none z-10">
          {/* Beat A — Hero */}
          <motion.div
            style={{ opacity: beatA, y: beatAY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1
              className="font-bold leading-none tracking-tight text-white/90"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
            >
              Five tools.
              <br />
              <span style={{ color: ACCENT }}>One system.</span>
            </h1>
            <p className="text-lg mt-4 max-w-md" style={{ color: TEXT_DIM }}>
              Replace $1,639/mo in SaaS tools with a single subscription.
            </p>
          </motion.div>

          {/* Beat B — Workflows */}
          <motion.div
            style={{ opacity: beatB, y: beatBY }}
            className="absolute inset-0 flex items-center px-[10%]"
          >
            <div className="max-w-lg">
              <h2
                className="font-bold tracking-tight text-white/90"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
              >
                Workflows that build themselves.
              </h2>
              <p className="text-base mt-3 leading-relaxed" style={{ color: TEXT_DIM }}>
                Describe a business process. Get an importable n8n JSON blueprint
                in 60 seconds. No drag-and-drop. No manual setup.
              </p>
            </div>
          </motion.div>

          {/* Beat C — Revenue */}
          <motion.div
            style={{ opacity: beatC, y: beatCY }}
            className="absolute inset-0 flex items-center justify-end px-[10%]"
          >
            <div className="max-w-lg text-right">
              <h2
                className="font-bold tracking-tight text-white/90"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
              >
                Revenue impact in every output.
              </h2>
              <p className="text-base mt-3 leading-relaxed" style={{ color: TEXT_DIM }}>
                Every module calculates pipeline value, dollar savings,
                and scale paths. Not just content — business intelligence.
              </p>
            </div>
          </motion.div>

          {/* Beat D — CTA */}
          <motion.div
            style={{ opacity: beatD, y: beatDY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h2
              className="font-bold tracking-tight text-white/90"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              Start replacing $1,639/mo.
            </h2>
            <p className="text-lg mt-4" style={{ color: TEXT_DIM }}>
              Five AI modules. One subscription. Built for solo founders who ship.
            </p>
            <a
              href="/login"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-150 hover:brightness-110 hover:-translate-y-px pointer-events-auto"
              style={{ background: ACCENT, color: BG }}
            >
              Get Started Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}