import React from "react";

interface SectionProps {
  children?: any;
}
export default function Section(props: SectionProps) {
  return (
    <section className="flex flex-col w-full items-center p-5 mt-10">
      {props.children}
    </section>
  );
}
