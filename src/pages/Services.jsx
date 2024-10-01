import React, { useEffect, useRef, useState } from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import '../assets/styles/services.css';

const Team = () => {
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
    <section className="pt-[120px] pb-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div className="text-left">
            {/* <span className="text-lg text-gray-600">Our Services</span> */}
            <h2 className="text-3xl font-bold text-white">Services We Offer</h2>
          </div>
          <div className="text-right">
            <Button className="btn-demo rounded-xl text-black">
              View All
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Brokers/forwarders",
              description:
                "Seamlessly connect with reliable transporters, minimize empty miles, and optimize shipments. Gain real-time cargo visibility, faster load matching, and efficient operations—all through a cost-effective, trusted platform designed for freight forwarders.",
              imgSrc: "src/assets/images/offercard2 (1).webp",
            },
            {
              title: "Transporters",
              description: `Find loads faster with seamless freight matching, reduce empty miles to save on fuel, and enjoy a flat monthly subscription for consistent costs—boosting efficiency and minimizing downtime. We understand the critical role of freight forwarders and brokers in global logistics.`,
              imgSrc: "src/assets/images/offercard1.webp",
            },
            {
              title: "Hybrids",
              description:
                "Efficiently manage both loads and trucks with hybrid functionality—post, search, and match seamlessly. Streamline your operations, reduce downtime, and optimize routes with real-time visibility and cost-effective solutions tailored for hybrids.",
              imgSrc: "src/assets/images/offercard3.webp",
            },
          ].map((service, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative card transition-transform duration-300 rounded-5 " style={{
                background: "#12151A"
              }}
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-[300px] object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-left"
                initial="hidden"
                animate={visibleCards.includes(index) ? "visible" : "hidden"}
                variants={fadeInUpVariants}
              >
                <h5 className="text-white font-bold text-lg">{service.title}</h5>
                <hr className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white h-0.5 my-2" />
                <p className="text-gray-400 text-sm">{service.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                    <CiFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                    <CiTwitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                    <CiInstagram size={24} />
                  </a>
                </div>
              </motion.div>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
