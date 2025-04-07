"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductModal from "@/components/ProductModal"; // Pastikan path-nya sesuai ya
import { eksportirPackages } from "@/data/dataPaket";

export default function SliderExport() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {eksportirPackages.map((pkg, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div className="h-full flex justify-center items-center">
              <div className="p-4 rounded text-center">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={300}
                  height={300}
                  className="rounded drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                />
                <p className="mt-4 font-bold">{pkg.title}</p>
                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setShowModal(true);
                  }}
                  className="mt-2 bg-orange-500 text-white px-4 py-1 font-bold rounded-full text-sm"
                >
                  Lihat Paket
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && selectedPackage && (
        <ProductModal
          product={selectedPackage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
