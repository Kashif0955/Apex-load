import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Lora Kisa",
    role: "Broker",
    image: "src/assets/images/t2.jpeg",
    testimonial:
      "I save so much time, because I do not have to call the driver to find out where he/she is. I can track them on my mobile. Sometimes I feel like I am James Bond. The app itself has been very valuable to our business and helps to keep us very busy! Thank You!",
  },
  {
    name: "Faith Mukisa",
    role: "Shipper",
    image: "src/assets/images/t1.jpeg",
    testimonial:
      "ApexLoads has transformed my business by cutting wait times by 38%, boosting customer satisfaction, and fostering daily network growth. Its unparalleled efficiency solidifies ApexLoads as the top-of-the-line solution driving my success.",
  },
  {
    name: "David Lee",
    role: "Transporter",
    image: "src/assets/images/t3.webp",
    testimonial:
      "Managing a large fleet has never been easier. The comprehensive dashboard gives me a bird's-eye view of all operations, helping me make informed decisions quickly. It's like having a co-pilot for our entire logistics operation.",
  },
  {
    name: "John Smith",
    role: "Broker",
    image: "src/assets/images/t4.webp",
    testimonial:
      "I save so much time, because I do not have to call the driver to find out where he/she is. I can track them on my mobile. Sometimes I feel like I am James Bond. The app itself has been very valuable to our business and helps to keep us very busy! Thank You!",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap() + 1);
      });
    }
  }, [emblaApi]);

  return (
    <div className="p-4 mt-[50px] md:mt-[180px] lg:mt-[400px] md:p-10 pt-[150px] md:pt-[190px] bg-black">
      <div className="mb-10">
        <h1 className="font-neue-plak text-white text-center font-extrabold text-4xl md:text-5xl lg:text-6xl">
          What people <span className="text-[#D91E27]">say</span>
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 md:pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="w-full lg:w-[397px] h-auto md:h-[300px] bg-[#1b1b1b] p-5 rounded-xl flex flex-col">
                <div className="flex items-center gap-2 mb-4" style={{

                  "border-radius": "50%"


                }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-neue-plak text-white font-bold text-xl md:text-2xl">
                      {testimonial.name}
                    </h2>
                    <p className="font-neue-plak text-white text-base md:text-lg">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="font-neue-plak text-white text-center text-[16px] lg:text-[16px] lg:font-normal md:text-sm flex-grow overflow-y-auto">
                  {testimonial.testimonial}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-4 gap-[200px]">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="text-white hover:text-red-600 hover:underline"
        >
          Previous
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="text-white hover:text-red-600 hover:underline"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
