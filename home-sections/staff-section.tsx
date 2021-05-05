import React, { useState, useEffect } from "react";

import Section from "../components/section";
import StaffCard from "../components/staff-card";

const StaffSection: React.FC = () => {
  const [staffs, setStaffs] = useState<IStaff[]>([]);
  useEffect(() => {
    let staffs = [];
    for (let i = 0; i < 4; i++) {
      staffs.push({
        name: `John ${i}`,
        role: `Role ${i}`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.`,
        facebook: "",
        google: "",
        instagram: "",
        twitter: "",
      });
    }
    setStaffs(staffs);
  }, []);
  return (
    <Section>
      <Section.Title title="Our Master Chef" subtitle="Chef" />
      <div className="flex w-full flex-wrap flex-row justify-around gap-3">
        {staffs.map((staff) => (
          <StaffCard
            title={staff.name}
            imageUrl={"https://picsum.photos/400/400"}
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
