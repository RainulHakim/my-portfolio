import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rainul Hakim — ML Researcher & CS Student",
  description:
    "CS student at Davidson College — machine learning researcher at FRIB, data consultant, designer, and community builder. Open to Summer 2027 internships.",
  openGraph: {
    title: "Rainul Hakim — ML Researcher & CS Student",
    description:
      "CS student at Davidson College — machine learning researcher at FRIB, data consultant, and designer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {/* Grain overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[9998]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: 0.025,
            mixBlendMode: "overlay",
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
