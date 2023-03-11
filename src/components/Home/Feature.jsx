import React from "react";
import { Card } from "./Card";

export const Feature = () => {
  const object = [
    {
      title: "UI UX Design",
      name: "Mitchal John",
      image: `${process.env.PUBLIC_URL} ./image/UIUXDesign.png`,
      price: 59,
      view: 29500,
      lecture: 36,
      rating: 4.7,
      total: 1000,
      profilePic: `${process.env.PUBLIC_URL} ./image/profile.png`,
    },
    {
      title: "Digital Marketing",
      name: "Mitchal John",
      image: `${process.env.PUBLIC_URL} ./image/DigitalMarketing.png`,
      price: 79,
      view: 29500,
      lecture: 36,
      rating: 4.7,
      total: 1000,
      profilePic: `${process.env.PUBLIC_URL} ./image/profile.png`,
    },
    {
      title: "Visual Design",
      name: "Mitchal John",
      image: `${process.env.PUBLIC_URL} ./image/VisualDesign.png`,
      price: 99,
      view: 29500,
      lecture: 36,
      rating: 4.7,
      total: 1000,
      profilePic: `${process.env.PUBLIC_URL} ./image/profile.png`,
    },
  ];

  const title = "Our Features";
  const btn = "View All";
  return (
    <div className="flex items-center justify-center flex-col lg:px-[135px] px-10 py-10 bg-[#F1F7F9]">
      <div className="text-4xl lg:text-[40px] font-semibold pb-10">{title}</div>
      <div className="flex xl:grid xl:grid-cols-3 gap-5 w-full overflow-x-scroll scrollbar-hide">
        {object.map((item, index) => (
          <div key={index}>
            <Card object={item} />
          </div>
        ))}
      </div>
      <button className="cursor-pointer bgPrimary px-4 py-2 text-white font-semibold rounded-3xl my-10">
        {btn}
      </button>
    </div>
  );
};
