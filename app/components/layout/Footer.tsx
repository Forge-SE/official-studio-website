import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-black  min-h-screen w-full px-10">
      <div className=" flex flex-col justify-center items-center gap-5 rounded-sm px-12 py-24 ">
        <h2 className="text-7xl text-white max-w-3xl text-center">
          Let&apos;s Build Together
        </h2>
        <p className="sub text-xl text-white">
          Partner with us to turn your vision into a scalable, high-performing
          product.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="sub bg-(--primary-color) text-white text-sm p-4 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
            <Link href="https://calendly.com/engineering-forgestudios/30min">
              Meet an engineer ↗
            </Link>
          </button>
          <button className="sub border border-white bg-white text-black text-sm p-4 rounded-sm shadow-[2px_2px_0px_0px] shadow-white/50 hover:shadow-none transition-shadow duration-300">
            <Link href="https://calendly.com/forgestudios-sales/30min">
              Talk to sales ↗
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <hr className="h-0.5 w-full bg-white/10  flex items-center justify-center" />
      </div>

      <footer className="grid grid-cols-3 place-items-center items-start mt-24">
        <div className="flex flex-col justify-center items-start">
          <h5 className="ds font-semibold text-3xl text-white tracking-wide">
            Forge Studios
          </h5>
          <p className="sub text-base text-white font-light max-w-md">
            {/*Innovation . Integrity . Collaboration*/}
            Building world-class digital products that drive business growth.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <span className="text-gray-400 text-base sub font-light">
            Quick Links
          </span>
          <Link href="#our-services" className="text-white">
            <span className="text-base ds font-medium hover:text-gray-200">
              Our Services ↗
            </span>{" "}
          </Link>
          <Link href="#why-choose-us" className="text-white">
            <span className="text-base ds font-medium hover:text-gray-200">
              Why Choose Us ↗
            </span>{" "}
          </Link>
          <Link href="" className="text-white">
            <span className="text-base ds font-medium hover:text-gray-200">
              Careers
            </span>{" "}
          </Link>
          <Link href="/eit-fellowship/apply" className="text-white">
            <span className="text-base ds font-medium hover:text-gray-200">
              EIT Fellowship
            </span>{" "}
            <span className="text-xs bg-(--primary-color) p-1 text-white ds tracking-wider rounded-sm">
              Applications Closed
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <span className="text-gray-400 text-base sub font-light">
            Get in touch with us
          </span>
          <Link href="" className="text-white">
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              sales@forgestudios.tech
            </span>{" "}
          </Link>
          <Link href="" className="text-white">
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              (+233) 50 908 1558
            </span>{" "}
          </Link>
        </div>
      </footer>
      <div className="w-full flex items-center justify-center pb-12 pt-24">
        <hr className="h-0.5 w-full bg-white/10  flex items-center justify-center" />
      </div>
      <div className="flex justify-between items-center w-full pb-12">
        <div>
          <span className="sub text-white font-light ">
            © {new Date().getFullYear()} Forge Studios
          </span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/forge-se"
            className="text-gray-300"
          >
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              Linkedin ↗
            </span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              Instagram ↗
            </span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              Twitter ↗
            </span>{" "}
          </Link>
          <Link href="" className="text-gray-300">
            <span className="text-[15px] ds font-medium hover:text-gray-200">
              Facebook ↗
            </span>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};
