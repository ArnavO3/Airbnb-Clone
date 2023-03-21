import Image from "next/image";
import AirBnbLogo from "../public/images/Airbnb_Logo_Bélo.svg.png";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserAddIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; //main css file
import "react-date-range/dist/theme/default.css"; //theme
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 max-[420px]:text-[10px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)] p-5 md:px-10 bg-black text-white">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="bg-transparent outline-none flex-grow text-white pl-5"
        />
        <SearchIcon className="lg:inline-flex h-8 bg-[#bc70f7] text-black rounded-full p-1 md:mx-2 cursor-pointer hidden" />
      </div>

      <div className="flex items-center justify-end gap-x-2 text-white">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-7 cursor-pointer" />

        <div className="flex items-center gap-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-7 cursor-pointer" />
          <UserAddIcon className="h-7 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3 text-black">
          <DateRangePicker
            ranges={[selectRange]}
            minDate={new Date()}
            color="#bc70f7"
            rangeColors={["#bc70f7"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold text-white">
              Number of Guests:
            </h2>
            <UserIcon className="h-5 text-white" />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 text-lg outline-none text-[#bc70f7] font-semibold"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
