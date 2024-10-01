import React from "react";

export default function DownloadAdd() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center py-10 overflow-visible bg-[#D91E27]">
      <h1 className="font-neue-plak text-white font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-4">
        Download the Apexloads Mobile App
      </h1>
      <div
        className="relative w-full max-w-[1200px] h-[300px] sm:h-[500px] lg:h-[700px] flex flex-col justify-end items-center pt-[400px] lg:items-start lg:flex-row lg:justify-around 2xl:mt-[00px] xl:mt-[10px] lg:mt-[33px]"
        style={{
          backgroundImage: "url('src/assets/images/phone.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Buttons for small screens */}
        <div className="flex flex-row lg:hidden items-center justify-center gap-4 mb-8 w-full">
          <a
            href="#"
            className="cursor-pointer"
            aria-label="Download from App Store"
          >
            <img
              alt="Download on the App Store"
              src="src/assets/images/Appstore.png"
              className="h-[40px] w-[120px] sm:h-[50px] sm:w-[150px] md:h-[60px] md:w-[180px]"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mobile.apexloads&hl=en"
            className="cursor-pointer"
            aria-label="Get it on Google Play"
          >
            <img
              alt="Get it on Google Play"
              src="src/assets/images/googlestore.png"
              className="h-[30px] w-[120px] sm:h-[37px] sm:w-[150px] md:h-[45px] md:w-[180px]"
            />
          </a>
        </div>

        {/* Hidden images for larger screens */}
        <div className="hidden lg:flex flex-row items-center justify-around w-full">
          <a
            href="#"
            className="cursor-pointer mb-0 lg:self-center lg:mb-[5%]"
            aria-label="Download from App Store"
          >
            <img
              alt="Download on the App Store"
              src="src/assets/images/Appstore.png"
              className="hidden"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mobile.apexloads&hl=en"
            className="cursor-pointer lg:self-center lg:mb-[5%]"
            aria-label="Get it on Google Play"
          >
            <img
              alt="Get it on Google Play"
              src="src/assets/images/googlestore.png"
              className="hidden"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
