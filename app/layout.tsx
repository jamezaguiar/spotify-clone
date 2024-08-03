import { Footer } from "@/components/footer/Footer";
import { SideBar } from "@/components/side-bar/SideBar";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-zinc-900 text-zinc-50">
        <div className="flex flex-1">
          <SideBar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
