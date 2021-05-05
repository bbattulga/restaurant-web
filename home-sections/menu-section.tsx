import React, { useState, useEffect } from "react";

import Section from "../components/section";
import FoodCard from "../components/food-card";

const MenuSection: React.FC = () => {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [foodSections, setFoodSections] = useState<string[]>([
    "breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Wine Card",
    "Drinks",
  ]);
  useEffect(() => {
    let foods: IFood[] = [];
    for (let i = 0; i < 3; i++) {
      foods.push({
        title: `Grilled Beef with potatoes`,
        subtitle: `Meat, Potatoes, Rice, Tomatoe`,
        price: "25$",
        image: "https://picsum.photos/100/100",
      });
      setFoods(foods);
    }
  }, []);
  return (
    <Section>
      <Section.Title title="Our Menu" subtitle="Specialties" />
      <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
        {foodSections.map((section) => {
          return (
            <div className="">
              <h4 className="text-center font-black text-2xl mt-9 mb-5 uppercase">
                {section}
              </h4>
              <div className="w-full flex flex-col max-auto gap-5">
                {foods.map((food, i) => (
                  <FoodCard key={i} food={food} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default MenuSection;
