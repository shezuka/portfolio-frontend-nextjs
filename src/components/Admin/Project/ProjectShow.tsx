"use client";

import {
  DateField,
  NumberField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";
import AdminImage from "@/components/Admin/Components/Elements/AdminImage";

const ProjectShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source={"id"} />
        <AdminImage source="image_id" basePath="images" />
        <TextField source={"title"} />
        <TextField source={"description"} />
        <TextField source={"project_url"} />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProjectShow;
