import { useEffect, useRef } from "react";

const TRAIL_POINTS = 14;

type Point = {
  x: number;
  y: number;
};

function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasCandidate = canvasRef.current;

    if (!canvasCandidate) return;

    const contextCandidate = canvasCandidate.getContext("2d");

    if (!contextCandidate) return;

    const canvasElement: HTMLCanvasElement = canvasCandidate;
    const canvasContext: CanvasRenderingContext2D = contextCandidate;

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let animationFrame = 0;
    let isEnabled = false;
    let isPointerVisible = false;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const target: Point = { x: width / 2, y: height / 2 };
    const points: Point[] = Array.from({ length: TRAIL_POINTS }, () => ({
      x: target.x,
      y: target.y,
    }));

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvasElement.width = Math.round(width * dpr);
      canvasElement.height = Math.round(height * dpr);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;

      canvasContext.setTransform(1, 0, 0, 1, 0, 0);
      canvasContext.scale(dpr, dpr);
    }

    function syncAvailability() {
      isEnabled = finePointerQuery.matches && !reducedMotionQuery.matches;

      if (!isEnabled) {
        isPointerVisible = false;
        canvasContext.clearRect(0, 0, width, height);
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (!isEnabled) return;

      target.x = event.clientX;
      target.y = event.clientY;
      isPointerVisible = true;
    }

    function handlePointerLeave() {
      isPointerVisible = false;
    }

    function updatePoints() {
      points.forEach((point, index) => {
        const previous = index === 0 ? target : points[index - 1];
        const ease = index === 0 ? 0.34 : 0.24;

        point.x += (previous.x - point.x) * ease;
        point.y += (previous.y - point.y) * ease;
      });
    }

    function drawTrail() {
      canvasContext.clearRect(0, 0, width, height);

      if (!isEnabled) return;

      updatePoints();

      const head = points[0];
      const tail = points[points.length - 1];
      const speed = Math.hypot(target.x - head.x, target.y - head.y);
      const alpha = isPointerVisible ? 1 : 0.3;

      if (!isPointerVisible && speed < 0.18) {
        canvasContext.clearRect(0, 0, width, height);
        return;
      }

      const gradient = canvasContext.createLinearGradient(
        tail.x,
        tail.y,
        head.x,
        head.y,
      );

      gradient.addColorStop(0, `rgba(136, 84, 255, ${0})`);
      gradient.addColorStop(0.18, `rgba(168, 85, 247, ${0.32 * alpha})`);
      gradient.addColorStop(0.72, `rgba(96, 232, 255, ${0.75 * alpha})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${0.98 * alpha})`);

      canvasContext.beginPath();
      canvasContext.moveTo(points[0].x, points[0].y);

      for (let index = 1; index < points.length - 1; index += 1) {
        const current = points[index];
        const next = points[index + 1];
        const midpointX = (current.x + next.x) / 2;
        const midpointY = (current.y + next.y) / 2;

        canvasContext.quadraticCurveTo(
          current.x,
          current.y,
          midpointX,
          midpointY,
        );
      }

      const last = points[points.length - 1];
      canvasContext.lineTo(last.x, last.y);

      canvasContext.lineCap = "round";
      canvasContext.lineJoin = "round";

      canvasContext.strokeStyle = gradient;
      canvasContext.lineWidth = 9;
      canvasContext.globalAlpha = 0.16 * alpha;
      canvasContext.shadowBlur = 18;
      canvasContext.shadowColor = "rgba(109, 240, 255, 0.35)";
      canvasContext.stroke();

      canvasContext.strokeStyle = gradient;
      canvasContext.lineWidth = 3.2;
      canvasContext.globalAlpha = 0.95 * alpha;
      canvasContext.shadowBlur = 8;
      canvasContext.shadowColor = "rgba(173, 94, 255, 0.22)";
      canvasContext.stroke();

      canvasContext.beginPath();
      canvasContext.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
      canvasContext.fillStyle = `rgba(255, 255, 255, ${0.92 * alpha})`;
      canvasContext.globalAlpha = 1;
      canvasContext.shadowBlur = 10;
      canvasContext.shadowColor = "rgba(109, 240, 255, 0.28)";
      canvasContext.fill();

      canvasContext.shadowBlur = 0;
      canvasContext.globalAlpha = 1;
    }

    function animate() {
      drawTrail();
      animationFrame = window.requestAnimationFrame(animate);
    }

    resizeCanvas();
    syncAvailability();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    finePointerQuery.addEventListener("change", syncAvailability);
    reducedMotionQuery.addEventListener("change", syncAvailability);

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      finePointerQuery.removeEventListener("change", syncAvailability);
      reducedMotionQuery.removeEventListener("change", syncAvailability);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="cursor-trail-canvas" />;
}

export default CursorTrail;
