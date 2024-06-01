import type { Metadata } from "next";

const defaultTitle = "Dima Horbalynskyi | Portfolio";
const defaultDescription =
  "Explore the world of Dmyto Horbalynskyi, a seasoned Full-Stack Developer skilled in React and modern web tech. Discover projects where innovation meets design.";

interface BuildMetadataParams {
  title?: string;
  description?: string;
}

export const BuildMetadata = (options?: BuildMetadataParams) => {
  options = options ?? {};
  let { title, description } = options;

  title = `${title ? `${title} | ` : ""}${defaultTitle}`;
  description = description ?? defaultDescription;

  return {
    title,
    description,
    keywords: [
      "Dmytro",
      "Horbalynskyi",
      "Dmytro Horbalynskyi",
      "project",
      "projects",
      "Software",
      "experience",
      "experienced",
      "frontend",
      "backend",
      "Engineering",
      "Impactful",
      "development",
      "website",
    ],
    openGraph: {
      type: "website",
      title,
      siteName: defaultTitle,
      description,
      url: process.env.WEBSITE_URL,
      images: [process.env.WEBSITE_URL + "/site-image.jpg"],
    },
    twitter: {
      title,
      description,
      creator: "@dihordev",
      site: process.env.WEBSITE_URL,
      images: [process.env.WEBSITE_URL + "/site-image.jpg"],
      card: "summary_large_image",
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
  } as Metadata;
};
