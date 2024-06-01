"use client";

import {
  DateField,
  EmailField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";
import MultiLineTextField from "@/components/Admin/Components/Elements/MultiLineTextField";

const MessageShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source={"id"} />
        <TextField source={"name"} />
        <EmailField source={"email"} />
        <MultiLineTextField source={"message"} />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleShowLayout>
    </Show>
  );
};

export default MessageShow;
