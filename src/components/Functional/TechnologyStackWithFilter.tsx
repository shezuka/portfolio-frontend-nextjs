"use client";

import { GetSkills } from "@/data/Skills";
import { useEffect, useState } from "react";
import InputWithBadges from "@/components/Functional/InputWithBadges";
import TechnologyStack from "@/components/Functional/TechnologyStack";
import { Category } from "@/types";

type TechnologyStackProps = {};

const TechnologyStackWithFilter = (props: TechnologyStackProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [greenBadges, setGreenBadges] = useState<string[]>([]);
  const [badges, setBadges] = useState<string[]>([]);
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  const onFilterInputValueChange = (newValue: string) => {
    setFilterInputValue(newValue);
  };

  useEffect(() => {
    GetSkills().then(setCategories);
  }, []);

  useEffect(() => {
    setGreenBadges(
      categories.flatMap((it) => it.skills.flatMap((it2) => it2.title)),
    );
  }, [categories]);

  const stackBadges = [...badges];
  if (filterInputValue) stackBadges.push(filterInputValue);
  return (
    <>
      <InputWithBadges
        placeholder="Find skills (type and press Enter)"
        greenBadges={greenBadges}
        onChange={setBadges}
        onInputValueChange={onFilterInputValueChange}
      />
      <TechnologyStack categories={categories} highlightSkills={stackBadges} />
    </>
  );
};

export default TechnologyStackWithFilter;
