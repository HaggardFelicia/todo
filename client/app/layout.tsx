/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Created with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className='layout'>
        <header className="header">
          <Link href="https://next-portfolio-umber-kappa.vercel.app/" target="_blank">
          <h1 className="logo">Felicia</h1></Link>
          <h2 className="app-name">To-Do</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
