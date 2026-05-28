import React from "react";
import ContactButton from "./ContactButton";
import DemoButton from "./DemoButton";

const AdvantageSection = ({text}) => {
  return (
    <div className="w-full h-[682px] relative overflow-hidden pt-12  flex items-center">
      <div className="w-1/2  h-full flex flex-col justify-center z-10">
        <h1 className="text-5xl ml-20 font-bold text-white ">
          Take the full advantage of
          <br /> going paper-less now.
        </h1>
        <p className="text-white ml-20 mt-8">
          CB7 helps your financial institution improve the client experience,
          <br /> automate and optimize procedures, simplify banking operations
        </p>
      </div>
      <div className="relative w-1/2 h-full flex flex-col justify-center items-end">
        <div className=" w-full justify-center  flex gap-4 z-10">
          <ContactButton />
          <DemoButton />
        </div>
        
      </div>
      <div className="absolute bg-linear-to-r ml-10 w-9/10  from-[#031E2A] overflow-hidden to-[#000D12] p-0.5 rounded-2xl  h-99">
        <div className="relative top-0 right-0  overflow-hidden flex justify-self-end ">

          <p className="absolute text-[500px] right-0 w-full leading-none  inset-0 gradient-stroke">
            {text}
          </p>

          <p className="relative text-[500px] leading-none text-[#000D12]">
            {text}
          </p>
        </div>
        </div>
    </div>
  );
};

export default AdvantageSection;
