import { ctaLinks } from "@/lib/whatsapp";

export function WhatsAppFAB() {
  return (
    <a
      href={ctaLinks.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="group fixed z-50 bottom-6 right-6 inline-flex items-center justify-center h-[60px] w-[60px] rounded-full bg-whatsapp text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 [@media(hover:hover)]:hover:scale-[1.06]"
      style={{
        bottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",
        right: "calc(env(safe-area-inset-right) + 1.5rem)",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.05 4.91A10 10 0 0 0 4.18 18.13L3 22l3.96-1.16A10 10 0 1 0 19.05 4.91Zm-7.1 15.36h-.01a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.35.69.7-2.29-.2-.32a8.32 8.32 0 1 1 15.42-4.44 8.32 8.32 0 0 1-9.02 7.7Zm4.56-6.23c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13s-.64.81-.79.97c-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24a7.55 7.55 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.48-.6 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.1-.23-.16-.48-.29Z"/>
      </svg>
      <span className="hover-tooltip pointer-events-none absolute right-[72px] top-1/2 -translate-y-1/2 bg-white text-ink text-[13px] font-medium rounded-full px-3 py-1.5 shadow-md opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Message us
      </span>
    </a>
  );
}
