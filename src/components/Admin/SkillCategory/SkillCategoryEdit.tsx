"use client";

import {
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const SkillCategoryEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput
          required
          min={-1}
          name={"order"}
          source={"order"}
          defaultValue={-1}
        />
        <TextInput required name={"title"} source={"title"} />
        <DateInput readOnly name={"created_at"} source="created_at" />
        <DateInput readOnly name={"updated_at"} source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};

export default SkillCategoryEdit;
