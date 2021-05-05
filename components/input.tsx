import React from "react";

export interface InputProps {
  label: string;
  hint: string;
}
export default function Input(props: InputProps) {
  return (
    <div className="flex w-full flex-col mb-5">
      <label className="mb-2 font-bold">{props.label}</label>
      <input
        type="text"
        placeholder={props.hint}
        className="border-2 w-full p-2 rounded-lg"
      />
    </div>
  );
}
