import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const LearnMoreButton = () => {
  return (
    <div className="group w-max mt-auto cursor-pointer">
      <a className="text-[#00B4FD]  text-sm font-medium">
        <span className="relative">
          Learn More
          <span
            className="
          absolute left-0 -bottom-1
          h-0.5 w-full
          bg-[#00B4FD]
          origin-left scale-x-30
          transition-transform duration-300
          group-hover:scale-x-100
        "
          />
        </span>
        <ArrowRightIcon className="w-4 h-4 inline ml-1" />{" "}
      </a>
    </div>
  );
};

export default LearnMoreButton;
