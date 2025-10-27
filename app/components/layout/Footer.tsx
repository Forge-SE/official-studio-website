"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  buttonVariants,
  headingVariants,
  subtextVariants,
  listVariants,
} from "./Animations";

export const Footer = () => {
  return (
    <footer className="bg-black  min-h-screen w-full md:px-10">
      <div className=" flex flex-col justify-center items-center gap-5 rounded-sm px-6  md:px-12 py-24 ">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className=" text-5xl md:text-7xl text-white w-full md:max-w-3xl text-center"
        >
          Let&apos;s Build Together
        </motion.h2>
        <motion.p
          variants={subtextVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="sub text-sm text-center md:text-xl text-white"
        >
          Partner with us to turn your vision into a scalable, high-performing
          product.
        </motion.p>
        <div className="w-full flex md:flex-row flex-col justify-center items-center gap-5">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub bg-(--primary-color) text-white w-full md:w-auto text-sm p-4 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
          >
            <Link href="https://calendly.com/engineering-forgestudios/30min">
              Meet an engineer ↗
            </Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub border border-white bg-white w-full md:w-auto text-black text-sm p-4 rounded-sm shadow-[2px_2px_0px_0px] shadow-white/50 hover:shadow-none transition-shadow duration-300"
          >
            <Link href="https://calendly.com/forgestudios-sales/30min">
              Talk to sales ↗
            </Link>
          </motion.button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <hr className="h-0.5 w-full bg-white/10  flex items-center justify-center" />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 place-items-start md:place-items-center items-start gap-10 md:gap-0 mt-24 px-6 md:px-0">
        <div className="flex flex-col justify-center items-start gap-2">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            <Image
              src="/Logo-White.svg"
              alt="Forge Studios Logo"
              width={50}
              height={40}
            />
          </motion.div>

          <motion.h5
            variants={subtextVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="ds font-semibold text-2xl md:text-3xl text-white tracking-wide mt-2"
          >
            Forge Studios
          </motion.h5>
          <motion.p
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="sub text-sm md:text-base text-white font-light max-w-md"
          >
            {/*Innovation . Integrity . Collaboration*/}
            Building world-class digital products that drive business growth.
          </motion.p>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <motion.span
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base sub font-light"
          >
            Quick Links
          </motion.span>
          <Link href="#our-services" className="text-white">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className=" text-sm md:text-base ds font-medium hover:text-gray-200"
            >
              Our Services ↗
            </motion.span>{" "}
          </Link>
          <Link href="#why-choose-us" className="text-white">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              className="text-sm md:text-base ds font-medium hover:text-gray-200"
            >
              Why Choose Us ↗
            </motion.span>{" "}
          </Link>
          <Link href="/careers" className="text-white">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
              className="text-sm md:text-base ds font-medium hover:text-gray-200"
            >
              Careers
            </motion.span>{" "}
          </Link>
          <Link href="/eit-fellowship/apply" className="text-white">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={7}
              viewport={{ once: true }}
              className="text-sm md:text-base ds font-medium hover:text-gray-200"
            >
              EIT Fellowship
            </motion.span>{" "}
            <span className="text-xs bg-(--primary-color) p-1 text-white ds tracking-wider rounded-sm">
              Applications Closed
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <motion.span
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base sub font-light"
          >
            Get in touch with us
          </motion.span>
          <Link
            href="mailto:sales@forgestudios.tech&subject=Sales Inquiry"
            className="text-white"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className=" text-base md:text-[15px] ds font-medium hover:text-gray-200"
            >
              sales@forgestudios.tech
            </motion.span>{" "}
          </Link>
          <Link href="tel:+233509081558" className="text-white">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              className=" text-base md:text-[15px] ds font-medium hover:text-gray-200"
            >
              (+233) 50 908 1558
            </motion.span>{" "}
          </Link>
        </div>
      </section>
      <div className="w-full flex items-center justify-center pb-12 pt-24">
        <hr className="h-0.5 w-full bg-white/10  flex items-center justify-center" />
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-0 justify-between  items-start md:items-center w-full md:px-0 px-6 pb-12">
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <span className="sub text-white text-sm md:text-base font-light ">
            © {new Date().getFullYear()} Forge Studios
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/forge-se"
            className="text-gray-300"
          >
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              className="text-[15px] ds font-medium hover:text-gray-200"
            >
              Linkedin ↗
            </motion.span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
              className="text-[15px] ds font-medium hover:text-gray-200"
            >
              Instagram ↗
            </motion.span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
              className="text-[15px] ds font-medium hover:text-gray-200"
            >
              Twitter ↗
            </motion.span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <motion.span
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
              className="text-[15px] ds font-medium hover:text-gray-200"
            >
              Facebook ↗
            </motion.span>{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};
