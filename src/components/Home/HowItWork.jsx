import React from "react";

export const HowItWork = () => {
  const title = "How It Work";

  const content = [
    {
      title: "Set Your Plan",
      src: `${process.env.PUBLIC_URL} ./image/icon/Map.png`,
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      bg: "#27424D",
      iconBg: "#06AED5",
    },
    {
      title: "Find Your Course",
      src: `${process.env.PUBLIC_URL} ./image/icon/Search.png`,
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      bg: "#1F968E",
      iconBg: "#FF5000",
    },
    {
      title: "Book Your Seat",
      src: `${process.env.PUBLIC_URL} ./image/icon/Book.png`,
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      bg: "#9B7200",
      iconBg: "#B900D7",
    },
    {
      title: "Get Certificate",
      src: `${process.env.PUBLIC_URL} ./image/icon/Medal.png`,
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      bg: "#00C508",
      iconBg: "#A93D33",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col lg:px-[135px] px-10 py-10">
      <div className="text-4xl lg:text-[40px] font-semibold pb-10">{title}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {content.map((item, index) => (
          <div
            className="p-7 flex flex-col gap-3 items-center justify-center text-center"
            style={{ backgroundColor: item.bg }}
            key={index}
          >
            <div
              className="rounded-full border-2 border-white p-5"
              style={{ backgroundColor: item.iconBg }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="object-cover w-[20px] h-[20px]"
              />
            </div>
            <div className="text-white font-semibold text-xl">{item.title}</div>
            <div className="text-white text-md">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
