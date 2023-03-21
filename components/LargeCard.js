import Image from "next/image";
import React from "react";

function LargeCard(props) {
  return (
    <div className="w-full items-center p-4">
      <div className="relative h-80 w-full">
        <Image className="rounded-xl" src={props.img} fill />
      </div>
      <div className="absolute text-white top-5 left-12">
        <h2 className="text-[30px] font-medium w-2/3 pt-5">{props.title}</h2>
        <p className="text-lg pt-3 ">{props.description}</p>
        <button className="mt-3 rounded-xl font-semibold bg-black p-2 active:scale-110 transition duration-400">
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
