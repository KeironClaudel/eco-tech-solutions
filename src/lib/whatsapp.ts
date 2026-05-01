import { brand } from "../data/brand";

export function buildWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://api.whatsapp.com/send?phone=${brand.whatsapp}&text=${encodedMessage}`;
}

export function openWhatsApp(message: string) {
  window.location.assign(buildWhatsAppUrl(message));
}
