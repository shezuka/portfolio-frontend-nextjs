import React from "react";
import Section from "@/components/Elements/Section";
import AboutMe from "@/components/Functional/AboutMe";

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
