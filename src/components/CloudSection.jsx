import React from "react";
import DemoButton from "./DemoButton";
import LearnMoreButton from "./LearnMoreButton";
import Features from "./Features";
import ContactButton from "./ContactButton";
import AdvantageSection from "./AdvantageSection";
const CloudSection = () => {
  const features = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];
  return (
    <div className="w-full relative overflow-hidden pt-12 bg-[#000D12]  ">
      <div className="flex">
      <div className="absolute inline-block top-0 -left-36">
        <p className="absolute text-[572px] leading-none inset-0 gradient-stroke">
          CB7
        </p>

        <p className="relative text-[572px] leading-none text-[#000D12]">CB7</p>
      </div>
      <div className="w-1/2  h-full flex flex-col mt-20 z-10">
        <h1 className="text-4xl ml-20 font-bold text-white">
          A complete cloud-based <br />
          core banking.
        </h1>
        <p className="text-white ml-20 mt-4">
          Faster time to market with our cloud-based <br /> core banking
          services
        </p>

        <div className="mt-14 flex flex-col ml-20 gap-4">
          <DemoButton />
          <LearnMoreButton />
        </div>

        <div className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] p-0.5 rounded-t-2xl mt-100 -ml-20 w-160 overflow-hidden">
          <div className="bg-[#000D12] rounded-t-2xl">
            <img
              src="/cloud1.png"
              alt="Cloud Image"
              className="w-full p-1 my-2.5 mx-3.5 h-120 mx-auto  inline-block  object-contain"
              />
          </div>
        </div>
       
      </div>

      <div className="relative w-1/2 h-full flex flex-col items-end">
        <div className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] p-0.5 rounded-t-2xl -mr-20">
          <div className="bg-[#000D12] rounded-t-2xl">
            <img
              src="/cloud1.png"
              alt="Cloud Image"
              className="w-full p-1 my-2.5 mx-3.5 h-120  inline-block h-auto object-contain"
              />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] p-0.5 rounded-b-2xl w-150 -mr-20 -mt-1">
          <div className="bg-[#000D12] h-8 w-150  rounded-b-2xl"></div>
        </div>
        <div className="mt-100">
          <h1 className="text-2xl mr-44 font-bold  text-white">
            Run a more efficient, flexible,and digitally <br />
            connected corebanking system
          </h1>
          <p className="text-white text-base mt-4">What you will get:</p>
          <div className="grid grid-cols-2 gap-4 mt-4 mr-10">
            {features.map((feature, index) => (
              <Features key={index} discription={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
       <AdvantageSection text="CB7" />
            </div>
  );
};

export default CloudSection;
