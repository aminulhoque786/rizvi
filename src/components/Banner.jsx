import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="bg-img py-20 sm:py-40 lg:py-[150px] bg-center bg-cover bg-no-repeat">
        <div className="text-center pt-28">
          <h1 className="font-gail font-semibold text-[20px] sm:text-[40px] md:text-[40px] text-white">
            Standard Perfumery Suppliers
          </h1>
          <p className=" pt-2 font-pops text-[16px] sm:text-[20px] md:text-[20px] text-white font-semibold">
            Supplier and Distributor 
          </p>
          <p className="font-pops text-white text-[20px]">Of</p>
          <p className="text-white font-pops text-[20px]">Fragrance and Flavors</p>
        </div>

        <div className=" pt-10 max-w-container mx-auto text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 font-sans font-bold text-[24px] sm:text-[28px] md:text-[35px]">
          <h2 className="typing-effect max-w-container mx-auto font-pops">
            Connecting souls with beauty
          </h2>
        </div>

        {/* Uncomment the search bar if needed */}
        {/* 
        <div className="max-w-container mx-auto px-4 sm:px-20 lg:px-[300px] py-4 sm:py-[50px]">
          <input
            className="px-4 sm:px-20 py-2 rounded w-full sm:w-auto"
            type="text"
            placeholder="Search your product"
          />
          <button className="mt-2 sm:mt-0 sm:ml-4 text-[#fff] bg-black p-2 rounded font-pops">
            Search
          </button>
        </div>
        */}
      </div>
    </>
  );
};

export default Banner;
