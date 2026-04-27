import { brand } from "../data/brand";

export function buildWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${brand.whatsapp}?text=${encodedMessage}`;
}