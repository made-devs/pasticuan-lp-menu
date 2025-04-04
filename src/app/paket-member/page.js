"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import ProductList from "@/app/components/ProductList";
import ProductModal from "@/app/components/ProductModal";

const dummyMemberProducts = [
  {
    title: "MEMBER GOLD",
    desc: "Paket dasar untuk pemula yang ingin mencoba menjadi member.",
    desc_modal:
      "Paket MEMBER GOLD dirancang untuk Anda yang baru mulai bergabung dan ingin menikmati keuntungan dasar sebagai member.",
    price: "$30.00",
    image: "/membergold.webp",
    img_modal: "/modal-ekspor1.webp",
  },
  {
    title: "MEMBER PLATINUM",
    desc: "Paket dengan benefit lebih untuk pengguna aktif.",
    desc_modal:
      "Paket MEMBER PLATINUM cocok untuk Anda yang mulai aktif menggunakan layanan kami. Dapatkan diskon dan dukungan ekstra.",
    price: "$50.00",
    image: "/memberplatinum.webp",
    img_modal: "/modal-ekspor1.webp",
  },
  {
    title: "MEMBER DIAMOND",
    desc: "Paket eksklusif dengan akses penuh ke semua fitur premium.",
    desc_modal:
      "Paket MEMBER DIAMOND memberikan akses penuh ke fitur premium dan layanan prioritas, cocok untuk pengguna profesional.",
    price: "$80.00",
    image: "/memberdiamond.webp",
    img_modal: "/modal-ekspor1.webp",
  },
];

export default function PaketMemberPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen text-white font-montserrat relative overflow-hidden px-4 pb-10">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.webp"
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
            PAKET MEMBER
          </h1>
        </div>
      </div>

      {/* Product List */}
      <ProductList
        products={dummyMemberProducts}
        onSelect={setSelectedProduct}
      />

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
