import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import LearnMoreButton from "./LearnMoreButton";

const LearnMoreCard = ({ title, icon, description }) => {
  return (
    <div className="w-80 flex flex-col justify-center p-6">
      <div className="w-full mb-6">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <div className="my-7">
        <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
        <p className="text-gray-300 mt-2 text-base">{description}</p>
      </div>
      <LearnMoreButton />
    </div>
  );
};

export default LearnMoreCard;
