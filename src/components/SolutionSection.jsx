import React from "react";
import DemoButton from "./DemoButton";

import LearnMoreCard from "./LearnMoreCard";

const SolutionSection = () => {
  const Solutions = [
    {
      icon: "/solution1.svg",
      title: "Core Banking CB7",
      description:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },

    {
      icon: "/solution2.svg",
      title: "Digital Banking N7",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },

    {
      icon: "/solution3.svg",
      title: "Open Banking",
      description:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },

    {
      icon: "/solution4.svg",
      badge: "NBFC",
      title: "Loan Origination System",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },

    {
      icon: "/solution5.svg",
      badge: "NBFC",
      title: "Loan Management System",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
  ];
  return (
    <div className="w-full pt-12 bg-[#000D12] flex ">
      <div className="w-1/2 ml-20 h-full flex flex-col mt-20">
        <h1 className="text-4xl font-bold text-white">
          All of our solutions are <br /> tailor-made to your needs
        </h1>

        <div className="mt-14 flex gap-4">
          <DemoButton />
        </div>
      </div>

      <div className="relative w-1/2 h-full grid grid-cols-2 gap-4 p-8">
        {Solutions.map((solution, index) => (
          <LearnMoreCard key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
