import { useEffect, useRef } from "react";

type LayerType = "front" | "back";

type Point = {
  x: number;
  y: number;
};

type PathSegment = {
  from: Point;
  to: Point;
  length: number;
};

type PathMetrics = {
  segments: PathSegment[];
  totalLength: number;
};

type TraceConfig = {
  color: string;
  glow: string;
  duration: number;
  delay: number;
  path: [number, number][];
};

type Props = {
  layer?: LayerType;
};

const TRACES: Record<LayerType, TraceConfig[]> = {
  back: [
    {
      color: "85,243,255",
      glow: "168,85,247",
      duration: 4600,
      delay: 0,
      path: [
        [0.04, 0.2],
        [0.24, 0.2],
        [0.24, 0.38],
        [0.36, 0.38],
      ],
    },
    {
      color: "168,85,247",
      glow: "85,243,255",
      duration: 5200,
      delay: 900,
      path: [
        [0.92, 0.74],
        [0.72, 0.74],
        [0.72, 0.58],
        [0.64, 0.58],
      ],
    },
  ],
  front: [
    {
      color: "85,243,255",
      glow: "168,85,247",
      duration: 4200,
      delay: 500,
      path: [
        [0.12, 0.82],
        [0.3, 0.82],
        [0.3, 0.66],
        [0.37, 0.66],
      ],
    },
    {
      color: "168,85,247",
      glow: "85,243,255",
      duration: 5000,
      delay: 1400,
      path: [
        [0.88, 0.28],
        [0.7, 0.28],
        [0.7, 0.42],
        [0.63, 0.42],
      ],
    },
  ],
};

function toPoint([x, y]: [number, number], width: number, height: number): Point {
  return {
    x: x * width,
    y: y * height,
  };
}

function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function getPathMetrics(points: Point[]): PathMetrics {
  const segments: PathSegment[] = [];
  let totalLength = 0;

  for (let index = 1; index < points.length; index++) {
    const from = points[index - 1];
    const to = points[index];
    const length = distance(from, to);

    totalLength += length;
    segments.push({ from, to, length });
  }

  return { segments, totalLength };
}

function getPointAtProgress(points: Point[], progress: number): Point {
  const { segments, totalLength } = getPathMetrics(points);
  const targetLength = totalLength * progress;

  let traveled = 0;

  for (const segment of segments) {
    if (traveled + segment.length >= targetLength) {
      const localProgress = (targetLength - traveled) / segment.length;

      return {
        x: segment.from.x + (segment.to.x - segment.from.x) * localProgress,
        y: segment.from.y + (segment.to.y - segment.from.y) * localProgress,
      };
    }

    traveled += segment.length;
  }

  return points[points.length - 1];
}

function drawStaticCircuit(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  color: string,
) {
  ctx.beginPath();

  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
      return;
    }

    ctx.lineTo(point.x, point.y);
  });

  ctx.strokeStyle = `rgba(${color}, 0.16)`;
  ctx.lineWidth = 1.25;
  ctx.shadowBlur = 0;
  ctx.stroke();

  points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${color}, 0.32)`;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  });
}

function drawActiveCircuit(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  progress: number,
  color: string,
  glow: string,
) {
  const { segments, totalLength } = getPathMetrics(points);
  const targetLength = totalLength * progress;

  let traveled = 0;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (const segment of segments) {
    if (traveled + segment.length <= targetLength) {
      ctx.lineTo(segment.to.x, segment.to.y);
      traveled += segment.length;
      continue;
    }

    const localProgress = (targetLength - traveled) / segment.length;

    ctx.lineTo(
      segment.from.x + (segment.to.x - segment.from.x) * localProgress,
      segment.from.y + (segment.to.y - segment.from.y) * localProgress,
    );

    break;
  }

  ctx.strokeStyle = `rgba(${color}, 0.88)`;
  ctx.lineWidth = 2.2;
  ctx.shadowColor = `rgba(${glow}, 0.7)`;
  ctx.shadowBlur = 14;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawPulse(
  ctx: CanvasRenderingContext2D,
  point: Point,
  progress: number,
  color: string,
  glow: string,
) {
  const radius = 4 + progress * 26;
  const alpha = 1 - progress;

  const gradient = ctx.createRadialGradient(
    point.x,
    point.y,
    0,
    point.x,
    point.y,
    radius,
  );

  gradient.addColorStop(0, `rgba(${color}, ${0.65 * alpha})`);
  gradient.addColorStop(0.45, `rgba(${glow}, ${0.28 * alpha})`);
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function HeroLogoParticlesCanvas({ layer = "front" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

useEffect(() => {
  const canvas = canvasRef.current;

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const canvasElement: HTMLCanvasElement = canvas;
  const canvasContext: CanvasRenderingContext2D = context;
  const traces = TRACES[layer];

  function resize() {
    const parent = canvasElement.parentElement;

    if (!parent) {
      return;
    }

    const rect = parent.getBoundingClientRect();
    const width = rect.width || 520;
    const height = rect.height || 440;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvasElement.width = width * dpr;
    canvasElement.height = height * dpr;
    canvasElement.style.width = `${width}px`;
    canvasElement.style.height = `${height}px`;

    canvasContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function animate(time: number) {
    const width = canvasElement.clientWidth;
    const height = canvasElement.clientHeight;

    canvasContext.clearRect(0, 0, width, height);

    traces.forEach((trace) => {
      const points = trace.path.map((point) => toPoint(point, width, height));
      const rawProgress =
        ((time + trace.delay) % trace.duration) / trace.duration;

      const progress = easeOutCubic(Math.min(rawProgress / 0.78, 1));
      const endPoint = points[points.length - 1];
      const currentPoint = getPointAtProgress(points, progress);

      drawStaticCircuit(canvasContext, points, trace.color);
      drawActiveCircuit(
        canvasContext,
        points,
        progress,
        trace.color,
        trace.glow,
      );

      canvasContext.beginPath();
      canvasContext.arc(currentPoint.x, currentPoint.y, 4, 0, Math.PI * 2);
      canvasContext.fillStyle = `rgba(${trace.color}, 0.95)`;
      canvasContext.shadowColor = `rgba(${trace.glow}, 0.75)`;
      canvasContext.shadowBlur = 14;
      canvasContext.fill();
      canvasContext.shadowBlur = 0;

      if (rawProgress > 0.78) {
        const pulseProgress = (rawProgress - 0.78) / 0.22;

        drawPulse(
          canvasContext,
          endPoint,
          pulseProgress,
          trace.color,
          trace.glow,
        );
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  }

  resize();
  rafRef.current = requestAnimationFrame(animate);
  window.addEventListener("resize", resize);

  return () => {
    window.removeEventListener("resize", resize);

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
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