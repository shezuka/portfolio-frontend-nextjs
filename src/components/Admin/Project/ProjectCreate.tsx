"use client";

import {
  Create,
  ImageInput,
  SimpleForm,
  TextInput,
  useDataProvider,
  useNotify,
  useRedirect,
} from "react-admin";
import { useState } from "react";
import axios from "@/lib/axios";

const ProjectCreate = () => {
  const [image, setImage] = useState<File | null>(null);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const redirect = useRedirect();

  const saveProject = async (values: any) => {
    if (!image) {
      notify("Please select an image", { type: "warning" });
      return;
    }

    const payload = { ...values };

    const formData = new FormData();
    formData.append("file", image);
    formData.append("mime_type", image.type);
    const postImageResponse = await axios.post("/admin/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    });
    payload.image_id = postImageResponse.data.id;

    const projectCreateResult = await dataProvider.create("projects", {
      data: payload,
    });
    redirect(`/projects/${projectCreateResult.data.id}/show`);
  };

  return (
    <Create>
      <SimpleForm onSubmit={saveProject}>
        <TextInput required name={"title"} source={"title"} />
        <TextInput required name={"description"} source={"description"} />
        <TextInput name={"project_url"} source={"project_url"} />
        <TextInput
          name={"frontend_github_url"}
          source={"frontend_github_url"}
        />
        <TextInput name={"backend_github_url"} source={"backend_github_url"} />
        <ImageInput
          name={"image_id"}
          source={"Image"}
          accept="image/*"
          onChange={setImage}
        />
      </SimpleForm>
    </Create>
  );
};

export default ProjectCreate;
