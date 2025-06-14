'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar/Sidebar';
import HeroHeader from '@/components/HeroHeader';
import { pastimurahWarehouseData } from '@/data/investment';
import ImageCarouselXL from '@/components/ImageCarouselXL';

export default function CompanyProfilePage() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex justify-center py-7">
            <button className="bg-orange-500 text-white text-xl font-bold px-8 py-2 rounded-3xl shadow-lg">
              <span className="text-2xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,1)]">
                PASTIMURAH WAREHOUSE
              </span>
            </button>
          </div>

          <ImageCarouselXL
            category="data"
            dataSource={pastimurahWarehouseData}
          />
        </div>
      </section>
    </div>
  );
}
