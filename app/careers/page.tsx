import Link from "next/link";

const CareersPage = () => {
  return (
    <div className="flex flex-col  items-center md:h-[75vh] justify-center mt-16  pb-36 md:pb-36   gap-4 px-5  md:px-10 w-full">
      <span className=" text-xs md:text-sm bg-(--primary-color) p-2 text-white ds tracking-wider rounded-sm">
        Join our team
      </span>
      <h1 className="ds text-4xl md:text-5xl text-black font-semibold text-center">
        No open roles at the moment
      </h1>
      <p className="sub text-sm md:text-lg font-normal text-center md:max-w-3xl">
        Our team is growing intentionally. While we don’t have open roles at the
        moment, we’re always on the lookout for passionate builders, thinkers,
        and creators who want to shape the future with us.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-full">
        {/*<button className=" md:w-auto w-full sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300">
          <span>Join The Waitlist</span>{" "}
          <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
            <span className="text-xs">↪</span>
          </kbd>
        </button>*/}
        <button className=" md:w-auto w-full sub border  text-black text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-black hover:shadow-none transition-shadow duration-300">
          <Link
            href={`mailto:careers@forgestudios.tech?subject=Career%20Application%20—%20Your%20Full%20Name&body=Hello%20Forge%20Studios%20Team,%0D%0A%0D%0AI%27m%20reaching%20out%20to%20express%20my%20interest%20in%20joining%20your%20team.%20I%20admire%20the%20work%20you%20do%20and%20would%20love%20the%20opportunity%20to%20contribute%20my%20skills%20and%20experience.%0D%0A%0D%0APlease%20find%20attached%20my%20CV%20and%20portfolio%20for%20your%20review.%0D%0A%0D%0AThank%20you%20for%20your%20time%20and%20consideration.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Send your CV and portfolio to careers@forgestudios.tech</span>{" "}
            <kbd className="h-4 border border-gray-500/40 bg-gray-200/10 px-1 text-sm rounded-xs ml-1">
              <span className="text-xs">↪</span>
            </kbd>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CareersPage;
