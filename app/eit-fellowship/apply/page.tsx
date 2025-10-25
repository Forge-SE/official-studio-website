import Link from "next/link";

const ApplicationStatus = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center pb-36   gap-4 px-10">
      <span className="text-sm bg-(--primary-color) p-2 text-white ds tracking-wider rounded-sm">
        Applications Closed
      </span>
      <h1 className="ds text-5xl text-black font-semibold">
        Engineer-In-Training Fellowship
      </h1>
      <p className="sub text-lg font-normal text-center max-w-3xl">
        Our Engineer-In-Training Fellowship is a 3-month hands-on program
        designed to help aspiring software engineers gain real-world experience
        through mentorship, live projects, and technical leadership exposure.
      </p>
      <div className="flex justify-center items-center gap-10">
        <button className=" sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
          <span>Join The Waitlist</span>{" "}
          <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
            <span className="text-xs">↪</span>
          </kbd>
        </button>
        <button className=" sub border  text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300">
          <Link href="/">
            <span>Back to Home</span>{" "}
            <kbd className="h-4 border border-gray-500/40 bg-gray-200/10  px-1 text-sm rounded-xs ml-1">
              <span className="text-xs">↪</span>
            </kbd>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ApplicationStatus;
