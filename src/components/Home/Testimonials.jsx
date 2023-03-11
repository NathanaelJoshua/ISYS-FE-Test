import React from "react";
import { TestiCard } from "./TestiCard";

export const Testimonials = () => {
  const title = "What Our Students Say";
  const btn = "Discover more";

  const testiObject = [
    {
      name: "Jennifer Williams",
      position: "Corporate Founder",
      rate: 5,
      text: "I enjoy working in he poster my wall editor because the site is user friendly and makes designing simple.",
      pic: `${process.env.PUBLIC_URL} ./image/profilePic.png`,
    },
    {
      name: "Jennifer Williams",
      position: "Corporate Founder",
      rate: 5,
      text: "I enjoy working in he poster my wall editor because the site is user friendly and makes designing simple.",
      pic: `${process.env.PUBLIC_URL} ./image/profilePic.png`,
    },
    {
      name: "Jennifer Williams",
      position: "Corporate Founder",
      rate: 5,
      text: "I enjoy working in he poster my wall editor because the site is user friendly and makes designing simple.",
      pic: `${process.env.PUBLIC_URL} ./image/profilePic.png`,
    },
  ];
  return (
    <div className="bg-[#F1F7F9] lg:px-[135px] px-10 pt-20 pb-40">
      <div className="flex md:justify-between flex-col md:flex-row">
        <div className="text-4xl lg:text-[40px] font-semibold pb-5">
          {title}
        </div>
        <div>
          <button className="cursor-pointer bgPrimary px-4 py-2 text-white font-semibold rounded-3xl">
            {btn}
          </button>
        </div>
      </div>
      <div className="py-5 flex  gap-5 w-full overflow-x-scroll scrollbar-hide">
        {testiObject.map((item, index) => (
          <TestiCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
