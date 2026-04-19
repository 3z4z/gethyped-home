/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { container, headingMediumTextResponse } from "../libs/classNames";

import brand1 from "../assets/brands/byte-records.svg";
import brand2 from "../assets/brands/cisco.svg";
import brand3 from "../assets/brands/forbes-logo.svg";
import brand4 from "../assets/brands/guinness.svg";
import brand5 from "../assets/brands/harley-wings.svg";
import brand6 from "../assets/brands/lacoste.svg";
import brand7 from "../assets/brands/nashville-predators.svg";
import brand8 from "../assets/brands/pko-bank-polski.svg";
import brand9 from "../assets/brands/under-armour.svg";

import "swiper/css";
import "swiper/css/free-mode";
import { useMemo, useState } from "react";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
];

export default function BrandsSection() {
  const randomMultipliers = useMemo(
    () => [...brands, ...brands].map(() => Math.random() * 10 - 8), // Values between -5 and 5
    [],
  );

  // 2. This state acts as the "trigger"
  const [active, setActive] = useState(false);

  const handleTapStart = () => setActive(true);
  const handleTapEnd = () => setActive(false);
  return (
    <section className="lg:pt-24 max-sm:-mt-12 md:pt-18 sm:pt-10 pt-4 overflow-hidden">
      <div
        className={`${container} lg:px-10 md:px-8 sm:px-6 px-4 lg:pb-10 sm:pb-5`}
      >
        <h2 className={`max-w-xl ${headingMediumTextResponse}`}>
          These brands got hyped.
        </h2>
      </div>
      <div className="flex items-center cursor-grab active:cursor-grabbing pb-18">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={16}
          speed={3800}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="marquee-swiper w-full flex-4"
        >
          {[...brands, ...brands].map((b, i) => (
            <SwiperSlide
              className="lg:w-18/100! md:w-22/100! sm:w-26/100! w-30/100! py-10"
              key={i}
            >
              <motion.figure
                // Individual scale
                whileTap={{ scale: 1.1 }}
                // 3. Unique rotation:
                // If active is true, use the pre-generated multiplier.
                // If false, return to 0.
                animate={{ rotate: active ? randomMultipliers[i] : 0 }}
                onTapStart={handleTapStart}
                onTap={handleTapEnd}
                onTapCancel={handleTapEnd}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square bg-base-100 lg:p-14 md:p-8 sm:p-5 p-3 border border-base-content/25 rounded-lg"
              >
                <img src={b} alt="" />
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
