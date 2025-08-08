"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductList from "@/components/ProductList";
import ProductModal from "@/components/ProductModal";
import paketRisetBelanja from "@/data/paketRisetBelanja";

export default function PaketRisetBelanjaPage() {
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
        <div className="relative w-[80%]">{/* Search bar (optional) */}</div>
        <button
          className="text-white cursor-pointer text-xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Judul */}
      <div className="flex justify-center mb-4 relative z-10">
        <div className="bg-orange-500 px-6 py-2 rounded-full shadow-md">
          <h1 className="text-xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,0.7)]">
            PAKET RISET & BELANJA
          </h1>
        </div>
      </div>

      {/* Deskripsi Tambahan */}
      <div className="text-center text-white/95 text-sm leading-relaxed mt-4 relative z-10 px-2">
        <p className="mb-2">
          Mau mulai bisnis impor, tapi takut ribet atau kena tipu? Tenang, ada
          solusinya! 💡
        </p>
        <p>
          Kenalin, Paket Riset & Belanja Marketplace China dari Pasticuan –
          solusi lengkap untuk bantu kamu impor dengan aman, mudah, dan cuan
          maksimal,{" "}
          <strong className="text-yellow-300 font-bold uppercase">
            PROFIT HINGGA 3000% LOH!
          </strong>{" "}
          🚀
        </p>
      </div>

      {/* Product List */}
      <ProductList products={paketRisetBelanja} onSelect={setSelectedProduct} />

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
