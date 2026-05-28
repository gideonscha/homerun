import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://homerun.family"),
  title: "Home Run — Smart Concierge for Busy Families in the Sharon",
  description:
    "Errand running, technician waits, government queues, school pickups, parent care. Insured, bilingual, same-day. Ra'anana · Herzliya · Kfar Saba · Hod HaSharon.",
  openGraph: {
    title: "Home Run — Get your week back",
    description:
      "The smart concierge for busy families in the Sharon. We run the errands, waits, and queues. You run your life.",
    type: "website",
    locale: "en_IL",
    siteName: "Home Run",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Run — Get your week back",
    description:
      "The smart concierge for busy families in the Sharon. Insured, bilingual, same-day.",
  },
};

export const viewport: Viewport = {
  themeColor: "#c7613d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
