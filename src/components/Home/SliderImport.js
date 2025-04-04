"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const importirPackages = [
  {
    title: "IMPORTIR PEMULA",
    price: "$100.00",
    image:
      "https://res.cloudinary.com/df7lzicrz/image/upload/v1743751513/pasticuan/pemula.webp",
  },
  {
    title: "IMPORTIR PRINCIPAL",
    price: "$100.00",
    image:
      "https://res.cloudinary.com/df7lzicrz/image/upload/v1743751666/pasticuan/principal.webp",
  },
  {
    title: "IMPORTIR UMKM",
    price: "$100.00",
    image:
      "https://res.cloudinary.com/df7lzicrz/image/upload/v1743751789/pasticuan/umkm.webp",
  },
];

export default function SliderImport() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        className=""
      >
        {importirPackages.map((pkg, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div className=" p-4 rounded text-center">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={300}
                height={300}
                className="rounded drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              />
              <p className="mt-4 font-bold">{pkg.title}</p>
              <p>{pkg.price}</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 font-bold rounded-full text-sm">
                Add Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
