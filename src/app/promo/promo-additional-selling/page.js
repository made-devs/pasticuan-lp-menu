'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import SectionCarousel from '@/components/Promo/SectionCarousel';
import ImageCarousel from '../../../components/Promo/ImageCarousel';
import { additionalSellingData } from '../../../data/promoData';

export default function AdditionalSellingPage() {
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
        <ImageCarousel
          title="PAKET BASIC"
          href="/paket-basic"
          category="paketBasic"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET PRO"
          href="/paket-pro"
          category="paketPro"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET PREMIUM"
          href="/paket-premium"
          category="paketPremium"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET JASA REVISI"
          href="/paket-jasa-revisi"
          category="paketJasaRevisi"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET CUSTOM"
          href="/paket-custom"
          category="paketCustom"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET KONSULTASI PAJAK"
          href="/paket-konsultasi-pajak"
          category="paketKonsultasiPajak"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET COMPRO"
          href="/paket-compro"
          category="paketCompro"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET BUSSINESS"
          href="/paket-bussiness"
          category="paketBussiness"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET EXPERT"
          href="/paket-expert"
          category="paketExpert"
          dataSource={additionalSellingData}
        />
        <ImageCarousel
          title="PAKET ENTERPRISE"
          href="/paket-enterprise"
          category="paketEnterprise"
          dataSource={additionalSellingData}
        />
      </div>
    </div>
  );
}
