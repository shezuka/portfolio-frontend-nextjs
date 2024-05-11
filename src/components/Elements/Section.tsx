import React from "react";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  additionalClassName?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={`px-5 md:px-10 lg:px-15 xl:px-20 py-4 md:py-6 lg:py-8 xl:py-10 ${props.additionalClassName ?? ""}`}
    >
      {props.children}
    </section>
  );
}
