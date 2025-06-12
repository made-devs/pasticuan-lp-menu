// src/app/promo/page.js

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeroHeader from "@/components/HeroHeader";
import { promoData } from "../../data/promoData";
import ImageCarousel from "@/components/Promo/ImageCarousel";

export default function PromoPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Total height:", document.documentElement.scrollHeight);
  }, []);

  return (
    <div className="w-full font-montserrat max-w-[430px] mx-auto bg-[#0a3b50] text-white relative overflow-hidden">
      <HeroHeader onOpenMenu={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <section className="relative px-4 space-y-8 pb-10">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/df7lzicrz/image/upload/v1744096500/pasticuan/bg_htorhr.webp"
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

          <ImageCarousel
            title="CUAN GILA-GILAAN JUNI"
            href="/promo/cuan-gila-gilaan-juni"
            category="promoCuanJuni"
            dataSource={promoData}
          />
          <ImageCarousel
            title="22 SUPPORT BISNIS GRATIS SENILAI 50 JT RUPIAH"
            href="/promo/cuan-gila-gilaan-juni"
            category="supportBisnis"
            dataSource={promoData}
          />
          <ImageCarousel
            title="PROMO INVESTMENT"
            href="/promo/investment"
            category="rewardMember"
            dataSource={promoData}
          />
          <ImageCarousel
            title="REWARD MEMBER"
            href="/promo/reward-member"
            category="rewardMember"
            dataSource={promoData}
          />
        </div>
      </section>
    </div>
  );
}
