import React from "react";
import { FaCheck } from "react-icons/fa";

export const GetStarted = () => {
  const image1 = `${process.env.PUBLIC_URL} ./image/vector3.png`;
  const title = "Access to Everything For Everyone";
  const content =
    "Online learning program designed to prepare you for a  career. Courses include recorded video lectures, auto graded";
  const btn = "Get Started";

  const objectText = ["World-Class", "Affordable", "Flexible", "Job-relevant"];
  return (
    <div className="py-20 flex flex-col lg:flex-row ">
      <div className="lg:pl-[135px] w-full lg:w-1/2 px-10 flex items-center">
        <div className="lg:w-3/4">
          <div className="text-4xl lg:text-[40px] font-semibold pb-5">
            {title}
          </div>
          <div className="pb-10">{content}</div>

          <div className="grid grid-cols-2 pb-10">
            {objectText.map((item, index) => (
              <div className="flex gap-2 my-2" key={index}>
                <p className="bgSecondary p-2 rounded-full text-white text-xs h-max">
                  <FaCheck />
                </p>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <button className="cursor-pointer bgSecondary px-4 py-2 text-white font-semibold rounded-3xl">
            {btn}
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end">
        <img className="w-[650px]" src={image1} alt={image1} />
      </div>
    </div>
  );
};
