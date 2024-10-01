import React, { useState, useRef } from "react";

const sections = [
  {
    title: "Transparent Pricing:",
    content:
      "Enjoy fixed subscription rates with no hidden fees or commissions per load, giving you full control over your costs.",
  },
  {
    title: "Boosted Efficiency:",
    content:
      "Our real-time load matching and tracking features streamline operations, helping you save time and reduce inefficiencies.",
  },
  {
    title: "Improved Cash Flow:",
    content:
      "With Apexloads' factoring services, you can access immediate payment solutions to keep your business running smoothly.",
  },
  {
    title: "Enhanced Compliance and Insights:",
    content:
      "Our CRM tools help build stronger client relationships while ensuring compliance with industry standards and regulations.",
  },
];

const WhyChooseUs = () => {
  const [showGradient, setShowGradient] = useState(true);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      setShowGradient(!isAtBottom);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="src/assets/images/truckman.webp"
            alt="truckman"
            className="w-full max-w-md lg:max-w-lg"
            style={{ height: "auto" }} // Remove width setting to make it responsive
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-neue-plak text-white font-extrabold text-4xl mb-6 text-center lg:text-left lg:text-5xl">
            Why choose <span className="text-[#D91E27]">Us</span>
          </h1>
          <div className="w-full mt-8 relative overflow-hidden">
            <div className="pr-1 transition-all ease-in-out duration-1000">
              <div className="md:border-l-2 md:ml-[60px] lg:ml-0 md:border-l-white md:border-solid">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="text-white h-[300px] md:h-[450px] overflow-y-auto scrollbar-hide md:ml-10"
                >
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="bg-red-600 p-4 lg:p-9 mx-2 md:ml-1 md:p-5 mb-4 lg:h-[200px] md:h-[160px] border-l-4 border-[#D91E27] overflow-hidden"
                    >
                      <h3 className="text-[16px] md:text-2xl lg:text-3xl font-neue-plak font-bold mb-2">
                        {section.title}
                      </h3>
                      <p className="text-[16px] lg:text-[18px] font-neue-plak font-normal">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`absolute h-[40px] md:h-28 bottom-0 left-0 right-0 bg-gradient-to-t from-black from-50% to-transparent transition-opacity ease-in-out duration-300 ${showGradient ? "opacity-100" : "opacity-0"
                }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Media Query Styles */}
      <style jsx>{`
        @media (max-width: 390px) { /* Target iPhone 14 Pro */
          img {
            width: 100% !important; /* Make image full width */
            height: auto; /* Maintain aspect ratio */
          }
          .overflow-y-auto {
            height: auto; /* Disable scroll on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
