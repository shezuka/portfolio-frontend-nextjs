"use client";

import Modal from "@/components/Elements/Modal";
import ContactMeForm from "@/components/Forms/ContactMeForm";
import React from "react";

export default function ContactMeButton() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        className="mt-4 px-6 py-2 bg-primary text-white rounded-full"
        onClick={onClick}
      >
        Contact Me
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactMeForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
}
