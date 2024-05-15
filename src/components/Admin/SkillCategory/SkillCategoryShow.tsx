"use client";

import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";

const SkillCategoryShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source={"id"} />
        <NumberField source={"order"} />
        <TextField source={"title"} />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default SkillCategoryShow;
