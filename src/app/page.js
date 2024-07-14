"use client";
import Image from "next/image";
import car from "../../src/assets/car6.png";
import car1 from "../../src/assets/car5.png";
import car2 from "../../src/assets/car10.png";
import { Nunito_Sans } from "next/font/google";
const bono = Nunito_Sans({ subsets: ["latin"], weight: "500" });
const bono2 = Nunito_Sans({ subsets: ["latin"], weight: "900" });
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import { RiSteeringFill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { PiSpeedometerLight } from "react-icons/pi";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div className=" w-full h-screen bg-gradient-to-b from-gray-300 to-white px-10 py-10 embla">
      <div className=" flex items-center justify-between">
        <h1 className=" text-3xl font-extrabold text-gray-500 uppercase">
          ArCars
        </h1>
        <div
          className={`${bono.className} flex items-center gap-5 tex uppercase `}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h1 className=" font-bold">Home</h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <h1 className=" font-bold">About</h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <h1 className=" font-bold">Services</h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
          >
            <h1 className=" font-bold">Details</h1>
          </motion.div>
        </div>
        <div className=" flex items-center gap-2">
          <div
            className="bg-cover w-10 h-10 rounded-full bg-gray-400"
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})`,
            }}
          ></div>
          <h1>My profile</h1>
        </div>
      </div>
      <div className=" w-full h-auto flex justify-between mt-52 items-center ">
        <div className=" flex flex-col  justify-center">
          <h1
            className=" text-5xl text-gray-400 embla__prev"
            onClick={scrollPrev}
          >
            <MdChevronLeft />
          </h1>
          <div className=" flex flex-col gap-5  text-3xl mt-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className=" px-5 py-5 bg-white rounded-full shadow">
                <FaFacebookF />
              </h1>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className=" px-5 py-5 bg-white rounded-full shadow">
                <FaWhatsapp />
              </h1>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className=" px-5 py-5 bg-white rounded-full shadow">
                <FaInstagram />
              </h1>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h1 className=" px-5 py-5 bg-white rounded-full shadow">
                <FaTwitter />
              </h1>
            </motion.div>
          </div>
        </div>
        <div
          className="embla__viewport flex overflow-hidden scrollbar-hide  w-full justify-center"
          ref={emblaRef}
        >
          <div className="  embla__container">
            <div
              className={` flex-shrink-0 flex flex-col w-full items-center embla__slide`}
            >
              <motion.div
                className=" flex flex-col items-center z-0"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1 className=" text-6xl font-extrabold text-gray-400 uppercase">
                  jaguar
                </h1>
                <h1
                  className={`${bono2.className} uppercase text-[200px] font-extrabold text-gray-500 -mt-14`}
                >
                  F-pace
                </h1>
              </motion.div>
              <motion.div
                className="z-50 "
                initial={{ x: 1410 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <Image src={car} width={1100} className=" -mt-40 " />
              </motion.div>
              <div className=" flex items-center gap-5 -mt-44">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className=" w-40 h-14 flex items-center justify-center bg-blue-600 text-white ">
                    Rent now
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className=" w-40 h-14 flex items-center justify-center text-black border border-black ">
                    Details
                  </div>
                </motion.div>
              </div>
            </div>
            <div
              className={` flex-shrink-0 flex flex-col w-full items-center embla__slide`}
            >
              <motion.div
                className=" flex flex-col items-center z-0"
                initial={{ y: -250 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1 className=" text-6xl font-extrabold text-gray-400 uppercase">
                  lexus
                </h1>
                <h1
                  className={`${bono2.className} uppercase text-[200px] font-extrabold text-gray-500 -mt-14`}
                >
                  LC series
                </h1>
              </motion.div>
              <motion.div
                className="z-50"
                initial={{ x: 1415 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                <Image src={car1} width={1100} className=" -mt-40 z-10" />
              </motion.div>

              <div className=" flex items-center gap-5 ">
                <div className=" w-40 h-14 flex items-center justify-center bg-gray-600 text-white ">
                  Rent now
                </div>
                <div className=" w-40 h-14 flex items-center justify-center text-black border border-black ">
                  Details
                </div>
              </div>
            </div>
            <div
              className={` flex-shrink-0 flex flex-col w-full items-center embla__slide`}
            >
              <motion.div
                className=" flex flex-col items-center z-0"
                initial={{ y: -250 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1 className=" text-6xl font-extrabold text-gray-400 uppercase">
                  toyoto
                </h1>
                <h1
                  className={`${bono2.className} uppercase text-[200px] font-extrabold text-gray-500 -mt-14`}
                >
                  camry
                </h1>
              </motion.div>
              <motion.div
                className="z-50"
                initial={{ x: 1415 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                <Image src={car2} width={1100} className=" -mt-32 z-10" />
              </motion.div>

              <div className=" flex items-center gap-5 -mt-2 ">
                <div className=" w-40 h-14 flex items-center justify-center bg-black text-white ">
                  Rent now
                </div>
                <div className=" w-40 h-14 flex items-center justify-center text-black border border-black ">
                  Details
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  justify-center">
          <h1
            className=" text-5xl text-gray-400 embla__next -mt-96"
            onClick={scrollNext}
          >
            <MdChevronRight />
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
