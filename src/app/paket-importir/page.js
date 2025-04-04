"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductList from "@/components/ProductList";
import ProductModal from "@/components/ProductModal";

const dummyProducts = [
  {
    title: "IMPORTIR PEMULA",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Mulai perjalanan bisnis impor Anda dengan mudah melalui Paket Importir Pemula. Dirancang khusus untuk para pemula, paket ini memberikan solusi lengkap dan efisien agar Anda dapat memulai bisnis impor tanpa kebingungan",
    price: "$100.00",
    image: "/pemula.webp",
    img_modal: "/modal-import1.webp",
  },
  {
    title: "IMPORTIR PRINCIPAL",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Solusi terbaik untuk Anda yang ingin bekerja langsung dengan produsen internasional. Paket ini dirancang untuk mempermudah akses Anda ke produk-produk unggulan dari berbagai negara.",
    price: "$100.00",
    image: "/principal.webp",
    img_modal: "/modal-import2.webp",
  },
  {
    title: "IMPORTIR UMKM",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Solusi khusus untuk membantu UMKM mengakses produk impor dengan biaya efisien. Fokus pada pengembangan bisnis Anda, kami bantu logistiknya.",
    price: "$100.00",
    image: "/umkm.webp",
    img_modal: "/modal-import3.webp",
  },
  {
    title: "IMPORTIR WHOLESALER",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Solusi ideal bagi grosir. Paket ini memberikan kemudahan akses produk impor dalam jumlah besar dengan harga kompetitif.",
    price: "$100.00",
    image: "/wholesaler.webp",
    img_modal: "/modal-import4.webp",
  },
  {
    title: "IMPORTIR FRANCHISOR ALL IN ONE",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Paket lengkap untuk franchisor yang ingin mengimpor bahan baku dari produsen internasional tanpa ribet.",
    price: "$100.00",
    image: "/franchisor.webp",
    img_modal: "/modal-import5.webp",
  },
  {
    title: "IMPORTIR DISTRIBUTOR",
    desc: "Sekilat sesuatu, biasanya berukuran kecil atau sedang, yang dikemas dan ditumpuk atau dikotakkan, parcel.",
    desc_modal:
      "Percepat distribusi dengan mengimpor produk berkualitas dalam jumlah besar dan distribusikan dengan mudah.",
    price: "$100.00",
    image: "/distributor.webp",
    img_modal: "/modal-import6.webp",
  },
];

export default function PaketImportirPage() {
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
            PAKET IMPORTIR
          </h1>
        </div>
      </div>

      {/* Product List */}
      <ProductList products={dummyProducts} onSelect={setSelectedProduct} />

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
