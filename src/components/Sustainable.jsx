import React from "react";
import rosed from "../assets/pro.jpg";
const Sustainable = () => {
  return (
    <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-10 pt-32">
      <div className="w-full lg:w-3/5" data-aos="fade-up" data-aos-delay="1000">
        <img className="w-full" src={rosed} alt="" />
      </div>

      <div className="w-full lg:w-3/5" data-aos="fade-up" data-aos-delay="1000">
        <h2
          className="font-nail text-[24px] lg:text-[30px]  py-5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Offerings
        </h2>
        <p
          className="font-pops text-black py-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          We believe in connections, so we connect you with beauty. We believe
          everyone is beautiful in their own way, so we make it a bit more
          interesting with the help of beauty industry.
        </p>

        <div className="py-16 flex gap-4">
          <button className="font-semibold font-gail duration-500 ease-in-out  px-4 py-1 hover:bg-slate-500 border border-black  hover:text-white text-black">
            Explore
          </button>
          {/* <button className="font-gail duration-500 ease-in-out  px-4 py-2 hover:bg-slate-500 border border-black rounded hover:text-white text-black">
          Access Our success stories
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sustainable;
