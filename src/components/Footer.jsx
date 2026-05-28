import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const solutions = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ];

  const companyLinks = [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ];

  return (
    <footer className="bg-[#020b10] text-white px-8 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Logo */}
          <div>
            <h1 className="text-[180px] leading-none font-bold bg-gradient-to-b from-cyan-400 to-blue-700 bg-clip-text text-transparent">
              N7
            </h1>
          </div>

          {/* Address 1 */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">London</h3>

            <p className="text-gray-400 leading-7">
              Linktia Infosystems Ltd – CB7,
              <br />
              26 Main Road Sundridge, TN14 6EP,
              <br />
              England, United Kingdom.
            </p>
          </div>

          {/* Address 2 */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Dubai</h3>

            <p className="text-gray-400 leading-7">
              Linktia Infosystems Ltd –
              <br />
              CB7, Jumeirah Business Center 5
              <br />
              Cluster W, Jumeirah Lakes Towers,
              <br />
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Address 3 */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Pune</h3>

            <p className="text-gray-400 leading-7">
              Linktia Infosystems Ltd –
              <br />
              CB7, Nirmal, Anand Nagar,
              <br />
              Suncity Road, Pune,
              <br />
              Maharashtra, 411041, India
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {/* Solutions */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Solutions</h3>

            <div className="space-y-4">
               {solutions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 transition">
                    {item}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
                </div>
              ))} 
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              N7 Banking
            </h3>

            <div className="space-y-4">
              {companyLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 transition">
                    {item}
                  </span>

                  <ArrowRightIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
                </div>
              ))} 
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Socials
            </h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-cyan-400 transition">
                  
                  <span>LinkedIn</span>
                </div>

                <ArrowRightIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
              </div>

              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-cyan-400 transition">
                
                  <span>X</span>
                </div>

                <ArrowRightIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <p className="text-gray-500 text-sm leading-7">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
