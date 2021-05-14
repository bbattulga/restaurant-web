import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  Dots,
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import classnames from "classnames";
const Carousel = dynamic(
  () => {
    return import("@brainhubeu/react-carousel");
  },
  { ssr: false }
);
import "@brainhubeu/react-carousel/lib/style.css";

import Section from "../components/section";
import CustomerCard from "../components/customer-card";

const PAGINATION = 3;
const CustomerSection: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [dot, setDot] = useState(0);
  useEffect(() => {
    let customers = [];
    for (let i = 0; i < 10; i++) {
      customers.push({
        id: `${i}`,
        name: `Customer ${i}`,
        lorem:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores.",
        imageUrl: "https://picsum.photos/400/400",
      });
    }
    setCustomers(customers);
  }, []);

  return (
    <Section id={"customer"} className="bg-gray-50">
      <Section.Title title="Happy Customer" subtitle="Testinomy" />
      <Carousel
        value={dot}
        onChange={(v) => setDot(v)}
        plugins={[
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          768: {
            plugins: [
              "arrows",
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
      >
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            title={customer.name}
            imageUrl={customer.imageUrl}
            description={customer.lorem}
          />
        ))}
      </Carousel>
      <div className="mt-16">
        <Dots
          value={dot}
          onChange={(v) => setDot(v)}
          number={customers.length}
        />
      </div>
    </Section>
  );
};

export default CustomerSection;
