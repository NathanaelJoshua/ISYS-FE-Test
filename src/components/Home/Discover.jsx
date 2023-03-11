import React from "react";

export const Discover = () => {
  const image1 = `${process.env.PUBLIC_URL} ./image/vector2.png`;
  const title = "Our Process is Build Around Quality & Make it Perfect";
  const content = [
    "Anenim Njilam tempor sapier gravida done porta and badrdit ipsum enim justo integer actor imeer congue magna and purus pretlium insuss igula nurtrum luctue unrice.",
    "Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum enim justo integer actor imeer congue magna and purus pretlium insuss igula nurtrum luctue unrice.",
  ];
  const btn = "Discover More";
  return (
    <div className="py-20 flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/2">
        <img className="w-[650px]" src={image1} alt={image1} />
      </div>
      <div className="lg:pr-[135px] w-full lg:w-1/2 px-10 flex items-center">
        <div className="">
          <div className="text-4xl lg:text-[40px] font-semibold pb-10">
            {title}
          </div>
          <div className="pb-10">
            {content.map((item, index) => (
              <div>
                <p>{item}</p>
                <br />
              </div>
            ))}
          </div>
          <button className="cursor-pointer bgPrimary px-4 py-2 text-white font-semibold rounded-3xl">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
