import React from "react";

interface StaffCardProps {
  title: string;
  imageUrl: string;
  subtitle: string;
  description: string;
  facebook: string;
  google: string;
  twitter: string;
  instagram: string;
}
const StaffCard: React.FC<StaffCardProps> = (props) => {
  return (
    <div>
      <img className="w-64 h-64 rounded-md" src={props.imageUrl} />
      <div className="my-5">
        <h4 className="text-2xl text-black">{props.title}</h4>
        <p className="text-gray-400 mt-1">{props.subtitle}</p>
      </div>
      <p className="w-64 mb-5">{props.description}</p>
      <div className="flex flex-row gap-3 text-yellow-400">
        <a>
          <i className="fab fa-facebook-f" />
        </a>
        <a>
          <i className="fab fa-google" />
        </a>
        <a>
          <i className="fab fa-twitter" />
        </a>
        <a>
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  );
};

export default StaffCard;
