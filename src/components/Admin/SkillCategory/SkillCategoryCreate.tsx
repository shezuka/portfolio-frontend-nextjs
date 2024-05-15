"use client";

import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

const SkillCategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput
          required
          min={-1}
          name={"order"}
          source={"order"}
          defaultValue={-1}
        />
        <TextInput required name={"title"} source={"title"} />
      </SimpleForm>
    </Create>
  );
};

export default SkillCategoryCreate;
