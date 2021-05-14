import React, { useState, useEffect } from "react";

import Section from "../components/section";
import StaffCard from "../components/staff-card";

const StaffSection: React.FC = () => {
  const [staffs, setStaffs] = useState<IStaff[]>([]);
  useEffect(() => {
    let staffs: IStaff[] = [
      {
        name: "John Smooth",
        role: "Restaurant Owner",
        image: "/images/chef1.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.`,
        facebook: "",
        google: "",
        instagram: "",
        twitter: "",
      },
      {
        name: "Kharl Branyt",
        role: "Head chef",
        image: "/images/chef2.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.`,
        facebook: "",
        google: "",
        instagram: "",
        twitter: "",
      },
      {
        name: "Luke Simon",
        role: "Chef",
        image: "/images/chef3.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.`,
        facebook: "",
        google: "",
        instagram: "",
        twitter: "",
      },
      {
        name: "Josh Brown",
        role: "Chef",
        image: "/images/chef4.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.`,
        facebook: "",
        google: "",
        instagram: "",
        twitter: "",
      },
    ];
    setStaffs(staffs);
  }, []);
  return (
    <Section id={"staff"} className="pb-20">
      <Section.Title title="Our Master Chef" subtitle="Chef" />
      <div className="flex w-full flex-wrap flex-row justify-around gap-3 pb-10">
        {staffs.map((staff) => (
          <StaffCard
            title={staff.name}
            imageUrl={staff.image}
            subtitle={staff.role}
            description={staff.description}
            facebook={staff.facebook}
            google={staff.google}
            instagram={staff.instagram}
            twitter={staff.twitter}
          />
        ))}
      </div>
    </Section>
  );
};

export default StaffSection;
