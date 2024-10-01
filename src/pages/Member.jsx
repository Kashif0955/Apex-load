import React, { useState, useEffect } from "react";

const Member = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10" style={{ backgroundColor: '#000000' }}>
      <div className="w-full ">
        <h1
          className={`font-neue-plak text-white text-center font-extrabold ${isMobile ? "text-4xl" : "md:text-5xl text-[72px]"
            }`}
        >
          Member of
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-[50px]">
        <img
          src="src/assets/images/kifwa.svg"
          alt="Kifwa"
          width={isMobile ? 67 : 171}
          height={isMobile ? 62 : 158}
          className="object-contain"
        />
        <img
          src="src/assets/images/uffa.svg"
          alt="Uffa"
          width={isMobile ? 84 : 216}
          height={isMobile ? 78 : 200}
          className="object-contain"
        />
        <img
          src="src/assets/images/taffa.svg"
          alt="Taffa"
          width={isMobile ? 105 : 264}
          height={isMobile ? 44 : 112}
          className="object-contain"
        />
        <img
          src="src/assets/images/feaffa.svg"
          alt="Feaffa"
          width={isMobile ? 44 : 112}
          height={isMobile ? 70 : 180}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Member;
