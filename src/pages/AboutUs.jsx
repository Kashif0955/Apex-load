
import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd"; 


export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="relative w-full flex flex-col lg:flex-row gap-6 items-center overflow-hidden py-10"
      style={{
        backgroundImage: "url('src/assets/images/map.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto py-4 px-8 md:px-10 3xl:px-24">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 justify-between md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <motion.div
            className="w-full md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0 md:overflow-visible order-first md:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative w-full h-full">
              <img
                alt="Truck"
                src="src/assets/images/truckx.svg"
                width={750}
                height={520}
                className="transition-all duration-[500ms] mt-5 ease-in object-contain md:absolute md:top-[5%] md:left-[45%] lg:left-[45%] xl:left-[70%] 2xl:left-[55%] 3xl:left-[45%] transform translate-x-0 opacity-100 md:max-w-[55vw] lg:max-w-[50vw] xl:max-w-[45vw] 2xl:max-w-[40vw]"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 z-10 order-last md:order-first">
            <motion.h1
              className="text-white text-3xl z-10 mt-4 md:pt-8 font-neue-plak font-extrabold transition-all duration-500 ease-in transform translate-x-0 opacity-100 xl:text-5xl lg:text-4xl md:text-4xl"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              About <span className="text-[#D91E27]">us</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-white text-[16px] lg:mt-9 font-neue-plak font-bold w-full transition-all ease-in duration-[500ms] transform translate-x-0 opacity-100 text-2xl md:text-sm lg:font-bold xl:text-2xl xl:font-bold 2xl:text-4xl 2xl:font-bold xl:w-[721px] 2xl:w-[900px] lg:w-[530px] md:w-[550px]"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <span className="text-xl md:text-2xl lg:text-2xl font-neue-plak font-bold lg:text-[28px] w-1/2">
                <span className="text-[#D91E27]">Apexloads</span> is
                revolutionizing Africa's logistics industry by offering a
                unified logistics platform designed to optimize operations for
                transporters and freight forwarders/ brokers.
              </span>
            </motion.p>
            <motion.p
              className="mt-4 font-neue-plak text-[16px] md:text-[18px] lg:text-xl xl:text-xl 2xl:text-[25px] text-white w-1/2 transition-all ease-in duration-[500ms] transform translate-x-0 opacity-100 text-2xl md:text-sm  xl:text-2xl xl:w-[721px] 2xl:w-[900px] lg:w-[530px] md:w-[550px] leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              Our platform combines the functionality of a load board,
              transportation management system (TMS), customer relationship
              manager (CRM), real-time shipment visibility, and invoice
              factoring. We simplify logistics management, improve efficiency,
              and enhance transparency across the supply chain. With a mission
              to drive innovation, Apexloads integrates industry-proven
              solutions tailored to Africa's unique logistics challenges.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <Button
                type="primary"
                className="btn-black"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
