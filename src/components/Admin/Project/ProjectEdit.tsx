"use client";

import {
  DateInput,
  Edit,
  ImageInput,
  SimpleForm,
  TextInput,
  useDataProvider,
  useRedirect,
} from "react-admin";
import React, { useState } from "react";
import axios from "@/lib/axios";
import AdminImagePreview from "@/components/Admin/Components/Elements/AdminImagePreview";
import { useParams } from "react-router";
import { id } from "postcss-selector-parser";

const ProjectEdit = () => {
  const { id } = useParams();
  const [image, setImage] = useState<File | null>(null);
  const dataProvider = useDataProvider();
  const redirect = useRedirect();

  const saveProject = async (values: any) => {
    const payload = { ...values };

    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("mime_type", image.type);
      const postImageResponse = await axios.put("/admin/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      });
      payload.image_id = postImageResponse.data.id;
    }

    const projectCreateResult = await dataProvider.update(`projects`, {
      id,
      data: payload,
      previousData: undefined,
    });
    redirect(`/projects/${projectCreateResult.data.id}/show`);
  };

  return (
    <Edit>
      <SimpleForm onSubmit={saveProject}>
        <TextInput readOnly name={"id"} source={"id"} />
        <ImageInput
          name={"image_id"}
          source={"Image"}
          accept="image/*"
          onChange={setImage}
        >
          <AdminImagePreview source={"image_id"} basePath={"images"} />
        </ImageInput>
        <TextInput required name={"title"} source={"title"} />
        <TextInput required name={"description"} source={"description"} />
        <TextInput required name={"project_url"} source={"project_url"} />
        <DateInput readOnly name={"created_at"} source="created_at" />
        <DateInput readOnly name={"updated_at"} source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};

export default ProjectEdit;
