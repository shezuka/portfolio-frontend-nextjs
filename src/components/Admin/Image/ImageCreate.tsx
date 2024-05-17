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

const ImageCreate = () => {
  const [image, setImage] = useState<File | null>(null);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const redirect = useRedirect();

  const saveImage = async (values: any) => {
    if (!image) {
      notify("Please select an image", { type: "warning" });
      return;
    }

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
    redirect(`/images`);
  };

  return (
    <Create>
      <SimpleForm onSubmit={saveImage}>
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

export default ImageCreate;
