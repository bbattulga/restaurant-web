import React from "react";

interface SectionTitleProps {
  children: string;
}
export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className="text-5xl text-center leading-none mb-5">{props.children}</h2>
  );
}
