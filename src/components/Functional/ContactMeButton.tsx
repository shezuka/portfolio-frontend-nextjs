"use client";

import Modal from "@/components/Elements/Modal";
import ContactMeForm from "@/components/Forms/ContactMeForm";
import { FormEvent, useState } from "react";
import Button from "@/components/Elements/Button";

const ContactMeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
