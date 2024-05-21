import React from "react";
import Section from "@/components/Elements/Section";
import ContactMeButton from "@/components/Functional/ContactMeButton";

interface ContactPageProps {}

const ContactPage = (props: ContactPageProps) => {
  return (
    <main>
      <Section id="contact-me">
        <div className="text-center">
          <h2 className="text-3xl text-blue-600 mb-3">Get In Touch</h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
          <div className="mt-4">
            <ContactMeButton />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
