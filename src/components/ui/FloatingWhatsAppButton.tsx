import { MessageCircle } from "lucide-react";
import { type PointerEvent, useRef, useState } from "react";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

type ButtonPosition = {
  x: number;
  y: number;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  dragged: boolean;
};

const buttonSize = 56;
const viewportMargin = 16;

function FloatingWhatsAppButton() {
  const [position, setPosition] = useState<ButtonPosition | null>(null);
  const dragState = useRef<DragState | null>(null);
  const suppressClick = useRef(false);

  const getCurrentPosition = () => ({
    x: position?.x ?? window.innerWidth - buttonSize - 20,
    y: position?.y ?? window.innerHeight - buttonSize - 20,
  });

  const clampPosition = (x: number, y: number) => ({
    x: Math.min(
      Math.max(viewportMargin, x),
      window.innerWidth - buttonSize - viewportMargin,
    ),
    y: Math.min(
      Math.max(viewportMargin, y),
      window.innerHeight - buttonSize - viewportMargin,
    ),
  });

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    const currentPosition = getCurrentPosition();

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: currentPosition.x,
      originY: currentPosition.y,
      dragged: false,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const currentDrag = dragState.current;

    if (!currentDrag || currentDrag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - currentDrag.startX;
    const deltaY = event.clientY - currentDrag.startY;

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      currentDrag.dragged = true;
    }

    if (!currentDrag.dragged) return;

    event.preventDefault();
    setPosition(
      clampPosition(currentDrag.originX + deltaX, currentDrag.originY + deltaY),
    );
  };

  const handlePointerUp = (event: PointerEvent<HTMLAnchorElement>) => {
    const currentDrag = dragState.current;

    if (!currentDrag || currentDrag.pointerId !== event.pointerId) return;

    suppressClick.current = currentDrag.dragged;
    dragState.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <a
      href={buildWhatsAppUrl(
        "Hola, quisiera solicitar información sobre los servicios de EcotechCR.",
      )}
      aria-label="Contactar por WhatsApp"
      onClick={(event) => {
        if (!suppressClick.current) return;

        event.preventDefault();
        suppressClick.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`fixed z-50 flex size-14 touch-none select-none items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-2xl shadow-cyan-950/50 transition hover:scale-105 hover:opacity-90 ${
        position ? "" : "right-5 bottom-5"
      }`}
      style={position ? { left: position.x, top: position.y } : undefined}
    >
      <MessageCircle size={26} />
    </a>
  );
}

export default FloatingWhatsAppButton;
