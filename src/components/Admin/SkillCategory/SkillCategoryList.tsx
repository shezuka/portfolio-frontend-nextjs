"use client";

import {
  Datagrid,
  DateField,
  EditButton,
  List,
  ShowButton,
  TextField,
} from "react-admin";
import React from "react";

const SkillCategoryList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="order" />
        <TextField source="title" />
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

export default SkillCategoryList;
