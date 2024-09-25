import React from "react";

const Tail = () => {
  return (
    <>
      <div className="text-center pt-8">
        <h2 className="font-pops text-[28px] lg:text-[40px]">Our Location</h2>
      </div>

      <div className="relative max-w-container mx-auto p-4 lg:p-10">
        {/* Ping animation */}
        <div className="relative">
          <span className="absolute h-4 w-4 left-[150px] lg:left-[200px] top-[80px] lg:top-[100px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
        </div>

        {/* Google Maps Embed */}
        <iframe
          className="w-full h-[250px] lg:h-[400px] mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.972513582973!2d90.39764337370886!3d23.71267557869609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91da5748363%3A0xe83b157c924275ca!2sMitford%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1726662266506!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Tail;
