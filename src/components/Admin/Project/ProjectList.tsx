import React from "react";
import {
  Datagrid,
  DateField,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  RichTextField,
  ShowButton,
  TextField,
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
        <TextField source="project_url" />
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
