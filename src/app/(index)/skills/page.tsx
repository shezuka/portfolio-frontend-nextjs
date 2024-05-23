import React from "react";
import TechnologyStackWithFilter from "@/components/Functional/TechnologyStackWithFilter";
import { BuildMetadata } from "@/data/Metadata";
import SkillSetIcons from "@/components/Functional/SkillSetIcons";

export const metadata = BuildMetadata({
  title: "Skills",
  description:
    "Discover the skills and technologies I excel in, including programming languages, frameworks, and tools that power my projects.",
});

interface PageProps {}

const Page = (props: PageProps) => {
  return (
    <>
      <header className="min-h-screen flex flex-col justify-center items-center header-gradient mt-[-3rem]">
        <SkillSetIcons />
      </header>
      <main className="container px-2 py-4 md:m-auto">
        <TechnologyStackWithFilter />
      </main>
    </>
  );
};

export default Page;
