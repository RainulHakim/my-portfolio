import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rainulhakim.vercel.app"),
  title: "Rainul Hakim · Computer Science at Davidson College",
  description:
    "Computer Science at Davidson College, class of 2029. Machine learning research at the Facility for Rare Isotope Beams, data analytics consulting, and products used by hundreds of students.",
  openGraph: {
    title: "Rainul Hakim · Computer Science at Davidson College",
    description:
      "Computer Science at Davidson College, class of 2029. Machine learning research at FRIB, and products used by hundreds of students.",
    type: "website",
    url: "/",
    siteName: "Rainul Hakim",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
