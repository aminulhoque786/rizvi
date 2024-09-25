import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pro from "../assets/tikjpg.jpg";

const Motive = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-container flex flex-col lg:flex-row items-center mx-auto pt-16 lg:pt-32 gap-9 px-4 lg:px-0">
      {/* Text Section */}
      <div className="w-full lg:w-2/5 pt-8 lg:pt-16" data-aos="fade-up" data-aos-delay="1000">
        <h2
          className="font-pops text-[20px] lg:text-[30px]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Motive
        </h2>
        <p
          className="font-pops text-black text-sm lg:text-base"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Our motive is one and only to give satisfaction with purity. Over the
          years, with this moto, we are working and this has taken us to this
          far with belief and trust for our excellence.
        </p>

        <div className="pt-8 lg:pt-10 flex gap-4">
          <button className="font-gail duration-500 ease-in-out font-semibold px-4 py-1 hover:bg-slate-500 border border-black hover:text-white text-black">
            Explore
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/4 max-w-container mx-auto" data-aos="fade-up">
        <img className="w-full py-5" src={pro} alt="Motive" />
      </div>
    </div>
  );
};

export default Motive;
