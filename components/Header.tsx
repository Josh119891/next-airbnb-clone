import Image from "next/image";
import React from "react";
import {
  GlobeAltIcon,
  MagnifyingGlassCircleIcon as SearchIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto obj">
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
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder="Start your search"
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
    </header>
  );
};
export default Header;
