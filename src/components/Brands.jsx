"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

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
  return (
    <section className="lg:pt-24 md:pt-18 sm:pt-10 pt-4 overflow-hidden">
      <div
        className={`${container} lg:px-10 md:px-8 sm:px-6 px-4 lg:pb-20 sm:pb-15 pb-10`}
      >
        <h2 className={`max-w-xl ${headingMediumTextResponse}`}>
          These brands got hyped.
        </h2>
      </div>
      <div className="flex items-center cursor-grab active:cursor-grabbing pb-28">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={16}
          speed={3800}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="marquee-swiper w-full flex-4"
        >
          {[...brands, ...brands].map((b, i) => (
            <SwiperSlide
              className="lg:w-18/100! md:w-22/100! sm:w-26/100! w-30/100!"
              key={i}
            >
              <figure className="aspect-square lg:p-14 md:p-8 sm:p-5 p-3 border border-base-content/25 rounded-lg">
                <img src={b} alt="" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
