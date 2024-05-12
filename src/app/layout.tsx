import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const defaultTitle = "Dmytro Horbalynskyi | Portfolio";
const defaultDescription =
  "Discover the innovative world of Dmytro Horbalynskyi, a seasoned Full-Stack Developer specializing in React and modern web technologies. Explore projects that blend cutting-edge solutions with creative design to solve complex challenges. Dive into a portfolio where functionality meets creativity.";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    "Dmytro",
    "Horbalynskyi",
    "Dmytro Horbalynskyi",
    "project",
    "projects",
    "Software",
    "experience",
    "frontend",
    "Engineering",
    "Impactful",
  ],
  openGraph: {
    type: "website",
    title: defaultTitle,
    siteName: defaultTitle,
    description: defaultDescription,
    url: process.env.WEBSITE_URL,
    images: [
      "https://dmytro-horbalynskyi-portfolio.s3.us-east-2.amazonaws.com/site-image.png",
    ],
  },
  twitter: {
    title: defaultTitle,
    description: defaultDescription,
    creator: "@dihordev",
    site: process.env.WEBSITE_URL,
    images: [
      "https://dmytro-horbalynskyi-portfolio.s3.us-east-2.amazonaws.com/site-image.png",
    ],
  },
  icons: [
    {
      url: process.env.WEBSITE_URL + "/favicon.ico",
      rel: "shortcut icon",
      href: process.env.WEBSITE_URL + "/favicon.ico",
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
