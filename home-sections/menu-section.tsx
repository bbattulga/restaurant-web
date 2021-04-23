import React, { useState, useEffect } from "react";

import SectionTitle from "../components/section-title";
import Section from "../components/section";
import FoodCard from "../components/food-card";

export default function MenuSection() {
  const [foods, setFoods] = useState<IFood[]>([]);
  useEffect(() => {
    let foods: IFood[] = [];
    for (let i = 0; i < 10; i++) {
      foods.push({
        title: `title ${i}`,
        subtitle: `subtitle ${i}`,
        price: i * 1000,
        image: "https://picsum.photos/100/100",
      });
      setFoods(foods);
    }
  }, []);
  return (
    <Section>
      <SectionTitle>Our Menu</SectionTitle>
      {foods.map((food, i) => (
        <FoodCard key={i} food={food} />
      ))}
    </Section>
  );
}
