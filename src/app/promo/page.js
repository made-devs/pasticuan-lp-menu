// src/app/promo/page.js

"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeroHeader from "@/components/HeroHeader";
import SectionHeader from "@/components/SectionHeader";
import SliderPromo from "@/components/Promo/SliderPromo";

export default function PromoPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full font-montserrat max-w-[430px] mx-auto bg-[#0a3b50] text-white relative overflow-hidden">
      <HeroHeader onOpenMenu={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <section className="relative px-4 space-y-8 pb-10">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/df7lzicrz/image/upload/v1743750827/bg.webp"
            alt="Background texture"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 pt-2">
          <div className="flex justify-center py-4">
            <button className="bg-orange-500 text-white text-xl font-bold px-8 py-2 rounded-3xl shadow-lg">
              <span className="text-5xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,1)]">
                PROMO
              </span>
            </button>
          </div>

          {/* Section + Slider Reusable */}
          <SectionHeader title="REWARD MEMBER" />
          <SliderPromo category="rewardMember" />

          <SectionHeader title="EKSPOR" />
          <SliderPromo category="ekspor" />

          <SectionHeader title="IMPOR" />
          <SliderPromo category="impor" />

          <SectionHeader title="INTERNATIONAL" />
          <SliderPromo category="international" />

          <SectionHeader title="PASTI KILAT" />
          <SliderPromo category="pastiKilat" />

          <SectionHeader title="ADDITIONAL SELLING" />
          <SliderPromo category="additionalSelling" />

          <SectionHeader title="INTERNATIONAL MANDARIN" />
          <SliderPromo category="internationalMandarin" />
        </div>
      </section>
    </div>
  );
}
