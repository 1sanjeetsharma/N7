import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const [isOpen, setIsOpen] = useState("none");
  const handleDropdown = (value) => {
    setIsOpen(value);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen("none");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center fixed z-50">
      <div className="w-[716px] h-[47px]  font-archivo absolute top-[31px] mx-auto rounded-[12px] bg-[#2F2F2FB2]  backdrop-blur-[15px] flex items-center justify-between text-[20px] font-bold text-white">
        <h2 className="text-2xl/[120%] m-2.5 cursor-pointer">N7</h2>
        <div className="flex items-center gap-8 mr-4 justify-between">
          <div className=" flex items-center " ref={dropdownRef}>
            <div className="relative group">
              <button
                className="  rounded-lg cursor-pointer p-2 text-white text-center flex justify-center items-center text-sm  font-thin  hover:bg-[#2F2F2FB2]/80"
                onClick={() =>
                  handleDropdown(isOpen === "solutions" ? "none" : "solutions")
                }
              >
                SOLUTIONS
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {isOpen === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#2F2F2FB2] backdrop-blur-[15px] rounded-md shadow-lg">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                      Solution 1
                    </li>
                    <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                      Solution 2
                    </li>
                    <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                      Solution 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="  cursor-pointer p-2 rounded-lg text-white text-center flex justify-center items-center text-sm  font-thin  hover:bg-[#2F2F2FB2]/80"
                onClick={() =>
                  handleDropdown(isOpen === "resources" ? "none" : "resources")
                }
              >
                RESOURCES
                <ChevronDownIcon className="w-5 h-5 ml-1" />
                {isOpen === "resources" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#2F2F2FB2] backdrop-blur-[15px] rounded-md shadow-lg">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                        Resource 1
                      </li>
                      <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                        Resource 2
                      </li>
                      <li className="px-4 py-2 hover:bg-[#2F2F2FB2]/80">
                        Resource 3
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </div>
            <button className=" cursor-pointer p-2 rounded-lg text-white text-center flex justify-center items-center text-sm  font-thin  hover:bg-[#2F2F2FB2]/80">
              ABOUT US
            </button>
          </div>
          <div className="">
            <button className="border-1 cursor-pointer h-[26px] w-[161px] text-white text-center flex justify-center items-center text-sm  font-thin py-1.5 rounded-[6px] hover:bg-[#2F2F2FB2]/80">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
