"use client";

import Modal from "@/components/Elements/Modal";
import ContactMeForm from "@/components/Forms/ContactMeForm";
import { FormEvent, useState } from "react";
import Button from "@/components/Elements/Button";
import axios from "@/lib/axios";
import useRecaptcha from "@/hooks/useRecaptcha";

const ContactMeButton = () => {
  const { getToken } = useRecaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await getToken("send_message");
    if (!token) {
      console.error(new Error("Failed to get captcha token"));
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    axios
      .post("/messages", {
        ...data,
        captcha_token: token,
      })
      .then(() => setIsModalOpen(false));
  };

  return (
    <>
      <Button rounded onClick={onClick}>
        Contact Me
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactMeForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ContactMeButton;
