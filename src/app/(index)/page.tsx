import Section from "@/components/Elements/Section";
import TechnologyStackWithFilter from "@/components/Functional/TechnologyStackWithFilter";
import Projects from "@/components/Functional/Projects";
import MainPageHeader from "@/components/Sections/MainPageHeader";
import React from "react";

const Home = () => {
  return (
    <>
      <MainPageHeader />
      <main className="text-white">
        {/*Projects Section*/}
        <Section id="projects">
          <h2 className="text-3xl text-accent mb-3">Projects Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Projects />
          </div>
        </Section>

        {/*Technologies stack*/}
        <Section id={"technologies"}>
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div>
            <div className="inline-block w-3 h-3 bg-blue-600 rounded-xl"></div>{" "}
            - Top skills
          </div>
          <div className="mb-2">
            <div className="inline-block w-3 h-3 bg-gray-300 rounded-xl"></div>{" "}
            - I had little work experience, was self-learn or familiar skills
          </div>
          <TechnologyStackWithFilter />
        </Section>
      </main>
    </>
  );
};

export default Home;
