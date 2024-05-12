import Badge from "@/components/Elements/Badge";
import { Skill } from "@/data/Skills";

type TechnologyStackProps = {
  skills: { [key: string]: Skill[] };
  highlightSkills?: string[];
};

const TechnologyStack = ({ skills, highlightSkills }: TechnologyStackProps) => {
  return Object.keys(skills).map((category) => (
    <div key={category}>
      <h3 className="font-bold text-lg">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <div className="flex flex-wrap">
        {skills[category].map((skill) => (
          <span key={skill.name} className="px-1 py-1 first:pl-0 last:pr-0">
            <Badge
              style={skill.top ? "primary" : "secondary"}
              opacity={
                !highlightSkills ||
                !highlightSkills.length ||
                !!highlightSkills.find((it) =>
                  skill.name.toLowerCase().includes(it.toLowerCase()),
                )
                  ? 100
                  : 20
              }
            >
              {skill.name}
            </Badge>
          </span>
        ))}
      </div>
    </div>
  ));
};

export default TechnologyStack;
