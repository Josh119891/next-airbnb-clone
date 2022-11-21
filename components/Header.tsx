import Image from "next/image";
import React, { useState } from "react";
import {
  GlobeAltIcon,
  MagnifyingGlassCircleIcon as SearchIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useRouter } from "next/router";
import { RANGE_KEY } from "../constants";

type HeaderProps = {
  placeholder?: string;
};

const Header: React.FC<HeaderProps> = ({ placeholder }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);

  const selectionRange = {
    startDate,
    endDate,
    key: RANGE_KEY,
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    const range = ranges[RANGE_KEY];
    if (range.startDate && range.endDate) {
      setStartDate(range.startDate);
      setEndDate(range.endDate);
    }
  };

  const resetInput = () => setSearchInput("");

  const onSearch = () =>
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto obj"
        onClick={() => router.push("/")}
      >
        <Image
          className="object-contain object-left"
          src="/logo.png"
          alt=""
          fill={true}
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-red-400 rounded-full  cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-5" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex items-center">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={onSearch} className="flex-grow  text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
