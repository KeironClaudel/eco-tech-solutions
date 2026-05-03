import { useEffect, useRef } from "react";

const PARTICLES = {
  back: [
    {
      colorA: "85,243,255",
      colorB: "168,85,247",
      duration: 5200,
      delay: 0,
      path: [
        [-0.15, 0.85],
        [0.25, 0.15],
        [0.55, 0.95],
        [1.15, 0.25],
      ],
    },
    {
      colorA: "168,85,247",
      colorB: "85,243,255",
      duration: 6800,
      delay: 1300,
      path: [
        [0.05, 0.25],
        [0.35, 0.95],
        [0.65, 0.05],
        [1.05, 0.75],
      ],
    },
  ],
  front: [
    {
      colorA: "85,243,255",
      colorB: "168,85,247",
      duration: 5800,
      delay: 800,
      path: [
        [0.2, -0.05],
        [0.55, 0.35],
        [0.35, 0.85],
        [0.95, 1.1],
      ],
    },
    {
      colorA: "168,85,247",
      colorB: "85,243,255",
      duration: 7400,
      delay: 2200,
      path: [
        [0.75, -0.1],
        [0.85, 0.35],
        [0.45, 0.65],
        [0.65, 1.1],
      ],
    },
  ],
};

function cubicBezier(t, p0, p1, p2, p3) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return {
    x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
  };
}

function toPoint([x, y], width, height) {
  return {
    x: x * width,
    y: y * height,
  };
}

function easeInOut(t) {
  return t * t * (3 - 2 * t);
}

function HeroLogoParticlesCanvas({ layer = "front" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const historiesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = PARTICLES[layer] ?? PARTICLES.front;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      historiesRef.current = particles.map(() => []);
    }

    function drawTrail(history, colorA, colorB) {
      for (let i = 1; i < history.length; i++) {
        const prev = history[i - 1];
        const point = history[i];
        const alpha = i / history.length;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = `rgba(${colorA}, ${alpha * 0.34})`;
        ctx.lineWidth = 0.7 + alpha * 2.2;
        ctx.shadowColor = `rgba(${colorB}, ${alpha * 0.4})`;
        ctx.shadowBlur = 10;
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
    }

    function drawParticle(point, colorA, colorB) {
      const glow = ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        28,
      );

      glow.addColorStop(0, `rgba(${colorA}, 0.95)`);
      glow.addColorStop(0.36, `rgba(${colorB}, 0.45)`);
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${colorA}, 1)`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate(time) {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const rawT =
          ((time + particle.delay) % particle.duration) / particle.duration;

        const t = easeInOut(rawT);

        const [p0, p1, p2, p3] = particle.path.map((point) =>
          toPoint(point, width, height),
        );

        const currentPoint = cubicBezier(t, p0, p1, p2, p3);

        const history = historiesRef.current[index] ?? [];

        if (rawT < 0.025) {
          history.length = 0;
        }

        history.push(currentPoint);

        if (history.length > 42) {
          history.shift();
        }

        historiesRef.current[index] = history;

        drawTrail(history, particle.colorA, particle.colorB);
        drawParticle(currentPoint, particle.colorA, particle.colorB);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    resize();
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [layer]);

  return (
    <canvas
      ref={canvasRef}
      className={`hero-logo-canvas hero-logo-canvas-${layer}`}
      aria-hidden="true"
    />
  );
}

export default HeroLogoParticlesCanvas;
