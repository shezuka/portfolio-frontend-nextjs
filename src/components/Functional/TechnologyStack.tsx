import Badge from "@/components/Elements/Badge";
import { Skill } from "@/data/Skills";

type TechnologyStackProps = {
  skills: { [key: string]: Skill[] };
};

export default function TechnologyStack({ skills }: TechnologyStackProps) {
  return Object.keys(skills).map((category) => (
    <div key={category}>
      <h3 className="font-bold text-lg">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <div className="flex flex-wrap">
        {skills[category].map((skill) => (
          <Badge key={skill.name} style={skill.top ? "primary" : "secondary"}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  ));
}
