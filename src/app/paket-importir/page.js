"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/app/components/Sidebar/Sidebar";

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
      <div className="space-y-6 relative z-10">
        {dummyProducts.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProduct(item)}
            className="flex items-start gap-4 p-3 border-b border-white/50 last:border-none cursor-pointer"
          >
            <div className="w-24 h-24 relative shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="font-bold text-sm">{item.title}</h2>
              <p className="text-xs text-white/80 leading-tight">{item.desc}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">{item.price}</span>
                <button className="text-xs bg-orange-500 text-white font-semibold px-3 py-1 rounded-full shadow hover:bg-orange-600">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/60 flex items-end justify-center px-4 pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProduct(null);
              }
            }}
          >
            <motion.div
              className="absolute inset-0 backdrop-blur-sm pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="relative z-10 w-full max-w-[430px] bg-gradient-to-b from-white via-white to-blue-200 rounded-t-3xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Gambar */}
              <div className="w-full flex justify-center pt-4">
                <div className="relative w-[90%] aspect-[2/2] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={selectedProduct.img_modal}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Konten */}
              <div className="p-4 pt-6 px-5 space-y-3">
                <div className="bg-black/40 rounded-xl p-3">
                  <h2 className="text-[23px] font-extrabold text-white px-4 leading-tight text-center">
                    PAKET {selectedProduct.title}
                  </h2>
                  <p className="text-sm leading-tight text-white/90 px-1 py-2">
                    {selectedProduct.desc_modal}
                  </p>
                </div>
                <button
                  onClick={() => alert("ORDER NOW!")}
                  className="w-full bg-orange-500 text-white font-bold py-3 rounded-full shadow-md hover:bg-orange-600 transition"
                >
                  ORDER NOW
                </button>
              </div>

              {/* Tombol Tutup */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-3 text-white text-3xl leading-none"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
