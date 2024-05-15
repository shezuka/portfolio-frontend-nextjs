"use client";

import {
  BooleanField,
  Datagrid,
  DateField,
  EditActions,
  EditButton,
  List,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";

const SkillList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          reference={"skill-categories"}
          source={"skill_category_id"}
        />
        <TextField source="title" />
        <BooleanField source={"is_top"} />
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

export default SkillList;
