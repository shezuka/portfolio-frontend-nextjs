"use client";

import {
  BooleanField,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const SkillCategoryCreate = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField label={"ID"} source="id" />
        <TextField label={"Title"} name={"title"} source={"title"} />
        <ReferenceField
          label={"Skill Category"}
          source={"skill_category_id"}
          reference={"skill-categories"}
        />
        <BooleanField name={"is_top"} source={"is_top"} />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default SkillCategoryCreate;
