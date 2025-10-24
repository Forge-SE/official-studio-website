"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Cohort2Banner } from "./Cohort2-Banner";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="mt-14">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className=" sub text-xl ds font-medium">
          <span className=" ">Forge Studios</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-base text-black ds">
          <Link href="/about" className="hover:text-(--black-color) transition">
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-(--black-color) transition"
          >
            Services
          </Link>
          <Link
            href="/fellowship"
            className="hover:text-(--black-color) transition"
          >
            Fellowship
          </Link>
          <Link
            href="/contact"
            className="hover:text-(--black-color) transition"
          >
            Contact
          </Link>
        </div>

        <button className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
          <span>Let&apos;s build together</span>{" "}
          <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
            <span className="text-xs">↪</span>
          </kbd>
        </button>
      </div>
    </nav>
  );
};
