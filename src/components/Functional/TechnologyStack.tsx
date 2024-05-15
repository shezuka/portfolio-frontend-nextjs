import Badge from "@/components/Elements/Badge";
import { Category } from "@/types";

type TechnologyStackProps = {
  categories: Category[];
  highlightSkills?: string[];
};

const TechnologyStack = ({
  categories,
  highlightSkills,
}: TechnologyStackProps) => {
  return categories.map((category) => (
    <div key={category.id}>
      <h3 className="font-bold text-lg">
        {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
      </h3>
      <div className="flex flex-wrap">
        {category.skills.map((skill) => (
          <span key={skill.title} className="px-1 py-1 first:pl-0 last:pr-0">
            <Badge
              style={skill.is_top ? "primary" : "secondary"}
              opacity={
                !highlightSkills ||
                !highlightSkills.length ||
                !!highlightSkills.find((it) =>
                  skill.title.toLowerCase().includes(it.toLowerCase()),
                )
                  ? 100
                  : 20
              }
            >
              {skill.title}
            </Badge>
          </span>
        ))}
      </div>
    </div>
  ));
};

export default TechnologyStack;
