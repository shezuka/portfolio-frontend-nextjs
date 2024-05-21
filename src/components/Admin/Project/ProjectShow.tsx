"use client";

import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
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
        <UrlField
          source="project_url"
          target="_blank"
          rel="noreferrer noopener"
        />
        <UrlField
          source="frontend_github_url"
          target="_blank"
          rel="noreferrer noopener"
        />
        <UrlField
          source="backend_github_url"
          target="_blank"
          rel="noreferrer noopener"
        />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProjectShow;
