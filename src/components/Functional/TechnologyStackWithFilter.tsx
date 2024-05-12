"use client";

import { Skill } from "@/data/Skills";
import { useEffect, useState } from "react";
import InputWithBadges from "@/components/Functional/InputWithBadges";
import TechnologyStack from "@/components/Functional/TechnologyStack";

type TechnologyStackProps = {
  skills: { [key: string]: Skill[] };
};

const TechnologyStackWithFilter = (props: TechnologyStackProps) => {
  const { skills } = props;

  const [greenBadges, setGreenBadges] = useState<string[]>([]);
  const [badges, setBadges] = useState<string[]>([]);
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  const onFilterInputValueChange = (newValue: string) => {
    setFilterInputValue(newValue);
  };

  useEffect(() => {
    setGreenBadges(
      Object.keys(skills).flatMap((category) =>
        skills[category].map((skill) => skill.name),
      ),
    );
  }, [skills]);

  const stackBadges = [...badges];
  if (filterInputValue) stackBadges.push(filterInputValue);
  return (
    <>
      <InputWithBadges
        placeholder="Find skills (type and press Enter)"
        greenBadges={greenBadges}
        onChange={(newBadges) => setBadges(newBadges)}
        onInputValueChange={onFilterInputValueChange}
      />
      <TechnologyStack skills={skills} highlightSkills={stackBadges} />
    </>
  );
};

export default TechnologyStackWithFilter;
