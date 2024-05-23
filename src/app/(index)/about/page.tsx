import React from "react";
import Section from "@/components/Elements/Section";
import AboutMe from "@/components/Functional/AboutMe";
import { Metadata } from "next";
import { BuildMetadata } from "@/data/Metadata";

export const metadata: Metadata = BuildMetadata({
  title: "About Me",
  description:
    "Discover Dmytro Horbalynskyi, a Full-Stack Developer skilled in React and modern web tech. Learn about his journey and expertise.",
});

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
  return (
    <main>
      {/*About Me section*/}
      <Section id="about">
        <h2 className="text-3xl font-bold mb-3">About Me</h2>
        <AboutMe />
      </Section>
    </main>
  );
};

export default AboutPage;
