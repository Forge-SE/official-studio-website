"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="mt-14">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className=" flex justify-center items-center gap-2">
          <Image
            src="/Logo-Blue.svg"
            alt="Forge Studios Logo"
            width={35}
            height={40}
          />
          <span className=" ds text-xl ds font-medium ">Forge Studios</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-base text-black ds">
          {/*<Link href="/about" className="hover:text-(--black-color) transition">
            About
          </Link>*/}
          <Link
            href="/#our-services"
            className="hover:text-(--black-color) transition"
          >
            Services
          </Link>
          <Link
            href="/#why-choose-us"
            className="hover:text-(--black-color) transition"
          >
            Why Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-(--black-color) transition"
          >
            Careers
          </Link>
          <Link
            href="/eit-fellowship/apply"
            className="hover:text-(--black-color) transition"
          >
            EIT Fellowship
          </Link>
        </div>

        <button className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
          <Link href="https://calendly.com/engineering-forgestudios/30min">
            <span>Meet an engineer</span>{" "}
            <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
              <span className="text-xs">↪</span>
            </kbd>
          </Link>
        </button>
      </div>
    </nav>
  );
};
