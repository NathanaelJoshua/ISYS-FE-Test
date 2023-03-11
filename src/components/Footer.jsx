import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const AppName = "Edu.dot";
  const content = "@2023  Learning All Rights Reserved";
  const social = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaInstagram />, name: "Instagram" },
  ];
  return (
    <div className="bg-[#27424D] lg:px-[135px] px-10 py-5 flex justify-between items-center">
      <div className="font-bold text-white text-xl">
        {AppName}
        <div className="text-white font-normal text-sm flex md:hidden">
          {content}
        </div>
      </div>

      <div className="text-white font-normal text-sm hidden md:flex">
        {content}
      </div>

      <div className="flex gap-2">
        {social.map((item, index) => (
          <div
            key={index}
            className="text-white rounded-full p-2 border-2 border-white text-sm"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
