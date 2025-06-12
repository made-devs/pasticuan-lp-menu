"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProductModal from "@/components/ProductModal"; // <-- PERUBAHAN: Baris ini tidak dipakai lagi
import { importirPackages } from "@/data/dataPaket";
import dynamic from "next/dynamic"; // <-- PERUBAHAN: Import 'dynamic'

// <-- PERUBAHAN: Muat ProductModal hanya saat dibutuhkan
const ProductModal = dynamic(() => import("@/components/ProductModal"));

export default function SliderImport() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {importirPackages.map((pkg, index) => (
          // <-- PERUBAHAN: Gunakan key yang lebih unik dari 'index'
          <SwiperSlide key={pkg.title || index} className="pb-8">
            <div className="p-4 rounded text-center">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={300}
                height={300}
                className="rounded drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                // <-- PERUBAHAN: Prioritaskan gambar pertama agar dimuat lebih cepat
                priority={index === 0}
              />
              <p className="mt-4 font-bold">{pkg.title}</p>
              <button
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowModal(true);
                }}
                className="mt-2 bg-orange-500 text-white px-4 py-1 font-bold rounded-full text-sm cursor-pointer"
              >
                LIHAT PAKET
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Logika ini tetap sama, tapi berkat 'dynamic import',
      komponen modal baru akan dimuat saat showModal menjadi true */}
      {showModal && selectedPackage && (
        <ProductModal
          product={selectedPackage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
