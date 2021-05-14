import React, { useState } from "react";

import Input, { InputProps } from "./input";
import Section from "./section";

export default function Reservation() {
  const [fields, setFields] = useState<InputProps[]>([
    {
      label: "Name",
      hint: "Your Name",
    },
    {
      label: "Phone",
      hint: "Phone",
    },
    {
      label: "Date",
      hint: "Phone",
    },
    {
      label: "Time",
      hint: "time",
    },
  ]);
  return (
    <div className="container max-w-lg">
      <Section.Title
        title="Make reservation"
        textCenter={false}
        subtitle="Book a table"
      />
      <div className="w-full">
        <form action="#">
          {fields.map((field) => (
            <Input {...field} />
          ))}
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full bg-yellow-400 hover:bg-white hover:border-yellow-400 hover:text-yellow-400 text-white p-3 mt-3 rounded-sm border-2"
          >
            Make a Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
