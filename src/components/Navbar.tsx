import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-44 relative">
      {/* mobile */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">SnapStore</div>
        </Link>
        <Menu />
      </div>
      {/* large screen */}
      <div className=" hidden md:flex justify-between items-center gap-8 h-full ">
        {/* left  */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex gap-2">
            <Image src="/logo.png" alt="" height={24} width={24}></Image>
            <div className="text-2xl tracking-wide">SnapStore</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href='/'>Homepage</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 flex align-center gap-8 justify-between xl:w-1/2">
        <SearchBar/>
        <NavIcons/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
