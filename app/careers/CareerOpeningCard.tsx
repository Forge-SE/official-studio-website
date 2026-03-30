"use client";

import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants, listVariants } from "../components/layout/Animations";
import type { CareerOpening } from "./data";

type CareerOpeningCardProps = {
  opening: CareerOpening;
  index: number;
  isActive: boolean;
  onToggle: (openingId: string) => void;
  onApply: (openingId: string) => void;
};

const accentClasses: Record<
  CareerOpening["accent"],
  { panel: string; badge: string; chip: string }
> = {
  blue: {
    panel:
      "border-blue-200 bg-linear-to-br from-blue-50 via-white to-white shadow-blue-100/70",
    badge: "border-blue-200 bg-blue-100 text-blue-700",
    chip: "border-blue-200 bg-blue-100/70 text-blue-700",
  },
  lime: {
    panel:
      "border-lime-200 bg-linear-to-br from-lime-100/60 via-white to-white shadow-lime-100/70",
    badge: "border-lime-300 bg-lime-200/80 text-lime-900",
    chip: "border-lime-300 bg-lime-100/80 text-lime-900",
  },
};

const listClassName = "space-y-3 sub text-sm md:text-base text-(--black-color)";

export default function CareerOpeningCard({
  opening,
  index,
  isActive,
  onToggle,
  onApply,
}: CareerOpeningCardProps) {
  const accent = accentClasses[opening.accent];

  return (
    <motion.article
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{ y: -4 }}
      className={`rounded-[28px] border p-6 md:p-9 shadow-[6px_6px_0px_0px] transition-all duration-300 ${
        isActive
          ? `${accent.panel} shadow-black/10`
          : "border-black/10 bg-white shadow-black/5 hover:border-black/20"
      }`}
    >
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.24em] sub ${accent.badge}`}
              >
                Open role
              </span>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-black/70 sub">
                {opening.team}
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.24em] text-black/45 sub">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-3xl md:text-4xl leading-none text-black">
                {opening.title}
              </h2>
              <p className="sub max-w-2xl text-sm md:text-base text-(--black-color)">
                {opening.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
            {[opening.type, opening.location].map((item) => (
              <span
                key={item}
                className={`rounded-full border px-3 py-1 text-xs md:text-sm sub ${accent.chip}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {opening.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs md:text-sm text-black/80 sub"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            type="button"
            onClick={() => onApply(opening.id)}
            className="cursor-pointer sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
          >
            <span>Apply now</span>
            <kbd className="ml-2 rounded-xs border border-white/40 bg-white/15 px-1 text-xs">
              -&gt;
            </kbd>
          </motion.button>

          <button
            type="button"
            onClick={() => onToggle(opening.id)}
            aria-expanded={isActive}
            className="cursor-pointer sub border border-black/15 bg-white text-black text-sm px-4 py-3 rounded-sm shadow-[2px_2px_0px_0px] shadow-black/80 hover:shadow-none transition-shadow duration-300"
          >
            {isActive ? "Hide details" : "View details"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isActive ? (
            <motion.div
              key={`${opening.id}-details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-2">
                <section className="space-y-5">
                  <h3 className="text-xl text-black">About the role</h3>
                  <p className="sub text-sm md:text-base text-(--black-color)">
                    {opening.intro}
                  </p>

                  <div>
                    <h4 className="text-lg text-black">What you&apos;ll do</h4>
                    <ul className={`${listClassName} mt-4`}>
                      {opening.whatYouWillDo.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-(--primary-color)" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="space-y-7">
                  <div>
                    <h4 className="text-lg text-black">Requirements</h4>
                    <ul className={`${listClassName} mt-4`}>
                      {opening.requirements.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {opening.bonus?.length ? (
                    <div>
                      <h4 className="text-lg text-black">Bonus</h4>
                      <ul className={`${listClassName} mt-4`}>
                        {opening.bonus.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {opening.idealFor?.length ? (
                    <div>
                      <h4 className="text-lg text-black">Ideal for</h4>
                      <ul className={`${listClassName} mt-4`}>
                        {opening.idealFor.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-(--primary-color)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
                      <h4 className="text-lg text-black">What we value</h4>
                      <ul className="mt-3 space-y-2 sub text-sm text-(--black-color)">
                        {opening.values.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
                      <h4 className="text-lg text-black">Engagement</h4>
                      <ul className="mt-3 space-y-2 sub text-sm text-(--black-color)">
                        {opening.engagement.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
