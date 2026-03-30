"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  headingVariants,
  listVariants,
  subtextVariants,
} from "../components/layout/Animations";
import CareerApplicationForm from "./CareerApplicationForm";
import CareerOpeningCard from "./CareerOpeningCard";
import { careerOpenings, teamGroups } from "./data";

const whyJoinUs = [
  {
    title: "Real product exposure",
    description:
      "You will work close to founders, operators, and product teams instead of being isolated from product decisions.",
    tone: "bg-white",
  },
  {
    title: "Ownership from the start",
    description:
      "We trust people early. That means shipping work end-to-end, not just completing isolated implementation tasks.",
    tone: "bg-lime-100/70",
  },
  {
    title: "Fast feedback loops",
    description:
      "We move quickly, communicate clearly, and iterate with intention so good ideas become shipped work faster.",
    tone: "bg-blue-50",
  },
];

const values = [
  {
    title: "Speed + quality",
    description:
      "We care about pace, but we do not treat polish and reliability as optional.",
  },
  {
    title: "Ownership mindset",
    description:
      "We value teammates who push work across the line and think beyond the ticket.",
  },
  {
    title: "Clear communication",
    description:
      "Good collaboration here looks like thoughtful updates, fast alignment, and low-ego problem solving.",
  },
];

const teamToneClasses = {
  white: {
    header: "bg-gray-50/80",
    badge: "bg-white",
    card: "bg-white",
    accent: "bg-blue-600",
    shadow: "shadow-black/5",
  },
  lime: {
    header: "bg-lime-100/60",
    badge: "bg-white",
    card: "bg-white/95",
    accent: "bg-lime-500",
    shadow: "shadow-lime-100",
  },
} as const;

