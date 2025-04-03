"use client";

import Image from "next/image";
import SliderImport from "./components/SliderImport";
import SliderExport from "./components/SliderExport";
import SliderMember from "./components/SliderMember";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const menuItems = [
    {
      title: "ALL MENU",
      children: ["PAKET IMPORTIR", "PAKET EKSPOR", "PAKET MEMBER"],
    },
    {
      title: "PROMO",
      children: [
        "REWARD MEMBER",
        "PROMO EKSPOR",
        "PROMO IMPOR",
        "PROMO INTERNATIONAL",
        "PROMO PASTI KILAT",
        "PROMO ADDITIONAL SELLING",
        "PROMO INTERNATIONAL MANDARIN",
      ],
    },
    {
      title: "COMPANY PROFILE",
      children: ["PASTICUAN", "PASTIKILAT", "MEMBER", "EKSPOR", "KOMODITAS"],
    },
    {
      title: "INVESTMENT",
      children: ["HOW?", "INVESTMENT PLANS"],
    },
    {
      title: "CONTACT US",
      children: ["KOMODITAS"],
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-full font-montserrat max-w-[430px] mx-auto bg-[#0a3b50] text-white relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <header className="relative">
        {/* Hero Image */}
        <div className="relative w-full aspect-[377/268]">
          <Image
            src="/hero.webp"
            alt="Shipping Yard"
            fill
            className="object-cover"
          />
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-12">
            <Image
              src="/logo.webp"
              alt="Logo"
              fill
              className="object-contain drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="absolute top-4 right-4 z-20">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="text-white w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </header>

      {/* ===== SIDEBAR MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* === Overlay === */}
            <motion.div
              key="overlay"
              className="absolute inset-0 bg-black/60 z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* === Sidebar === */}
            <motion.div
              key="sidebar"
              className="absolute right-0 top-0 w-3/4 max-w-[300px] h-screen bg-[#0a3b50] z-[999] p-4 pt-6 space-y-6 shadow-lg overflow-y-auto scroll-smooth scrollbar-hide"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Logo + Close */}
              <div className="flex justify-between items-center px-2">
                <Image src="/logo.webp" alt="Logo" width={120} height={30} />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="text-white w-6 h-6 cursor-pointer" />
                </button>
              </div>

              {/* Menu Groups */}
              {menuItems.map((menu) => (
                <div key={menu.title}>
                  {/* Parent Button */}
                  <button
                    onClick={() => toggleMenu(menu.title)}
                    className="w-full flex justify-between items-center bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-xl shadow mb-2"
                  >
                    {menu.title}
                    <span className="text-white text-sm">
                      {openMenus[menu.title] ? "▾" : "▸"}
                    </span>
                  </button>

                  {/* Submenu */}
                  <motion.div
                    animate={{
                      height: openMenus[menu.title] ? "auto" : 0,
                      opacity: openMenus[menu.title] ? 1 : 0,
                    }}
                    className="overflow-hidden px-4 transition-all duration-300 ease-in-out"
                  >
                    {menu.children?.map((child, idx) => (
                      <div
                        key={idx}
                        className="py-1 pl-2 text-sm border-b border-white/20 text-white hover:underline cursor-pointer"
                      >
                        {child}
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== CONTENT SECTION ===== */}
      <section className="relative px-4 space-y-8 pb-10">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/bg.webp"
            alt="Background texture"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 pt-2">
          {/* MENU Button */}
          <div className="flex justify-center py-4">
            <button className="bg-orange-500 text-white text-xl font-bold px-8 py-2 rounded-3xl shadow-lg">
              <span className="text-5xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,1)]">
                MENU
              </span>
            </button>
          </div>

          {/* ===== Section: PAKET IMPORTIR ===== */}
          <SectionHeader title="PAKET IMPORTIR" />
          <div className="px- rounded">
            <SliderImport />
          </div>

          {/* ===== Section: PAKET EKSPORTIR ===== */}
          <SectionHeader title="PAKET EKSPORTIR" />
          <div className="px-4 pt-2 rounded">
            <SliderExport />
          </div>

          {/* ===== Section: PAKET MEMBER ===== */}
          <SectionHeader title="PAKET MEMBER" />
          <div className="px-4 pt-2 rounded">
            <SliderMember />
          </div>
        </div>
      </section>
    </div>
  );
}
