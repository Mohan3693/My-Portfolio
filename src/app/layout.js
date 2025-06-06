import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Satish Portfolio",
  description: "Developed by Satish, a full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
        style={{
          background:
            // Modern, soft, and a bit playful with a hint of depth and color
            "radial-gradient(ellipse 80% 60% at 20% 0%, #ffe1e1 0%, #fff1f2 60%, #fff 100%)," +
            "radial-gradient(ellipse 60% 40% at 80% 20%, #fbc2eb 0%, #fff 100%)," +
            "linear-gradient(120deg, #f8fafc 0%, #f1f5f9 100%)",
          backgroundBlendMode: "screen, lighten, normal",
        }}
      >
        {/* Subtle noise overlay for extra depth */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "url('https://www.transparenttextures.com/patterns/noise.png') repeat",
            opacity: 0.10,
            mixBlendMode: "multiply",
          }}
        />
        {/* Soft warm overlay for balance */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,244,229,0.12) 0%, rgba(255,228,230,0.10) 100%)",
            mixBlendMode: "soft-light",
          }}
        />
        {/* Surprise: animated floating color blobs for modern depth */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              filter: "blur(60px)",
              opacity: 0.18,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <defs>
              <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle>
              <animate attributeName="cx" values="20%;80%;20%" dur="18s" repeatCount="indefinite" />
              <animate attributeName="cy" values="10%;80%;10%" dur="22s" repeatCount="indefinite" />
              <animate attributeName="r" values="180;220;180" dur="20s" repeatCount="indefinite" />
              <animate attributeName="fill" values="url(#blob1);url(#blob2);url(#blob3);url(#blob1)" dur="30s" repeatCount="indefinite" />
            </circle>
            <circle>
              <animate attributeName="cx" values="80%;30%;80%" dur="22s" repeatCount="indefinite" />
              <animate attributeName="cy" values="80%;20%;80%" dur="18s" repeatCount="indefinite" />
              <animate attributeName="r" values="140;200;140" dur="24s" repeatCount="indefinite" />
              <animate attributeName="fill" values="url(#blob2);url(#blob3);url(#blob1);url(#blob2)" dur="30s" repeatCount="indefinite" />
            </circle>
            <circle>
              <animate attributeName="cx" values="50%;70%;50%" dur="26s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50%;30%;50%" dur="20s" repeatCount="indefinite" />
              <animate attributeName="r" values="120;180;120" dur="28s" repeatCount="indefinite" />
              <animate attributeName="fill" values="url(#blob3);url(#blob1);url(#blob2);url(#blob3)" dur="30s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
