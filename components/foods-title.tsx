import React from "react";

interface FoodsTitleProps {
  children: string;
}
export default function FoodsTitle(props: FoodsTitleProps) {
  return <p>{props.children}</p>;
}
