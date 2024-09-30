// import React from 'react';
// import 'swiper/swiper-bundle.css'; // Import Swiper CSS
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

// const testimonials = [
//   {
//     name: 'Lorem Porta',
//     location: 'California',
//     avatar: './images/pexels-photo-1571458.jpeg',
//     quote: 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with intexure.',
//   },
//   {
//     name: 'Nulla Amet',
//     location: 'Los Angeles',
//     avatar: './images/pexels-photo-1634580.webp',
//     quote: 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with intexure.',
//   },
//   {
//     name: 'Dolor Ipsum',
//     location: 'New York City',
//     avatar: './images/pexels-photo-1648771.webp',
//     quote: 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with intexure.',
//   },
//   {
//     name: 'John Doe',
//     location: 'San Francisco',
//     avatar: './images/pexels-photo-1741232.jpeg',
//     quote: 'Excellent service, I loved the efficiency and professionalism.',
//   },
//   {
//     name: 'Jane Smith',
//     location: 'Chicago',
//     avatar: './images/pexels-photo-1841233.jpeg',
//     quote: 'They went above and beyond, highly recommended.',
//   },
//   {
//     name: 'Emily Taylor',
//     location: 'Austin',
//     avatar: './images/pexels-photo-1941234.jpeg',
//     quote: 'Best experience I have had so far with any company.',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testim" className="p_3">
//       <div className="container-xl">
//         <div className="proj_h1 row mb-4">
//           <div className="col-md-8">
//             <div className="proj_h1l">
              
//               <h2 className="fw-normal1 mb-0">What people  <span className="fw-normal text-danger">say</span></h2>
          
//             </div>
//           </div>
//         </div>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="mySwiper"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="testim_1i shadow_box position-relative">
//                 <div className="testim_1i1 text-center pt-5 pb-5 px-4">
//                   <h5>{testimonial.name}</h5>
//                   <h6 className="text-muted mb-3">
//                     <i className="fa fa-map-marker"></i> {/* Location Icon */}
//                     {` ${testimonial.location}`}
//                   </h6>
//                   <img
//                     src={testimonial.avatar}
//                     alt="avatar"
//                     className="rounded-circle"
//                   />
//                   <p className="mt-3 mb-0">
//                     <i className="fa fa-quote-left"></i> {/* Quote Icon */}
//                     {` ${testimonial.quote}`}
//                   </p>
//                 </div>
//                 <div className="testim_1i2 position-absolute top-0">
//                   <span className="d-inline-block bg_red text-white p-3 fs-2">
//                     <i className="fa fa-quote-left"></i> {/* Floating Quote Icon */}
//                   </span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useEffect, useState } from "react";
import { Button } from "antd";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Lora Kisa",
    role: "Broker",
    image: "/pictures/lorakisa.png",
    testimonial:
      "I save so much time, because I do not have to call the driver to find out where he/she is. I can track them on my mobile. Sometimes I feel like I am James Bond. The app itself has been very valuable to our business and helps to keep us very busy! Thank You!",
  },
  {
    name: "Faith Mukisa",
    role: "Shipper",
    image: "/pictures/testimonials3.png",
    testimonial:
      "ApexLoads has transformed my business by cutting wait times by 38%, boosting customer satisfaction, and fostering daily network growth. Its unparalleled efficiency solidifies ApexLoads as the top-of-the-line solution driving my success.",
  },
  {
    name: "David Lee",
    role: "Transporter",
    image: "/pictures/testimonials2.png",
    testimonial:
      "Managing a large fleet has never been easier. The comprehensive dashboard gives me a bird's-eye view of all operations, helping me make informed decisions quickly. It's like having a co-pilot for our entire logistics operation.",
  },
  {
    name: "David Lee",
    role: "Transporter",
    image: "/pictures/testimonials2.png",
    testimonial:
      "Managing a large fleet has never been easier. The comprehensive dashboard gives me a bird's-eye view of all operations, helping me make informed decisions quickly. It's like having a co-pilot for our entire logistics operation.",
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
    <div className="p-4 mt-50 md:mt-180 lg:mt-400 md:p-10 pt-150 md:pt-190 bg-black">
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
              <div className="w-full lg:w-397 h-auto md:h-300 bg-[#1b1b1b] p-5 rounded-xl flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={87}
                    height={87}
                    className="rounded-full"
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

      <div className="flex justify-center mt-4 gap-4">
        <Button
          onClick={() => emblaApi?.scrollPrev()}
          className="text-white hover:text-red-600"
        >
          Previous
        </Button>
        <Button
          onClick={() => emblaApi?.scrollNext()}
          className="text-white hover:text-red-600"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
