import React from "react";
import Image from "next/image";
import { ICardData } from "../type";

type MediumCardProps = ICardData & {};

const MediumCard: React.FC<MediumCardProps> = ({ title, img }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt={title} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};
export default MediumCard;
