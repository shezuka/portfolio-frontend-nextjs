import Section from "@/components/Elements/Section";
import Projects from "@/components/Functional/Projects";
import MainPageHeader from "@/components/Sections/MainPageHeader";
import React from "react";

const Home = () => {
  return (
    <>
      <MainPageHeader />
      <main className="text-white">
        {/*Projects Section*/}
        <Section id="projects" title="Projects">
          <div className="flex flex-col container m-auto max-w-full lg:max-w-2xl">
            <Projects />
          </div>
        </Section>

        {/*Technologies stack*/}
        {/*<Section id={"technologies"} title="Skills">*/}
        {/*  <div className="container">*/}
        {/*    <TechnologyStackWithFilter />*/}
        {/*  </div>*/}
        {/*</Section>*/}
      </main>
    </>
  );
};

export default Home;
