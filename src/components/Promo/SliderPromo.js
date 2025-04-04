// src/components/Home/SliderPromo.js

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import promoData from "@/data/promoData";

export default function SliderPromo({ category }) {
  const images = promoData[category] || [];

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div className="p-4 rounded text-center">
              <Image
                src={src}
                alt={`Promo ${index + 1}`}
                width={300}
                height={300}
                className="rounded drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
