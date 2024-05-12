import ProjectCard from "@/components/Functional/ProjectCard";
import ContactMeButton from "@/components/Functional/ContactMeButton";
import Section from "@/components/Elements/Section";
import AboutMe from "@/components/Functional/AboutMe";
import { BuildSkills } from "@/data/Skills";
import SocialMediaButton from "@/components/Elements/SocialMediaButton";
import TechnologyStackWithFilter from "@/components/Functional/TechnologyStackWithFilter";
import ProfilePhoto from "@/components/Functional/ProfilePhoto";

const Home = () => {
  return (
    <>
      <header className="header-gradient flex flex-col justify-center items-center text-center p-5 md:p-10 lg:p-15 xl:p-20">
        <ProfilePhoto />
        <div className="my-2">
          <div className="inline-block m-2 mt-0">
            <SocialMediaButton
              href="https://www.linkedin.com/in/dmytro-horbalynskyi-306b45134/"
              iconClass="fab fa-linkedin"
              bgColor="blue-600"
              hoverBgColor="blue-800"
            >
              LinkedIn
            </SocialMediaButton>
          </div>
          <div className="inline-block m-2 mb-0">
            <SocialMediaButton
              href="https://www.facebook.com/profile.php?id=61551777862375"
              iconClass="fab fa-facebook"
              bgColor="blue-600"
              hoverBgColor="blue-800"
            >
              Facebook
            </SocialMediaButton>
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold text-white mb-2">
          Engineering Impactful Software Experiences
        </h1>
        <p className="text-xl text-gray-200">
          Dmytro Horbalynskyi | Senior Full-Stack Developer & React Expert
        </p>
      </header>

      <main className="bg-gray-900 text-white">
        {/*About Me section*/}
        <Section id="about">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <AboutMe />
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
          <TechnologyStackWithFilter skills={BuildSkills()} />
        </Section>

        {/*Projects Section*/}
        <Section id="featured-projects">
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
      </main>

      {/*Contact Section*/}
      <footer>
        <Section id="contact-me">
          <div className="text-center">
            <h2 className="text-3xl text-blue-600 mb-3">Get In Touch</h2>
            <p className="text-lg text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello
              👋
            </p>
            <div className="mt-4">
              <ContactMeButton />
            </div>
          </div>
        </Section>
      </footer>
    </>
  );
};

export default Home;
