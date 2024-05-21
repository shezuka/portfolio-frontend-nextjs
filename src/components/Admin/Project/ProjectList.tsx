import React from "react";
import {
  Datagrid,
  DateField,
  EditButton,
  List,
  ShowButton,
  TextField,
  UrlField,
} from "react-admin";
import AdminImage from "@/components/Admin/Components/Elements/AdminImage";

const ProjectList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <AdminImage source="image_id" basePath="images" />
        <TextField source="title" />
        <TextField source="description" />
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
        <>
          <EditButton />
          <ShowButton />
        </>
      </Datagrid>
    </List>
  );
};

export default ProjectList;
