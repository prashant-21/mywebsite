import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpStream | Pragmatic Operations Automation",
  description: "Turn Daily WhatsApp Chaos & Paper Invoices into Protected Profit Margins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
