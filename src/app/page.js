'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroHeader from '@/components/HeroHeader';
import Sidebar from '@/components/Sidebar/Sidebar';
import SectionHeader from '@/components/SectionHeader';
import SliderImport from '@/components/Home/SliderImport';
import SliderExport from '@/components/Home/SliderExport';
import SliderMember from '@/components/Home/SliderMember';
import ImageCarousel from '../components/Promo/ImageCarousel';

export default function Home() {
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
                MENU
              </span>
            </button>
          </div>

          <ImageCarousel
            title="REWARD MEMBER"
            href="/reward-member"
            category="rewardMember"
            dataSource={promoData}
          />

          <SectionHeader title="PAKET IMPORTIR" href="/paket-importir" />
          <div className="px-4 pt-2 rounded">
            <SliderImport />
          </div>

          <SectionHeader title="PAKET EKSPORTIR" href="/paket-ekspor" />
          <div className="px-4 pt-2 rounded">
            <SliderExport />
          </div>

          <SectionHeader title="PAKET MEMBER" href="/paket-member" />
          <div className="px-4 pt-2 rounded">
            <SliderMember />
          </div>
        </div>
      </section>
    </div>
    // <h1>Hello</h1>
  );
}
