import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import RecaptchaProvider from "@/components/Functional/RecaptchaProvider";
import { BuildMetadata } from "@/data/Metadata";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = BuildMetadata();

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#333333" />
        <link rel="canonical" href={`https://${process.env.WEBSITE_URL}/`} />
      </head>
      <body
        className={[inter.className, "min-h-screen", "bg-background"].join(" ")}
      >
        <RecaptchaProvider>{children}</RecaptchaProvider>
        <div id="modals-root"></div>
      </body>
    </html>
  );
};

export default RootLayout;
