import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={[inter.className, "min-h-screen", "bg-background"].join(
            " ",
          )}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
