import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The MONO Times",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="md:max-w-5xl  2xl:max-w-screen-2xl mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
