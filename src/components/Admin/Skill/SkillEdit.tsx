"use client";

import {
  BooleanInput,
  Create,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

const SkillCategoryCreate = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput readOnly name={"id"} source="id" />
        <TextInput required name={"title"} source={"title"} />
        <ReferenceInput
          required
          name={"skill_category_id"}
          source={"skill_category_id"}
          reference={"skill-categories"}
        />
        <BooleanInput name={"is_top"} source={"is_top"} defaultValue={true} />
        <DateInput readOnly name={"created_at"} source="created_at" />
        <DateInput readOnly name={"updated_at"} source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};

export default SkillCategoryCreate;
