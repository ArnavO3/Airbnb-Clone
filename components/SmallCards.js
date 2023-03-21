import Image from "next/image";
import React from "react";

function SmallCards(props) {
  return (
    <div className="flex items-center rounded-xl border-2 border-[#fe84887b] w-50 p-4 shadow-md shadow-[#fd585d] cursor-pointer hover:shadow-xl hover:scale-110 transition duration-700">
      <div className="relative h-20 w-20">
        <Image className="rounded-full" src={props.img} fill />
      </div>
      <div className="ml-5">
        <h2 className="text-xl font-medium pb-2">{props.location}</h2>
        <h3 className="text-sm text-gray-400">{props.destination}</h3>
      </div>
    </div>
  );
}

export default SmallCards;
