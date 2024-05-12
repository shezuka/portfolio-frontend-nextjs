export type Skill = {
  name: string;
  top: boolean;
};

export function GetTopSkills(): { [k: string | symbol]: string[] } {
  return {
    Frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "SCSS",
      "TailwindCSS",
      "Styled-Components",
    ],
    Backend: [
      "Node",
      "PHP",
      "Python",
      "FastAPI",
      "Express.js",
      "Laravel",
      "RestAPI",
      "Ruby",
      "Ruby on Rails",
    ],
    "Backend Services": ["Nginx", "Redis", "RabbitMQ", "Celery"],
    Network: ["UDP", "TCP", "HTTP", "HTTPS", "WebSockets"],
    Databases: ["SQL", "PostgreSQL", "SQL Transactions"],
    DevOps: ["Docker", "Nginx"],
    Cloud: ["AWS"],
    "Version Control and Testing": [
      "GIT",
      "GIT-Flow",
      "Unit Testing",
      "Functional Testing",
    ],
    "Personal Attributes": [
      "Strong Problem-Solving Abilities",
      "Independent/Teamwork Balance",
      "Algorithms and Data Structures",
      "Reverse Engineering",
      "Fast-Learner",
      "Passion for Continuous Learning",
    ],
    "Operation Systems": ["Linux Ubuntu"],
  };
}

export function GetAllSkills(): { [k: string | symbol]: string[] } {
  const AllSkills = GetTopSkills();

  const Add: { [p: string | symbol]: string[] } = {
    Frontend: ["Angular", "LESS", "SASS", "jQuery"],
    Backend: [
      "GraphQL",
      "SEO",
      "C++",
      "Flask",
      "Java",
      "Kotlin",
      "Spring",
      "Django",
      "Nginx Lua",
      "Symphony",
      "C#",
    ],
    DevOps: ["Kubernetes", "Jenkins"],
    Databases: ["SQL Stored Procedures", "SQL Server", "MySQL", "MongoDB"],
    Cloud: ["Azure"],
    "Game Development": ["Unreal Engine", "Blender"],
    "Backend Services": ["Kafka"],
    "Operation Systems": ["Linux Debian"],
  };

  for (const key in Add) {
    AllSkills[key] = [...(AllSkills[key] ?? []), ...Add[key]];
  }

  return AllSkills;
}

export function BuildSkills() {
  const AllSkills = GetAllSkills();
  const TopSkills = GetTopSkills();
  const Skills: { [k: string | symbol]: Skill[] } = {};
  for (const key in AllSkills) {
    Skills[key] = AllSkills[key].map((skill) => ({
      name: skill,
      top: (TopSkills[key] && TopSkills[key].includes(skill)) || false,
    }));
  }
  return Skills;
}
