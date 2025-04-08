"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ImageCarousel({ title, category, href, dataSource }) {
  const images = dataSource?.[category] || [];

  return (
    <div className="w-full mb-6">
      {title && (
        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-extrabold flex-1 pl-2">{title}</h2>
          {href && (
            <Link
              href={href}
              className="text-sm font-semibold text-white hover:underline cursor-pointer whitespace-nowrap"
            >
              Lihat Semua ▸
            </Link>
          )}
        </div>
      )}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => {
          const content = (
            <div className="p-4 rounded text-center">
              <Image
                src={src}
                alt={`${title || "Promo"} ${index + 1}`}
                width={300}
                height={300}
                className="rounded drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              />
            </div>
          );

          return (
            <SwiperSlide key={index} className="pb-8">
              {content}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
