import Image from "next/image";
import React from "react";

function MediumCards(props) {
  return (
    <div className="flex flex-col rounded-3xl sm:w-1/2 min-[426px]:h-[350px] min-[375px]:h-[330px] min-[320px]:h-[300px] items-center p-4 cursor-pointer hover:shadow-[#fd585d] hover:shadow-lg hover:z-5 hover:scale-110 transition duration-700">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl sm:h-[320px] min-[426px]:h-[250px] min-[375px]:h-[250px] min-[320px]:h-[220px] " src={props.img} />
      </div>
      <div className="">
        <h2 className="text-xl font-medium pt-5">{props.location}</h2>
      </div>
    </div>
  );
}

export default MediumCards;
