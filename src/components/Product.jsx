import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pro from "../assets/kit.jpg";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center py-24 lg:py-32 gap-8 lg:gap-16 px-4 lg:px-0">
        {/* Text Section */}
        <div
          className="w-full lg:w-4/5"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h2
            className="font-pops text-[22px] lg:text-[30px] py-7 lg:py-5"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Our Company
          </h2>
          <p
            className="w-full lg:w-4/5 text-left font-pops text-black text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            Standard Perfumery Suppliers was introduced in the early '70s. Dhaka's
            one of the major then. Now we have crossed our 50 years of
            excellence and glory in the fragrance industry. Together with our
            customers, we deliver food experiences, craft inspired fragrances, and
            develop beauty and wellbeing solutions that make people look and
            feel good. From your favourite drink to your daily meal, from
            prestige perfumes to laundry care, our products help people live
            happier and healthier lives, and we create them in a way that
            respects natural resources and the environment.
          </p>

          <div className="pt-6 lg:pt-10">
            <button className="duration-500 ease-in-out font-semibold px-4 py-2 hover:bg-slate-500 border border-black rounded hover:text-white text-black">
              Discover More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto max-w-full lg:max-w-none mx-auto" data-aos="fade-up">
          <img className="w-full" src={pro} alt="Product" />
        </div>
      </div>
    </>
  );
};

export default Product;
