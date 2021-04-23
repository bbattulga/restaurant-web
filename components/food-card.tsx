import React from "react";

interface FoodCardProps {
  food: IFood;
}
export default function FoodCard(props: FoodCardProps) {
  return (
    <div className="p-5 flex flex-row">
      <img src="https://picsum.photos/100/100" alt="" />
      <div className="flex flex-col">
        <h4>{props.food.title}</h4>
        <p>{props.food.subtitle}</p>
      </div>
    </div>
  );
}
