"use client";

import {
  BooleanInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const SkillCategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput required name={"title"} source={"title"} />
        <ReferenceInput
          required
          name={"skill_category_id"}
          source={"skill_category_id"}
          reference={"skill-categories"}
        />
        <BooleanInput name={"is_top"} source={"is_top"} defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};

export default SkillCategoryCreate;
