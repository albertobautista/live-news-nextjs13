import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Providers";
import { Header } from "live-news-app/components/header";
import { Footer } from "live-news-app/components";

export const metadata: Metadata = {
  title: "Live News App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <main className="flex-grow max-w-6xl mx-auto">{children}</main>
          <footer className="bg-slate-200 dark:bg-slate-800">
            <Footer />
          </footer>
        </div>
      </Providers>
    </html>
  );
}
