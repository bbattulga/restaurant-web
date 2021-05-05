import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";

import Section from "../components/section";
import CustomerCard from "../components/customer-card";

const PAGINATION = 3;
const CustomerSection: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [paginationIndex, setPaginationIndex] = useState(0);
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

  const visibleCustomers = useMemo(() => {
    return customers.slice(
      Math.max(paginationIndex, 0),
      Math.min(paginationIndex + PAGINATION, customers.length)
    );
  }, [customers, paginationIndex]);

  const paginationDots = useMemo<number[]>(() => {
    let dots = [];
    let lim = customers.length - PAGINATION + 1;
    for (let i = 0; i < lim; i++) {
      dots.push(i);
    }
    return dots;
  }, [customers]);
  const handlePagination = (idx: number) => {
    setPaginationIndex(idx);
  };

  return (
    <Section className="bg-gray-50">
      <Section.Title title="Happy Customer" subtitle="Testinomy" />
      <div className="flex w-screen p-10 flex-nowrap justify-center overflow-x-auto gap-x-20">
        {visibleCustomers.map((customer) => (
          <CustomerCard
            key={customer.id}
            title={customer.name}
            imageUrl={customer.imageUrl}
            description={customer.lorem}
          />
        ))}
      </div>
      <div className="flex flex-row gap-3">
        {paginationDots.map((p, i) => (
          <i
            className={classnames("fas fa-circle text-gray-400 text-xs", {
              "text-yellow-400": i == paginationIndex,
            })}
            onClick={() => handlePagination(i)}
          />
        ))}
      </div>
    </Section>
  );
};

export default CustomerSection;
