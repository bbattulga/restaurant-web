import React from "react";

interface CustomerCardProps {
  imageUrl: string;
  title: string;
  description: string;
  subtitle?: string;
}
const CustomerCard: React.FC<CustomerCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-center text-center gap-y-5">
      <img
        className="w-36 h-36 rounded-full self-center"
        src={props.imageUrl}
      />
      <p className="w-64 text-center">{props.description}</p>
      <h4 className="text-2xl font-bold mt-6">{props.title}</h4>
      <p className="text-xs font-bold text-gray-500">
        {props.subtitle || "CUSTOMER"}
      </p>
    </div>
  );
};

export default CustomerCard;
