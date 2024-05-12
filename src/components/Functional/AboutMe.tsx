function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-300 text-md lg:text-lg leading-loose my-4 last:mb-0 last:pb-0">
      {children}
    </p>
  );
}

const AboutMe = () => {
  return (
    <>
      <Paragraph>
        I am a seasoned Full-Stack Developer with over 9 years of experience,
        specializing in both frontend and backend development. My expertise in
        React and Node.js is complemented by a robust background in backend
        technologies, particularly Ruby on Rails and PHP, which has enabled me
        to effectively handle the full spectrum of web development tasks.
      </Paragraph>
      <Paragraph>
        My journey in tech began shortly after graduating from Computer Academy
        ‘Step’, where I was drawn to the fast-paced and ever-evolving nature of
        software development. Starting as a Software Developer at
        FastCoinExchange, I quickly learned the ropes of front-end development
        and user-centric design, while also engaging in complex backend system
        implementations. Over the years, I've embraced leadership roles, like my
        recent position at MonkeyTech, where I mentored teams and spearheaded
        major projects, including an innovative CRM system for the construction
        sector and a web PDF reader with advanced features like annotations and
        offline capabilities.
      </Paragraph>
      <Paragraph>
        My technical toolkit is diverse, encompassing advanced proficiency in
        JavaScript (ES6+), TypeScript, React, Redux, Node.js, and extensive
        backend experience with Ruby on Rails and PHP. This combination enables
        me to efficiently manage full-stack project demands, from server-side
        logic to dynamic user interfaces. My familiarity with Docker and
        Kubernetes also aids in creating scalable and reproducible environments,
        ensuring robust application deployment.
      </Paragraph>
      <Paragraph>
        What excites me most about development is the ability to solve complex
        problems and make a tangible impact on users' lives through thoughtful
        code. I am deeply committed to continuous learning and embracing new
        challenges that push the boundaries of what I can achieve.
      </Paragraph>
      <Paragraph>
        I am always eager to tackle new projects and collaborate with
        like-minded professionals. Feel free to reach out via{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/dmytro-horbalynskyi-306b45134/"
          className="font-bold text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          LinkedIn
        </a>{" "}
        or take a look at my work in the Projects section. Let’s build something
        great together.
      </Paragraph>
    </>
  );
};

export default AboutMe;
