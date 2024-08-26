import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raiyan Takrim | Full-Stack Next.js Developer",
  description: "I'm Raiyan Takrim, a Full-Stack Next.js Developer specializing in creating responsive and high-performance web applications. Let's build something amazing together!",
  keywords: "Full-Stack Developer, Next.js, Web Development, React, JavaScript, Portfolio, Tailwind, Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy-base text-slate-slate`}>
        {/* <Header /> */}
        <div className="sm:container sm:mx-auto px-6 sm:px-10 max-w-6xl">{children}</div>
      </body>
    </html>
  );
}
