"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  buttonVariants,
  headingVariants,
  listVariants,
  subtextVariants,
} from "./components/layout/Animations";

export default function Home() {
  return (
    <main className="w-full pt-10  md:p-0 ">
      <section className=" h-[80vh] md:min-h-screen flex flex-col justify-center items-center w-full max-w-7xl mx-auto md:mt-24 pb-10 md:pb-36 gap-3 px-5 md:px-10">
        <div className="md:text-center w-full md:max-w-5xl flex flex-col gap-2 justify-center items-start md:items-center">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[35px] md:text-6xl text-black leading-10"
          >
            Engineering Digital Solutions That Scale{" "}
          </motion.h1>
          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className=" sub  text-sm md:text-base text-(--black-color) md:w-2xl"
          >
            We design and engineer high-performance software solutions that help
            businesses move faster, scale smarter, and stand out in competitive
            markets.
          </motion.p>
        </div>
        <div className="flex md:flex-row flex-col w-full md:justify-center items-center gap-5 md:gap-10">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className=" sub bg-(--primary-color) md:w-auto w-full text-white  text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
          >
            <Link href="/build-with-us">
              <span>Let&apos;s build together</span>{" "}
              <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
                <span className="text-xs">↪</span>
              </kbd>
            </Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className=" sub border md:w-auto w-full text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300"
          >
            <Link href="https://calendly.com/forgestudios-sales/30min">
              <span>Schedule a discovery call</span>{" "}
              <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                <span className="text-xs">↪</span>
              </kbd>
            </Link>
          </motion.button>
        </div>
        <div className="w-full mt-16 px-4">
          <div className="flex justify-start md:justify-center items-center gap-4 overflow-x-auto md:overflow-visible scrollbar-hidden scroll-smooth snap-x snap-mandatory">
            {[
              "/hero-image.jpg",
              "/hero-image-3.jpg",
              "/hero-image-2.jpg",
              "/tn.jpg",
              "/tt.jpg",
              "/ty.jpg",
            ].map((src, i) => (
              <div key={i} className="shrink-0 snap-center">
                <Image
                  src={src}
                  alt={`Hero ${i + 1}`}
                  width={200}
                  height={300}
                  className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/*<div className="flex flex-col justify-center items-center mt-10 px-4 py-3 rounded-sm   border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-[#0457f3] hover:shadow-none transition-shadow duration-300">
          <p className="text-gray-600 sub w-3/4 text-center">
            Our exceptional engineers have experience building and maintaining
            complex systems for client including
          </p>
        </div>*/}
      </section>
      <section
        className="flex flex-col justify-center items-start w-full gap-10 py-36 px-4 md:px-10 max-w-7xl mx-auto "
        id="our-services"
      >
        <div className="flex flex-col justify-center items-start gap-4  w-full md:max-w-xl">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className=" text-[34px] md:text-5xl leading-10"
          >
            Solutions Engineered For Your Success
          </motion.h2>
          <motion.p
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-base md:text-lg md:w-4/5 "
          >
            We transform your goals into intuitive digital experiences that
            delight users and deliver results.
          </motion.p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 place-items-start md:place-items-center w-full gap-10">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="md:col-span-3 bg-(--primary-color) w-full  h-auto md:h-[50vh] rounded-xl px-5 md:px-16 py-20"
          >
            <div className="flex flex-col justify-center items-start md:max-w-xl gap-5">
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" text-white text-3xl md:text-4xl"
              >
                Software Engineering
              </motion.h3>
              <motion.p
                variants={subtextVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="text-white text-sm md:text-base sub font-normal"
              >
                We design, build, and scale custom software tailored to your
                business goals — from MVPs to full enterprise solutions.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" sub md:w-auto w-full border border-white bg-white text-blue-600 text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300"
              >
                <Link href="/build-with-us">
                  <span>Build with us</span>{" "}
                  <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                    <span className="text-xs">↪</span>
                  </kbd>
                </Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className=" bg-lime-500/40 w-full h-auto md:h-[80vh] flex flex-col justify-start rounded-xl px-4 md:px-12 py-20"
          >
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" text-black  text-3xl md:text-4xl"
              >
                Design Strategy
              </motion.h3>
              <motion.p
                variants={subtextVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="text-black text-sm md:text-base sub font-normal"
              >
                From wireframes to launch plans, we craft user-centered designs
                and growth strategies that bring clarity and direction to your
                product vision.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" sub border md:w-auto w-full  bg-white text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300"
              >
                <span>Start your project</span>{" "}
                <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                  <span className="text-xs">↪</span>
                </kbd>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className=" bg-gray-100 w-full h-auto md:h-[80vh] flex flex-col justify-start rounded-xl px-4 md:px-12 py-20"
          >
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" text-black text-3xl md:text-4xl"
              >
                Team Augmentation
              </motion.h3>
              <motion.p
                variants={subtextVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="text-black text-sm md:text-base sub font-normal"
              >
                Need extra hands on your next sprint? Our skilled engineers
                seamlessly integrate with your team to accelerate delivery and
                maintain top-tier quality.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" sub bg-(--primary-color) md:w-auto w-full text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
              >
                <span>Hire talent fast</span>{" "}
                <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
                  <span className="text-xs">↪</span>
                </kbd>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            className=" bg-black w-full md:h-[80vh] h-auto flex flex-col justify-start rounded-xl px-4 md:px-12 py-20"
          >
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" text-white text-3xl md:text-4xl"
              >
                Technical Consulting
              </motion.h3>
              <motion.p
                variants={subtextVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="text-white text-sm md:text-base sub font-normal"
              >
                Get expert guidance on architecture, performance, and
                scalability. We help you make the right technical choices to
                future-proof your product.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className=" sub md:w-auto w-full border border-white bg-white text-blue-600 text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300"
              >
                <Link href="https://calendly.com/forgestudios-sales/30min">
                  <span>Talk to an expert</span>{" "}
                  <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                    <span className="text-xs">↪</span>
                  </kbd>
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center w-full mt-36 bg-(--primary-color) md:px-10  gap-16"
        id="why-choose-us"
      >
        <div className="relative flex flex-col justify-center items-center gap-20 border border-white/20 rounded-sm px-4 md:px-12 py-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] ">
          <div className="text-center flex flex-col justify-center items-center gap-5">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
              className=" text-4xl md:text-5xl  max-w-3xl text-white "
            >
              The Engineering Partners Businesses Rely On
            </motion.h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center w-full gap-10">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto flex-col justify-center items-center rounded-xl px-6 md:px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image
                  src="/monitoring.svg"
                  alt="Image"
                  width={60}
                  height={50}
                />
                <span className="ds  text-black font-semibold text-3xl">
                  Proven track record of results
                </span>
                {/*<p className="text-black text-base sub font-normal">
                We design, build, and scale custom software tailored to your
                business goals — from MVPs to full enterprise solutions.
              </p>*/}
                <button className=" sub  text-blue-600 text-base  rounded-sm font-medium shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>

                  {/*<kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                  <span className="text-xs">↗</span>
                </kbd>*/}
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto rounded-xl px-6 md:px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image src="/bolt.svg" alt="Image" width={60} height={50} />
                <span className="ds  text-black font-semibold text-3xl">
                  Speed meets transparency
                </span>
                {/*<p className="text-black text-base sub font-normal">
                We design, build, and scale custom software tailored to your
                business goals — from MVPs to full enterprise solutions.
              </p>*/}
                <button className=" sub  text-blue-600 text-base  rounded-sm font-medium shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto rounded-xl px-6 md:px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image
                  src="/arrow-circle-up.svg"
                  alt="Image"
                  width={60}
                  height={50}
                />
                <span className="ds  text-black font-semibold text-3xl">
                  Expertise that scales with you
                </span>
                {/*<p className="text-black text-base sub font-normal">
                We design, build, and scale custom software tailored to your
                business goals — from MVPs to full enterprise solutions.
              </p>*/}
                <button className=" sub  text-blue-600 text-base  rounded-sm font-medium shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto rounded-xl md:px-12 px-6 py-20 shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image
                  src="/verified-user.svg"
                  alt="Image"
                  width={60}
                  height={50}
                />
                <span className="ds  text-black font-semibold text-3xl">
                  Built for growth and reliability
                </span>{" "}
                <button className=" sub text-blue-600 text-base rounded-sm font-medium shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto rounded-xl md:px-12 px-6 py-20 shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image src="/add-box.svg" alt="Image" width={60} height={50} />
                <span className="ds  text-black font-semibold text-3xl">
                  Your strategic engineering partner
                </span>
                <button className=" sub  text-blue-600 text-base  rounded-sm font-medium shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={6}
              viewport={{ once: true }}
              className=" bg-white w-full h-auto rounded-xl px-6 md:px-16 py-20  shadow-[6px_6px_0px_0px] shadow-white/60"
            >
              <div className="flex flex-col justify-center items-start max-w-xl gap-5">
                <Image
                  src="/double-arrow.svg"
                  alt="Image"
                  width={60}
                  height={50}
                />
                <span className="ds   text-black font-semibold text-3xl">
                  Future ready by design
                </span>
                <button className=" sub  text-blue-600 text-base rounded-sm font-medium  shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                  <Link href="/build-with-us">
                    <span>Build with us ↗</span>{" "}
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
