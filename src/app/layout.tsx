import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@/store/StoreProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const defaultTitle = "Dmytro Horbalynskyi | Portfolio";
const defaultDescription =
  "Discover the innovative world of Dmytro Horbalynskyi, a seasoned Full-Stack Developer specializing in React and modern web technologies. Explore projects that blend cutting-edge solutions with creative design to solve complex challenges. Dive into a portfolio where functionality meets creativity.";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: "website",
    title: defaultTitle,
    siteName: defaultTitle,
    description: defaultDescription,
    url: process.env.WEBSITE_URL,
    images: [process.env.WEBSITE_URL + "/site-image.png"],
  },
  twitter: {
    title: defaultTitle,
    description: defaultDescription,
    creator: "@dihordev",
  },
  icons: [
    {
      url: process.env.WEBSITE_URL + "/favicon.ico",
      rel: "shortcut icon",
      href: process.env.WEBSITE_URL + "/favicon.ico",
    },
    {
      url: process.env.WEBSITE_URL + "/favicon-16x16.ico",
      href: process.env.WEBSITE_URL + "/favicon-16x16.ico",
      type: "image/x-icon",
      sizes: "16x16",
    },
    {
      url: process.env.WEBSITE_URL + "/favicon-24x24.ico",
      href: process.env.WEBSITE_URL + "/favicon-24x24.ico",
      type: "image/x-icon",
      sizes: "24x24",
    },
    {
      url: process.env.WEBSITE_URL + "/favicon-32x32.ico",
      href: process.env.WEBSITE_URL + "/favicon-32x32.ico",
      type: "image/x-icon",
      sizes: "32x32",
    },
    {
      url: process.env.WEBSITE_URL + "/favicon-64x64.ico",
      href: process.env.WEBSITE_URL + "/favicon-64x64.ico",
      type: "image/x-icon",
      sizes: "64x64",
    },
    {
      url: process.env.WEBSITE_URL + "/apple-touch-icon.png",
      href: process.env.WEBSITE_URL + "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      url: process.env.WEBSITE_URL + "/site.webmanifest",
      href: process.env.WEBSITE_URL + "/site.webmanifest",
      rel: "manifest",
    },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    // <StoreProvider>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#333333" />
      </head>
      <body
        className={[inter.className, "min-h-screen", "bg-background"].join(" ")}
      >
        {children}
        <div id="modals-root"></div>
      </body>
    </html>
    // </StoreProvider>
  );
};

export default RootLayout;
