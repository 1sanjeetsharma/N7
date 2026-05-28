import React, { useRef } from "react";
import DemoButton from "./DemoButton";
import ContactButton from "./ContactButton";
import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";
import Company6 from "../assets/company6.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  const imageGroupRef = useRef(null);

const handleMouseMove = (e) => {
  const rect = imageGroupRef.current.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  imageGroupRef.current.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
};

const handleMouseLeave = () => {
  imageGroupRef.current.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
  `;
};
  return (
    <div  onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} className="w-full h-screen bg-[#000D12] flex">
      <div className="w-1/2 ml-20 h-full flex flex-col justify-center z-10">
        <h1 className="text-7xl font-bold text-white">
          The new foundation of modern banking
        </h1>
        <p className="text-white mt-4 z-10">
          We drive innovation and growth, provide seamless <br />
          customer experience and operational excellence
        </p>
        <div className="mt-14 flex gap-4">
          <DemoButton />
          <ContactButton />
        </div>
        <div className="mt-32">
          <p className="text-white text-sm">
            Trusted by:
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img src={Company1} alt="Company 1" className="h-8" />
            <img src={Company2} alt="Company 2" className="h-8" />
            <img src={Company3} alt="Company 3" className="h-8" />
            <img src={Company4} alt="Company 4" className="h-8" />
            <img src={Company5} alt="Company 5" className="h-8" />
            <img src={Company6} alt="Company 6" className="h-8" />
          </div>
        </div>
      </div>

      <div
        ref={imageGroupRef}
       
        className="relative w-1/2 h-full flex items-center justify-center
      "
      >
        <img
          src={hero1}
          alt="Hero Image"
          className=" h-[300px] rounded-4xl object-cover z-10 "
        />
        <img
          src={hero2}
          alt="Hero Image"
          className="h-60 absolute rounded-4xl object-cover absolute left-100 top-74 z-20"
        />
        <img
          src={hero3}
          alt="Hero Image"
          className="h-28 absolute object-cover border-6 border-white/40  rounded-3xl  absolute left-10 top-110 top-40 z-30"
        />
        <div
          className="
      absolute inset-0
      bg-radial-[circle_300px_at_center]
      from-[#00B4FD]/60
      via-[#003ACE]/40
      to-transparent
      blur-3xl
      -z-10
    "
        />
      </div>
    </div>
  );
};

export default Hero;
