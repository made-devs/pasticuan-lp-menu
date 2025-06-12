"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Komponen statis di-import seperti biasa
import HeroHeader from "@/components/HeroHeader";
import SectionHeader from "@/components/SectionHeader";
import SliderSkeleton from "./SliderSkeleton"; // <-- PERUBAHAN: Import skeleton

// --- PERUBAHAN: Semua slider sekarang di-load secara dinamis ---
const SliderImport = dynamic(() => import("@/components/Home/SliderImport"), {
  loading: () => <SliderSkeleton />, // Tampilkan skeleton saat SliderImport loading
  ssr: false, // Penting: nonaktifkan SSR untuk komponen Swiper agar tidak bentrok
});
const SliderExport = dynamic(() => import("@/components/Home/SliderExport"), {
  loading: () => <SliderSkeleton />,
  ssr: false,
});
const SliderMember = dynamic(() => import("@/components/Home/SliderMember"), {
  loading: () => <SliderSkeleton />,
  ssr: false,
});
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"));

function SliderSectionWrapper({ children }) {
  return <div className="px-4 pt-2 rounded">{children}</div>;
}

export default function HomePageClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeroHeader onOpenMenu={() => setIsOpen(true)} />
      {isOpen && <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />}

      <section className="relative px-4 space-y-8 pb-10">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/df7lzicrz/image/upload/v1744096133/pasticuan/bg-long.webp"
            alt="Background texture"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 pt-2">
          {/* ... sisa kode menu button ... */}
          <div className="flex justify-center py-4">
            <button className="bg-orange-500 text-white text-xl font-bold px-8 py-2 rounded-3xl shadow-lg">
              <span className="text-5xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,1)]">
                MENU
              </span>
            </button>
          </div>

          <SectionHeader title="PAKET IMPORTIR" href="/paket-importir" />
          <SliderSectionWrapper>
            <SliderImport />
          </SliderSectionWrapper>

          <SectionHeader title="PAKET EKSPORTIR" href="/paket-ekspor" />
          <SliderSectionWrapper>
            <SliderExport />
          </SliderSectionWrapper>

          <SectionHeader title="PAKET MEMBER" href="/paket-member" />
          <SliderSectionWrapper>
            <SliderMember />
          </SliderSectionWrapper>
        </div>
      </section>
    </>
  );
}
