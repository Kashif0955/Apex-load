import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";

const placeholderImages = [
  "/pictures/offercard2.png",
  "/pictures/offercard1.png",
  "/pictures/offercard3.png",
];

const Offer = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative p-2 h-auto lg:h-[700px] w-full lg:p-10 mb-[50px] lg:mb-[200px]">
      <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-neue-plak text-white font-extrabold text-3xl md:text-4xl lg:text-5xl xl:6xl lg:mb-10">
              Services We <span className="text-red-600">Offer</span>
            </h2>
            <Button className="bg-[#D91E27] text-white rounded-xl">
              Book a Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brokers/forwarders",
                description:
                  "Seamlessly connect with reliable transporters, minimize empty miles, and optimize shipments. Gain real-time cargo visibility, faster load matching, and efficient operations—all through a cost-effective, trusted platform designed for freight forwarders.",
                link: "/brokers",
              },
              {
                title: "Transporters",
                description:
                  "Find loads faster with seamless freight matching, reduce empty miles to save on fuel, and enjoy a flat monthly subscription for consistent costs—boosting efficiency and minimizing downtime.",
                link: "/transporters",
              },
              {
                title: "Hybrids",
                description:
                  "Efficiently manage both loads and trucks with hybrid functionality—post, search, and match seamlessly. Streamline your operations, reduce downtime, and optimize routes with real-time visibility and cost-effective solutions tailored for hybrids.",
                link: "/hybrid",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden h-[500px] lg:h-[600px] shadow-lg"
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ border: "none" }}
              >
                <img
                  src={placeholderImages[index]}
                  alt={service.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <motion.div
                  className="relative h-full flex flex-col justify-end p-6"
                  initial="hidden"
                  animate={visibleCards.includes(index) ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                >
                  <h3 className="text-2xl font-bold text-gray-200 font-neue-plak">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 font-neue-plak">
                    {service.description}
                  </p>
                  <a href={service.link}>
                    <Button className="bg-red-600 text-white rounded-[30px] mt-4">
                      Learn More
                    </Button>
                  </a>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
