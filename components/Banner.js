import Image from "next/image";
import HeroImg from "../public/images/hero.jpg";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[500px]">
      <Image src={HeroImg} fill style={{ objectFit: "cover" }} />

      <div className="absolute text-white font-semibold top-1/2 w-full text-center">
        <p className="text-xl mb-3">Not sure where to go? We will help you.</p>
        <button className="text-purple-500 bg-white px-5 py-3 shadow-md hover:shadow-2xl active:scale-110 transition duration-400 rounded-full">
          Show me where to go
        </button>
      </div>
    </div>
  );
}

export default Banner;
