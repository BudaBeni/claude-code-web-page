import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export function generateMetadata(): Metadata {
  return {
    title: "Automation Agency | AI Megoldások KKV-knak",
    description:
      "Rendszer alapú, skálázható automatizációk KKV-knak. Ingyenes demó Buda Benedektől, technikai tudás nélkül.",
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-paper">{children}</body>
    </html>
  );
}
