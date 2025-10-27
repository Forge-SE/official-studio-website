"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { listVariants } from "./Animations";
import { menu } from "framer-motion/m";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className=" mt-14 md:mt-14">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className=" flex justify-center items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/Logo-Blue.svg"
              alt="Forge Studios Logo"
              width={35}
              height={40}
              className=" h-10 w-6 md:h-10 md:w-10"
            />
            <span className=" ds text-base md:text-xl ds font-medium ">
              Forge Studios
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-base text-black ds">
          {/*<Link href="/about" className="hover:text-(--black-color) transition">
            About
          </Link>*/}
          <Link
            href="/#our-services"
            className="hover:text-(--black-color) transition"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              Services
            </motion.span>
          </Link>
          <Link
            href="/#why-choose-us"
            className="hover:text-(--black-color) transition"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Why Us
            </motion.span>
          </Link>
          <Link
            href="/careers"
            className="hover:text-(--black-color) transition"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              Careers
            </motion.span>
          </Link>
          <Link
            href="/eit-fellowship/apply"
            className="hover:text-(--black-color) transition"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              EIT Fellowship
            </motion.span>
          </Link>
        </div>

        <motion.button
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          custom={5}
          viewport={{ once: true }}
          className=" hidden md:flex sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
        >
          <Link href="https://calendly.com/engineering-forgestudios/30min">
            <span>Meet an engineer</span>{" "}
            <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
              <span className="text-xs">↪</span>
            </kbd>
          </Link>
        </motion.button>

        <button
          className="flex md:hidden bg-(--primary-color)  text-white  text-xs  p-2 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300 cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <kbd className="border border-white/40 bg-white/15 px-1 text-xs md:text-sm rounded-xs">
            {!menuOpen ? " ☰" : "X"}
          </kbd>
        </button>
      </div>
      {menuOpen && (
        <div className="bg-white/95 w-full z-50 h-screen inset-0  px-4 py-7 flex flex-col justify-start items-start gap-10 ">
          <Link
            href="/#our-services"
            className="hover:text-(--black-color) transition"
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              Services
            </motion.span>
          </Link>
          <Link
            href="/#why-choose-us"
            className="hover:text-(--black-color) transition"
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Why Us
            </motion.span>
          </Link>
          <Link
            href="/careers"
            className="hover:text-(--black-color) transition"
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              Careers
            </motion.span>
          </Link>
          <Link
            href="/eit-fellowship/apply"
            className="hover:text-(--black-color) transition"
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              EIT Fellowship
            </motion.span>
          </Link>

          <motion.button
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={5}
            viewport={{ once: true }}
            className=" flex justify-center items-center md:hidden w-full sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="https://calendly.com/engineering-forgestudios/30min">
              <span>Meet an engineer</span>{" "}
              <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
                <span className="text-xs">↪</span>
              </kbd>
            </Link>
          </motion.button>
        </div>
      )}
    </nav>
  );
};
