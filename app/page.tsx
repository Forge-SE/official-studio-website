import Image from "next/image";
// import ScrollReveal from "./components/ScrollReveal";
// import ServiceCard from "./components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="min-h-screen flex flex-col justify-center items-center mt-24 pb-36 gap-3 px-10">
        <div className="text-center max-w-5xl flex flex-col gap-2 justify-center items-center">
          <h1 className="text-6xl text-black">
            Engineering Digital Solutions That Scale{" "}
          </h1>
          <p className=" sub text-base text-(--black-color) w-2xl">
            We design and engineer high-performance software solutions that help
            businesses move faster, scale smarter, and stand out in competitive
            markets.
          </p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <button className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
            <Link href="/build-with-us">
              <span>Let&apos;s build together</span>{" "}
              <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
                <span className="text-xs">↪</span>
              </kbd>
            </Link>
          </button>
          <button className=" sub border  text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300">
            <Link href="https://calendly.com/forgestudios-sales/30min">
              <span>Schedule a discovery call</span>{" "}
              <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                <span className="text-xs">↪</span>
              </kbd>
            </Link>
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 mt-20">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
          <Image
            src="/hero-image-3.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
          <Image
            src="/hero-image-2.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
          <Image
            src="/tn.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
          <Image
            src="/tt.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
          <Image
            src="/ty.jpg"
            alt="Hero Image"
            width={200}
            height={300}
            className="rounded-lg grayscale-100 hover:grayscale-0"
          />
        </div>
        {/*<div className="flex flex-col justify-center items-center mt-10 px-4 py-3 rounded-sm   border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-[#0457f3] hover:shadow-none transition-shadow duration-300">
          <p className="text-gray-600 sub w-3/4 text-center">
            Our exceptional engineers have experience building and maintaining
            complex systems for client including
          </p>
        </div>*/}
      </section>
      <section
        className="flex flex-col jusitfy-center items-start w-full gap-10 py-36 px-10 "
        id="our-services"
      >
        <div className="flex flex-col justify-center items-start gap-4 max-w-xl">
          <h2 className="text-5xl">Solutions Engineered For Your Success</h2>
          <p className="sub text-lg w-4/5 ">
            We transform your goals into intuitive digital experiences that
            delight users and deliver results.
          </p>
        </div>
        <div className=" grid grid-cols-3 place-items-center w-full gap-10">
          <div className="col-span-3 bg-(--primary-color) w-full h-[50vh] rounded-xl px-16 py-20">
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <h3 className=" text-white text-4xl">Software Engineering</h3>
              <p className="text-white text-base sub font-normal">
                We design, build, and scale custom software tailored to your
                business goals — from MVPs to full enterprise solutions.
              </p>
              <button className=" sub border border-white bg-white text-blue-600 text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                <Link href="/build-with-us">
                  <span>Build with us</span>{" "}
                  <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                    <span className="text-xs">↪</span>
                  </kbd>
                </Link>
              </button>
            </div>
          </div>

          <div className=" bg-lime-500/40 w-full h-[80vh] flex flex-col justify-start rounded-xl px-12 py-20">
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <h3 className=" text-black text-4xl">Design Strategy</h3>
              <p className="text-black text-base sub font-normal">
                From wireframes to launch plans, we craft user-centered designs
                and growth strategies that bring clarity and direction to your
                product vision.
              </p>
              <button className=" sub border  bg-white text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300">
                <span>Start your project</span>{" "}
                <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                  <span className="text-xs">↪</span>
                </kbd>
              </button>
            </div>
          </div>

          <div className=" bg-gray-100 w-full h-[80vh] flex flex-col justify-start rounded-xl px-12 py-20">
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <h3 className=" text-black text-4xl">Team Augmentation</h3>
              <p className="text-black text-base sub font-normal">
                Need extra hands on your next sprint? Our skilled engineers
                seamlessly integrate with your team to accelerate delivery and
                maintain top-tier quality.
              </p>
              <button className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
                <span>Hire talent fast</span>{" "}
                <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
                  <span className="text-xs">↪</span>
                </kbd>
              </button>
            </div>
          </div>

          <div className=" bg-black w-full h-[80vh] flex flex-col justify-start rounded-xl px-12 py-20">
            <div className="flex flex-col justify-center items-start max-w-xl gap-5">
              <h3 className=" text-white text-4xl">Technical Consulting</h3>
              <p className="text-white text-base sub font-normal">
                Get expert guidance on architecture, performance, and
                scalability. We help you make the right technical choices to
                future-proof your product.
              </p>
              <button className=" sub border border-white bg-white text-blue-600 text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-white/60 hover:shadow-none transition-shadow duration-300">
                <Link href="https://calendly.com/forgestudios-sales/30min">
                  <span>Talk to an expert</span>{" "}
                  <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
                    <span className="text-xs">↪</span>
                  </kbd>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center w-full mt-36 py-24 bg-(--primary-color) px-10  gap-16"
        id="why-choose-us"
      >
        <div className="relative flex flex-col justify-center items-center gap-20 border border-white/20 rounded-sm px-12 py-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] ">
          <div className="text-center flex flex-col justify-center items-center gap-5">
            <h2 className="text-5xl  max-w-3xl text-white ">
              The Engineering Partners Businesses Rely On
            </h2>
          </div>
          <div className=" grid grid-cols-3 place-items-center w-full gap-10">
            <div className=" bg-white w-full h-auto flex-col justify-center items-center rounded-xl px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
            <div className=" bg-white w-full h-auto rounded-xl px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
            <div className=" bg-white w-full h-auto rounded-xl px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
            <div className=" bg-white w-full h-auto rounded-xl px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
            <div className=" bg-white w-full h-auto rounded-xl px-12 py-20 shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
            <div className=" bg-white w-full h-auto rounded-xl px-16 py-20  shadow-[6px_6px_0px_0px] shadow-white/60">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
