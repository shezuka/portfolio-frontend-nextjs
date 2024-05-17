"use client";

import React, { FormEventHandler } from "react";
import Button from "@/components/Elements/Button";

type ContactMeFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const ContactMeForm = (props: ContactMeFormProps) => {
  return (
    <form onSubmit={props.onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          style={{ minHeight: "125px", maxHeight: "250px" }}
        ></textarea>
      </div>
      <div>
        <Button submit>Send Message</Button>
      </div>
    </form>
  );
};

export default ContactMeForm;
