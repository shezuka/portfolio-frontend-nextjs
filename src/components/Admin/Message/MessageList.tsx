import React from "react";
import {
  Datagrid,
  DateField,
  EmailField,
  List,
  RichTextField,
  ShowButton,
  TextField,
} from "react-admin";

const MessageList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <RichTextField source="message" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
        <>
          <ShowButton />
        </>
      </Datagrid>
    </List>
  );
};

export default MessageList;
