import React from "react";
import classnames from "classnames";

interface ParagraphProps {
  children: string;
  className?: string;
}
export default function Paragraph(props: ParagraphProps) {
  return (
    <p className={classnames("text-gray-500", props.className)}>
      {props.children}
    </p>
  );
}
