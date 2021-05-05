import React, { useState } from "react";

import * as Icons from "@heroicons/react/solid";
import Section from "../components/section";

interface ServicesProps {}
const ServicesSection = (props: ServicesProps) => {
  const [services, setServices] = useState<IService[]>([
    {
      name: "Birthday Party",
      icon: <Icons.CakeIcon />,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quia.",
    },
    {
      name: "Business Meetings",
      icon: <Icons.CakeIcon />,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quia.",
    },
    {
      name: "Wedding Party",
      icon: <Icons.CakeIcon />,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quia.",
    },
  ]);
  return (
    <Section className="bg-gray-50">
      <Section.Title title="Catering Services" subtitle="Services" />
      <div className="w-full flex flex-col sm:flex-wrap sm:flex-row sm:gap-12 justify-center">
        {services.map((service) => (
          <ServiceItem
            title={service.name}
            icon={service.icon}
            paragraph={service.description}
          />
        ))}
      </div>
    </Section>
  );
};

interface ServiceItemProps {
  title: string;
  paragraph: string;
  icon?: JSX.Element | string;
}
function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16 mb-0:last-child">
      <div className="h-32 w-32 mx-auto text-white bg-black rounded-full p-5 mb-5">
        {props.icon}
      </div>
      <h4 className="text-2xl font-bold mb-5">{props.title}</h4>
      <p className="w-64 text-center">{props.paragraph}</p>
    </div>
  );
}

export default ServicesSection;
