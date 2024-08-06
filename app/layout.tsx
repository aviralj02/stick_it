import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "stick_it",
  description: "Generate TO-DO wallpapers in seconds!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-[1000vh] bg-[#e4e2dd] font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
