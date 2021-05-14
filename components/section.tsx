import React from "react";
import classnames from "classnames";

interface SectionProps {
  children?: any;
  id?: string;
  className?: string;
}
export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={classnames(
        "flex flex-col w-full items-center p-5 pb-20",
        props.className
      )}
    >
      {props.children}
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  textCenter?: boolean;
}

Section.Title = (props: SectionTitleProps) => {
  return (
    <div className={classnames("mb-20")}>
      <p
        className={classnames("relative transform translate-y-16 z-10", {
          "text-center": props.textCenter ?? true,
        })}
        style={{
          fontFamily: "Miss Fajardose, cursive",
          color: "#ffa323",
          fontStyle: "italic",
          fontSize: "100px",
          zIndex: 0,
        }}
      >
        {props.subtitle}
      </p>
      <h2
        className={classnames(
          { "text-center": props.textCenter ?? true },
          "relative text-5xl font-black leading-none z-40"
        )}
      >
        {props.title}
      </h2>
    </div>
  );
};

interface SectionParagraphProps {
  children: string;
  className?: string;
}
Section.Paragraph = (props: SectionParagraphProps) => {
  return (
    <p className={classnames("text-gray-500", props.className)}>
      {props.children}
    </p>
  );
};
