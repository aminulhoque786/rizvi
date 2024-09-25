import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import roses from "../assets/pink.jpg";
const Offering = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set animation duration (optional)
          once: true, // Whether animation should happen only once
        });
        AOS.refresh(); // Ensure AOS refreshes when components mount
      }, []);


  return (
    <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-10 pt-28">
    <div
      className="w-full lg:w-2/4"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <img className="w-full" src={roses} alt="" />
    </div>

    <div
      className="w-full lg:w-2/5"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <h2
        className="font-pops text-[24px] lg:text-[30px]  py-5"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        Sustainability
      </h2>
      <p
        className="font-pops text-black py-5"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        We make nature blend with science and introduce the concept of
        sustainable nature for a better environment and suitable
        nature for ourselves. Together with our customers we deliver food
        experiences, craft inspired fragrances and develop beauty and
        wellbeing solutions that make people look and feel good. From your
        favourite drink to your daily meal, from prestige perfumes to
        laundry care, our products help people live happier and healthier
        lives and we create them in a way that respects natural resources
        and the environment.
      </p>

      <div className="py-10 flex gap-4">
        <button className="font-semibold font-gail duration-500 ease-in-out  px-4 py-1 hover:bg-slate-500 border border-black  hover:text-white text-black">
          Explore
        </button>
        {/* <button className="font-gail duration-500 ease-in-out  px-4 py-2 hover:bg-slate-500 border border-black rounded hover:text-white text-black">
          Access Our success stories
        </button> */}
      </div>
    </div>
  </div>
  )
}

export default Offering