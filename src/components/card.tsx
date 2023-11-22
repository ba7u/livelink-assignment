import React from "react";
import { MockUserInterface } from "../assets/mocks/mock-data";

interface CardProps extends Omit<MockUserInterface, "description"> {
  description?: MockUserInterface["description"];
  containerClassName?: string;
}

export const Card = ({
  id,
  avatar,
  name,
  subtext,
  description,
  containerClassName = "",
}: CardProps) => (
  <div
    data-userid={id}
    className={`rounded-lg bg-white border-2 border-black ${containerClassName}`}
  >
    <div className="flex gap-5 p-4.5 pointer-events-none">
      <img
        className="w-avatar h-avatar rounded-full border border-taupe-gray/50"
        src={avatar}
        alt={name}
      />
      <div className="flex flex-col gap-y-3.5 text-black">
        <span className="leading-none font-bold pt-1">{name}</span>
        <p className="leading-none">{subtext}</p>
        {description && <p className="pr-3 mt-5">{description}</p>}
      </div>
    </div>
  </div>
);
