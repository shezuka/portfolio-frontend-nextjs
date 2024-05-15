import { Datagrid, DateField, List, TextField } from "react-admin";
import React from "react";
import AdminImage from "@/components/Admin/Components/Elements/AdminImage";

const ImageList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <AdminImage source="id" basePath="images" />
        <TextField source="mime_type" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </Datagrid>
    </List>
  );
};

export default ImageList;
