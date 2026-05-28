import { WHATSAPP_NUMBER } from "./constants";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ctaLinks = {
  general: whatsappLink("Hi Merle, I'd like to chat about Home Run"),
  hourly: whatsappLink("Hi Merle, I'd like to book by the hour"),
  monthly: whatsappLink("Hi Merle, I'd like to hear about monthly plans"),
  task: whatsappLink("Hi Merle, I have a one-off task I'd like a quote for"),
} as const;
