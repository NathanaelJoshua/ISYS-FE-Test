import React from "react";

export const Stats = () => {
  const object = [
    { number: 1400, text: "Students" },
    { number: 200, text: "Courses" },
    { number: 150, text: "Instructor" },
  ];
  return (
    <div className="bg-[#27424D] lg:px-[135px] px-10 py-5 text-white flex justify-evenly">
      {object.map((item, index) => (
        <div key={index}>
          <div className="font-semibold text-2xl md:text-4xl xl:text-6xl">
            {item.number}+
          </div>
          <div className="xl:text-2xl md:text-lg text-md">{item.text}</div>
        </div>
      ))}
    </div>
  );
};
