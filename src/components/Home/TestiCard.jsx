import React from "react";
import { FaStar } from "react-icons/fa";

export const TestiCard = (props) => {
  const name = props.item.name;
  const text = props.item.text;
  const rate = props.item.rate;
  const pic = props.item.pic;
  const position = props.item.position;
  const imageVector = `${process.env.PUBLIC_URL} ./image/VectorTesti.png`;
  const imageDecor = `${process.env.PUBLIC_URL} ./image/decor.png`;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<FaStar className="text-yellow-300" />);
    } else {
      stars.push(<FaStar className="text-gray-500" />);
    }
  }
  return (
    <div className="p-5 bg-white min-w-[374px] h-[374px] flex flex-col justify-between relative">
      <div>
        <img src={imageDecor} alt="imageDecor" />
      </div>
      <div className="text-start w-3/4 font-light">{text}</div>
      <div className="flex justify-end px-5 items-center gap-5">
        <div className="flex items-end justify-end flex-col py-5">
          <div className="font-semibold text-xl">{name}</div>
          <div className="text-sm">{position}</div>
          <div className="flex gap-2 py-2">{stars}</div>
        </div>

        <div className="rounded-full w-[72px] h-[72px]">
          <img src={pic} alt={name} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <img src={imageVector} alt="imageVector" />
      </div>
      <div className="absolute top-0 right-0 rotate-180">
        <img src={imageVector} alt="imageVector" />
      </div>
    </div>
  );
};
