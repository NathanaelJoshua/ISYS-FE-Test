import React from "react";
import { FaEye, FaRegPlayCircle, FaStar } from "react-icons/fa";

export const Card = (props) => {
  const rating = props.object.rating;
  const total = props.object.total / 1000;
  const title = props.object.title;
  const profilePic = props.object.profilePic;
  const image = props.object.image;
  const name = props.object.name;
  const view = props.object.view;
  const price = "$ " + props.object.price;
  const lecture = props.object.lecture;
  return (
    <div className="bg-white rounded-xl p-3 lg:w-auto w-[300px]">
      <div className="relative">
        <img src={image} alt={title} className="object-cover w-full" />
        <div className="absolute top-3 left-3">
          <div className="bg-white rounded-md p-1 items-center flex gap-1">
            <div className="text-yellow-300">
              <FaStar />
            </div>
            <div>{rating}</div>
            <div className="text opacity-60">({total}k+)</div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold text-lg">{title}</div>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div>
              <img src={profilePic} alt={title} />
            </div>
            <div className="text-sm text-[#4F4F4F]">{name}</div>
          </div>
          <div className="bg-black rounded-md font-bold text-white px-2 py-1">
            {price}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <div>
              <FaEye />
            </div>
            <div>{view}</div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div>
              <FaRegPlayCircle />
            </div>
            <div className="flex gap-1">
              {lecture} {lecture > 1 ? <p>Lectures</p> : <p>Lecture</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
