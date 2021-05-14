import React from "react";

interface FoodCardProps {
  food: IFood;
}
export default function FoodCard(props: FoodCardProps) {
  return (
    <div className="relative group transition duration-300 hover:bg-yellow-400 grid grid-cols-12 gap-3 w-full justify-around cursor-pointer border-2 p-6 mb-3 rounded-md">
      <div className="col-span-3 sm:col-span-4">
        <img
          className="rounded-full w-24 h-24"
          src="/images/food1.jpeg"
          alt=""
        />
      </div>
      <div className="col-span-7 sm:col-span-6">
        <h4 className="text-2xl flex-1 mb-5">{props.food.title}</h4>
        <p className="text-xs">{props.food.subtitle}</p>
      </div>
      <div className="col-span-2  group-hover:border-white">
        <p className="font-bold text-center text-xl border-b-2 border-yellow-400 group-hover:border-white group-hover:text-white">
          {props.food.price}
        </p>
      </div>
    </div>
  );
}
