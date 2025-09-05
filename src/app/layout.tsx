import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechCraft Solutions | Pengembangan Web & App Kustom",
  description: "Kami membangun website dan aplikasi kustom untuk bisnis dari berbagai ukuran menggunakan teknologi terkini seperti Next.js, MySQL, dan Docker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.className} antialiased dotted-background min-h-screen hide-default-cursor`}
        style={{}}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', function(e) {
                const cursor = document.body;
                cursor.style.setProperty('--cursor-x', e.clientX + 'px');
                cursor.style.setProperty('--cursor-y', e.clientY + 'px');
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}