import React, { useEffect, useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.apexloads.com/api/v2/website/home-data"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 50);
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
      return () => clearInterval(counter);
    }, [target, duration]);

    return <span>{count}</span>;
  };

  return (
    <div className="h-[400px] lg:h-[500px] bg-[#D91E27] w-full flex justify-center overflow-visible lg:py-[100px] relative sm:py-[50px]">
      <div className="max-w-[955px] px-4 md:px-7">
        <h1 className="font-neue-plak text-white text-center font-extrabold pt-5 md:pt-0 text-[32px] md:text-[48px] mb-4">
          AFRICA'S #1 LOAD BOARD
        </h1>
        <p className="font-neue-plak text-white text-center text-[18px] sm:text-[16px]">
          Empowering Africa's 3PLs with cutting-edge technology and seamless
          logistics solutions. Join the Apexloads Revolution!
        </p>
      </div>

      <div className="w-[420px] md:w-[600px] lg:w-[845px] pt-[20px] absolute top-[55%] left-1/2 transform -translate-x-1/2">
        <div
          className="relative w-full h-0 pb-[56.25%] bg-black"
          style={{
            backgroundImage: `url('src/assets/images/thumbnail.png')`,
          }}
        >
          <button
            onClick={handlePlayVideo}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-white bg-red-600 border border-red-600 rounded-[50px] flex justify-center items-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-6.286 3.623A1 1 0 017 13.917V7.083a1 1 0 011.466-.882l6.286 3.623a1 1 0 010 1.764z"
              />
            </svg>
          </button>
        </div>
        {isPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-[90vw] max-w-[90vw] h-[50.625vw]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mifRY9-zlwQ"
                title="How Apexloads is Solving the Critical Logistics Challenges in East Africa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-3xl"
                aria-label="Close video"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="relative w-full max-w-[845px] mb-7 px-4 sm:px-6 md:px-8">
          <div className="p-4 sm:p-6 md:p-8">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <div className="flex col gap-8 justify-center lg:gap-[70px]">
                <div>
                  <h2 className="font-neue-plak text-center text-[#D91E27] font-extrabold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[72px]">
                    <Counter
                      target={apiData?.user_signups || 0}
                      duration={2000}
                    />
                    +
                  </h2>
                  <p className="font-neue-plak text-center text-[#D91E27] text-[12px] sm:text-[14px] md:text-[14px]">
                    Users Signup
                  </p>
                </div>
                <div>
                  <h2 className="font-neue-plak text-center text-[#D91E27] font-extrabold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[72px]">
                    <Counter
                      target={apiData?.loads_posted_covered || 0}
                      duration={2000}
                    />
                  </h2>
                  <p className="font-neue-plak text-center text-[#D91E27] text-[12px] sm:text-[14px] md:text-[14px]">
                    Loads Posted/Covered
                  </p>
                </div>
                <div>
                  <h2 className="font-neue-plak text-center text-[#D91E27] font-extrabold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[72px]">
                    <Counter
                      target={apiData?.trucks_posted || 0}
                      duration={2000}
                    />
                    +
                  </h2>
                  <p className="font-neue-plak text-center text-[#D91E27] text-[12px] sm:text-[14px] md:text-[14px]">
                    Trucks Posted
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
