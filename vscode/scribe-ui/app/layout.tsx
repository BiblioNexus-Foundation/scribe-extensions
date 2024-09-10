'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-zinc-950 bg-white relative overflow-hidden">
          <Navbar isCustom={pathname === "/editor"} />
          <main className="pt-[60px] min-h-screen ">        {children}
</main>
        </div>
        </body>
    </html>
  );
}
