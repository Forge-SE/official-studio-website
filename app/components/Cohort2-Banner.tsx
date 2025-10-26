"use client";
import { useState } from "react";
export const Cohort2Banner = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className=" bg-(--primary-color) h-[7vh] flex justify-center md:justify-between items-center md:px-10 fixed top-0 left-0 w-full z-50">
        <div className="hidden md:flex"> </div>
        <span className=" text-xs md:text-base text-white ds font-light">
          → Applications for EIT Fellowship Cohort 2 open soon !
        </span>
        <div className="hidden md:flex justify-end items-center ">
          <button
            className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <kbd className=" h-1 md:h-4 border border-white/40 bg-white/15  px-1 text-xs md:text-sm rounded-xs ml-1">
              <span className=" text-xs md:text-base">X</span>
            </kbd>
          </button>
        </div>
      </div>
    )
  );
};
