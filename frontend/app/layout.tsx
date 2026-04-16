import React from "react";
import { Geist } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={geistSans.className}>{children}</body>
  </html>
);

export default RootLayout;
