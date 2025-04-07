"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import SectionCarousel from "@/components/Promo/SectionCarousel";

export default function PaketImportirPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen text-white font-montserrat relative overflow-hidden px-4 pb-10">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/df7lzicrz/image/upload/v1743750827/bg.webp"
          alt="Background texture"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Top Bar */}
      <div className="flex items-center justify-between py-4 relative z-10">
        <Link href="/">
          <button className="text-white cursor-pointer text-xl">{`←`}</button>
        </Link>
        <div className="relative w-[80%]">
          <input
            type="text"
            placeholder="Search from here"
            className="w-full rounded-full px-4 py-2 text-sm text-black placeholder:text-gray-400"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">🔍</div>
        </div>
        <button
          className="text-white cursor-pointer text-xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Judul */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="bg-orange-500 px-6 py-2 rounded-full shadow-md">
          <h1 className="text-xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,0.7)]">
            ADDITONAL SELLING
          </h1>
        </div>
      </div>

      {/* Section + Slider Reusable */}
      <div className="relative z-10">
        <SectionCarousel
          title="PAKET BASIC"
          href="/paket-basic"
          category="paketBasic"
        />
        <SectionCarousel
          title="PAKET PRO"
          href="/paket-pro"
          category="paketPro"
        />
        <SectionCarousel
          title="PAKET PREMIUM"
          href="/paket-premium"
          category="paketPremium"
        />
        <SectionCarousel
          title="PAKET JASA REVISI"
          href="/paket-jasa-revisi"
          category="paketJasaRevisi"
        />
        <SectionCarousel
          title="PAKET CUSTOM"
          href="/paket-custom"
          category="paketCustom"
        />
        <SectionCarousel
          title="PAKET KONSULTASI PAJAK"
          href="/paket-konsultasi-pajak"
          category="paketKonsultasiPajak"
        />
        <SectionCarousel
          title="PAKET COMPRO"
          href="/paket-compro"
          category="paketCompro"
        />
      </div>
    </div>
  );
}
