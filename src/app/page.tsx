import ProjectCard from "@/components/Functional/ProjectCard";
import React from "react";
import ContactMeButton from "@/components/Functional/ContactMeButton";
import Section from "@/components/Elements/Section";
import AboutMe from "@/components/Functional/AboutMe";

export default function Home() {
  return (
    <>
      <header className="text-center p-20">
        <h1 className="text-4xl font-bold text-white mb-2">
          Engineering Impactful Software Experiences
        </h1>
        <p className="text-xl text-secondary">
          Dmytro Horbalynskyi | Senior Full-Stack Developer & React Expert
        </p>
      </header>

      <main>
        {/*About Me section*/}
        <Section id="about" additionalClassName="bg-gray-800 text-white">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <AboutMe />
        </Section>

        {/*Projects Section*/}
        <Section
          id="featured-projects"
          additionalClassName="bg-gray-800 text-white"
        >
          <h2 className="text-3xl text-accent mb-3">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProjectCard
              project={{
                logoUrl: "/temp/site_01.png",
                description: "Project description",
                name: "Project name",
                projectUrl: "",
              }}
            />
            <ProjectCard
              project={{
                logoUrl: "/temp/site_02.png",
                description: "Project description",
                name: "Project name",
                projectUrl: "https://hairland.ca",
              }}
            />
          </div>
        </Section>

        {/*Contact Section*/}
        <Section id="contact-me">
          <div className="text-center">
            <h2 className="text-3xl text-primary mb-3">Get In Touch</h2>
            <p className="text-lg text-secondary">
              Feel free to reach out for collaborations or just a friendly hello
              👋
            </p>
            <ContactMeButton />
          </div>
        </Section>
      </main>
    </>
  );
}
