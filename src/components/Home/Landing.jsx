import React from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
export const Landing = () => {
  const titleHighlight = "Class Courses";
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ";
  const image1 = `${process.env.PUBLIC_URL} ./image/vector1.png`;
  const abstract = `${process.env.PUBLIC_URL} ./image/vector1bg.png`;

  const imageLogo = [
    `${process.env.PUBLIC_URL} ./image/Google.png`,
    `${process.env.PUBLIC_URL} ./image/corsera.png`,
    `${process.env.PUBLIC_URL} ./image/facebook.png`,
    `${process.env.PUBLIC_URL} ./image/udemy.png`,
  ];

  const textObject = [
    "Experienced mentor",
    "Quality video",
    "Affordable prices",
  ];
  return (
    <div className="flex items-center justify-center flex-col-reverse md:flex-row mb-5">
      <div className="w-full xl:w-1/2">
        <div className="lg:pl-[135px] px-10 text-sm lg:text-md py-5">
          {/* title */}
          <div className="xl:text-[64px] text-4xl lg:text-[40px] font-semibold flex flex-wrap whitespace-nowrap md:gap-3 leading-[1.1]">
            <p>
              Get Skills <br className="hidden lg:flex" /> From Our Top
            </p>
            <p className="colorPrimary">{titleHighlight}</p>
          </div>
          <div className="mt-3 lg:mt-5 ">{text}</div>
          {/* Search */}
          <div className="rounded-full p-1 mt-10 flex border-2 border-gray-300 items-center justify-between">
            <div className="px-3 flex items-center gap-3 w-full">
              <FaSearch />
              <input
                className=" w-full outline-none"
                placeholder="Search your favorite courses"
              />
            </div>
            <div className="">
              <button className="bgPrimary py-2 px-5 rounded-full text-white font-semibold">
                Search
              </button>
            </div>
          </div>

          <div className="mt-10">
            {textObject.map((item, index) => (
              <div className="my-5 " key={index}>
                <div className="flex gap-4">
                  <p className="bgSecondary p-2 rounded-full text-white text-xs">
                    <FaCheck />
                  </p>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-10 px-10 xl:w-1/2 items-start relative">
        <div className="">
          <img src={image1} alt={"LandingImage"} className="" />
          <div className="flex gap-5 items-center w-full justify-between lg:px-[135px] px-10">
            {imageLogo.map((item, index) => (
              <div key={index} className="flex">
                <img src={item} alt={item} className="max-w-[100px]" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10">
          <img src={abstract} alt={"LandingImage"} className="object-cover" />
        </div>
      </div>
    </div>
  );
};
