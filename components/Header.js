import Image from "next/image";
import AirBnbLogo from "../public/images/Airbnb_Logo_Bélo.svg.png";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserAddIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 max-[420px]:text-[10px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)] p-5 md:px-10 bg-black">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src={AirBnbLogo}
          alt="logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="bg-transparent outline-none flex-grow text-black pl-5"
        />
        <SearchIcon className="lg:inline-flex h-8 bg-[#fd585d] rounded-full p-1 md:mx-2 cursor-pointer hidden" />
      </div>

      <div className="flex items-center justify-end gap-x-2 text-white">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-7 cursor-pointer" />

        <div className="flex items-center gap-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-7 cursor-pointer" />
          <UserAddIcon className="h-7 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
