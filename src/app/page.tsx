import ProjectCard from "@/components/Functional/ProjectCard";
import type { Metadata } from "next";
import React from "react";
import ContactMeButton from "@/components/Functional/ContactMeButton";

export const metadata: Metadata = {
  title: "Dmytro Horbalynskyi | Portfolio",
  description: "Senior Full-Stack Developer & React Expert",
};

export default function Home() {
  const onContactClick = () => {
    alert(123);
  };

  return (
    <>
      <header className="text-center p-20">
        <h1 className="text-4xl font-bold text-white mb-2">
          Crafting Beautiful Solutions with Code
        </h1>
        <p className="text-xl text-secondary">
          Dmytro Horbalynskyi | Senior Full-Stack Developer & React Expert
        </p>
      </header>

      <main>
        {/*Projects Section*/}
        <div className="bg-gray-800 px-20 py-10">
          <h2 className="text-3xl text-accent mb-8">Featured Projects</h2>
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
        </div>

        {/*Contact Section*/}
        <div className="text-center p-20">
          <h2 className="text-3xl text-primary mb-3">Get In Touch</h2>
          <p className="text-lg text-secondary">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
          <ContactMeButton />
        </div>
      </main>
    </>
  );
}
