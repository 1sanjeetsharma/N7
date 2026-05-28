import React from "react";

const Features = ({discription}) => {
  return (
    <div className="flex gap-4 text-white">
      <img src="/tick.svg" alt=""  className="h-6 w-6"/>
      <p>{discription}</p>
    </div>
  );
};

export default Features;
