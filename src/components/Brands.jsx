"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { container } from "../libs/classNames";

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
    <section className="pt-24 overflow-hidden">
      <div className={`${container} lg:px-10 md:px-8 sm:px-6 px-4 pb-20`}>
        <h2 className="max-w-xl text-[5rem] font-semibold tracking-tight leading-20">
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
            <SwiperSlide className="w-18/100!" key={i}>
              <figure className="aspect-square p-14 border border-base-content/25 rounded-lg">
                <img src={b} alt="" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