export default function CareersClient() {
  const [selectedOpeningId, setSelectedOpeningId] = useState(
    careerOpenings[0]?.id ?? "",
  );
  const [expandedOpeningId, setExpandedOpeningId] = useState(
    careerOpenings[0]?.id ?? "",
  );
  const applicationRef = useRef<HTMLDivElement>(null);

  const selectedOpening =
    careerOpenings.find((opening) => opening.id === selectedOpeningId) ??
    careerOpenings[0];

  const handleSelectOpening = (openingId: string) => {
    setSelectedOpeningId(openingId);
    setExpandedOpeningId(openingId);
  };

  const handleApply = (openingId: string) => {
    handleSelectOpening(openingId);

    window.requestAnimationFrame(() => {
      applicationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  if (!selectedOpening) {
    return null;
  }

  return (
    <main className="w-full pb-36 md:pb-40">
      <section className="flex min-h-[80vh] md:min-h-screen flex-col justify-center items-center w-full max-w-7xl mx-auto md:mt-24 pb-12 md:pb-24 gap-6 px-5 md:px-10">
        <div className="md:text-center w-full md:max-w-5xl flex flex-col gap-3 justify-center items-start md:items-center">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[38px] md:text-6xl text-black leading-[0.95]"
          >
            Join the team building ambitious digital products that move fast and
            scale well.
          </motion.h1>

          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-sm md:text-base text-(--black-color) md:w-2xl"
          >
            Explore current openings, learn how we work, meet the team, and
            apply to the role that fits your strengths.
          </motion.p>
        </div>

        <div className="w-full mt-12 px-0">
          <Image
            src="/tv.jpg"
            alt="Forge Studios team collaboration"
            width={1200}
            height={800}
            className="rounded-3xl object-cover w-full h-auto shadow-lg"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="flex flex-col justify-center items-start gap-4 w-full md:max-w-2xl">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[34px] md:text-5xl leading-10 text-black"
          >
            Why join us
          </motion.h2>
          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-base md:text-lg text-(--black-color)"
          >
            We are building an environment where engineers and designers can do
            meaningful work, grow quickly, and ship things that matter.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {whyJoinUs.map((item, index) => (
            <motion.article
              key={item.title}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`rounded-[28px] border border-black/10 p-6 md:p-8 shadow-[6px_6px_0px_0px] shadow-black/5 transition-transform duration-300 ${item.tone}`}
            >
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.24em] text-black/45 sub">
                  Why join us
                </div>
                <h3 className="text-3xl text-black">{item.title}</h3>
                <p className="sub text-sm md:text-base text-(--black-color)">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              className="rounded-[24px] border border-black/10 bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px] shadow-black/5"
            >
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.24em] text-black/45 sub">
                  What we value
                </div>
                <h3 className="text-2xl text-black">{value.title}</h3>
                <p className="sub text-sm md:text-base text-(--black-color)">
                  {value.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="team"
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 scroll-mt-24"
      >
        <div className="flex flex-col justify-center items-start gap-4 w-full md:max-w-2xl">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[34px] md:text-5xl leading-10 text-black"
          >
            Meet the team
          </motion.h2>
          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-base md:text-lg text-(--black-color)"
          >
            The people behind Forge Studios span leadership, engineering,
            product, and delivery.
          </motion.p>
        </div>

        <div className="mt-12 space-y-12">
          {teamGroups.map((group, index) => {
            const tone = teamToneClasses[group.tone];

            return (
              <motion.section
                key={group.id}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
               

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {group.members.map((member, memberIndex) => (
                    <motion.article
                      key={member.name}
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={memberIndex}
                      viewport={{ once: true, amount: 0.35 }}
                      whileHover={{ y: -6 }}
                      className={`group overflow-hidden rounded-md border border-black/10 transition-transform duration-300 shadow-[6px_6px_0px_0px] ${tone.card} ${tone.shadow}`}
                    >
                      <div className="relative aspect-square overflow-hidden bg-black/5">
                        <Image
                          src={member.image.src}
                          alt={member.image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          className={`object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] ${member.image.className ?? ""}`}
                        />
                      </div>
                      <div className="space-y-4 p-5 md:p-6">
                        <p className="sub text-xs uppercase tracking-[0.24em] text-black/45">
                          {group.label}
                        </p>
                        <div className="space-y-1">
                          <h4 className="text-2xl leading-tight text-black">
                            {member.name}
                          </h4>
                          <p className="sub text-sm md:text-base text-(--black-color)">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      <section
        id="open-roles"
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 scroll-mt-24"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 max-w-3xl">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[34px] md:text-5xl leading-none text-black"
            >
              Open roles
            </motion.h2>
            <motion.p
              variants={subtextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sub text-sm md:text-base text-(--black-color)"
            >
              Browse the openings below, expand a card to see the full brief,
              and click apply to jump straight into the application form.
            </motion.p>
          </div>

          <motion.div
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm sub text-(--black-color)"
          >
            {careerOpenings.length} roles live
          </motion.div>
        </div>

        <div className="mt-12 space-y-8">
          {careerOpenings.map((opening, index) => (
            <CareerOpeningCard
              key={opening.id}
              opening={opening}
              index={index}
              isActive={expandedOpeningId === opening.id}
              onToggle={(openingId) =>
                setExpandedOpeningId((current) =>
                  current === openingId ? "" : openingId,
                )
              }
              onApply={handleApply}
            />
          ))}
        </div>
      </section>

      <section
        ref={applicationRef}
        id="application"
        className="max-w-6xl mx-auto px-5 md:px-10 pt-6 md:pt-10 scroll-mt-24"
      >
        <div className="flex flex-col justify-center items-start gap-4 w-full md:max-w-2xl">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[34px] md:text-5xl leading-10 text-black"
          >
            Apply now
          </motion.h2>
          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-base md:text-lg text-(--black-color)"
          >
            Choose the role you are applying for, share your details, and we
            will route your application to the right team.
          </motion.p>
        </div>

        <div className="mt-10">
          <CareerApplicationForm
            opening={selectedOpening}
            openings={careerOpenings}
            onSelectOpening={handleSelectOpening}
          />
        </div>
      </section>
    </main>
  );
}
