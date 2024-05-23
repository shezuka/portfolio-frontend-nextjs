import React, { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  additionalClassName?: string;
  title?: string;
};

const Section = (props: SectionProps) => {
  return (
    <section
      id={props.id}
      className={`px-5 md:px-10 lg:px-15 xl:px-20 py-4 md:py-6 lg:py-8 xl:py-10 ${props.additionalClassName ?? ""}`}
    >
      {props.title && (
        <h2 className="text-center text-3xl text-accent mb-6">{props.title}</h2>
      )}
      {props.children}
    </section>
  );
};

export default Section;
