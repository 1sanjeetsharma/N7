import React from "react";
import DemoButton from "./DemoButton";
import LearnMoreButton from "./LearnMoreButton";
import AdvantageSection from "./AdvantageSection";

const BankingSection = () => {
  return (
    <div className="bg-[#E9F4F9] text-black ">
      <img src="/WhiteSection.svg" alt="" className="w-full h-full " />
      <div className="w-full h-full  top-0 left-0 flex ">
        <div className="w-1/2  h-full flex flex-col mt-20 z-10">
          <h1 className="text-5xl ml-20 mt-24 font-bold">
            A complete cloud-based <br />
            core banking.
          </h1>
          <p className="ml-20 mt-4">
            Faster time to market with our cloud-based <br /> core banking
            services
          </p>

          <div className="mt-14 text-black flex flex-col ml-20 gap-4">
            <DemoButton />
            <LearnMoreButton />
          </div>
        </div>
        <div className="w-1/2 relative h-full flex flex-col mt-20 z-10 ">
          <img src="white1.svg" alt="" className="w-full h-full " />
          <img src="/white2.svg" alt="" className="w-full h-full " />
          <img src="/white3.svg" alt="" className="w-full h-full " />
          {/* <div className="absolute  -bottom-190 -left-165  bg-linear-to-r from-[#031E2A] to-[#000D12] p-0.5 rounded-2xl w-300 h-99">
            <p className="absolute text-[572px] right-0 w-full leading-none inset-0 gradient-stroke">
              CB7
            </p>

            <p className="relative text-[572px] leading-none text-[#000D12]">
              CB7
            </p>
          </div> */}
        </div>
      </div>
          <AdvantageSection  text="N7" />
    </div>
  );
};

export default BankingSection;
