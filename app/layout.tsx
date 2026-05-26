import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import AuthProvider from "@/components/providers/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TickTock",
  description:
    "Timesheet Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={inter.className}
      >

        <AuthProvider>
          {children}
        </AuthProvider>

      </body>

    </html>
  );
}