"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Image from "next/image";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const menuItems = [
  {
    title: "ALL MENU",
    link: "/",
    children: ["PAKET IMPORTIR", "PAKET EKSPOR", "PAKET MEMBER"],
  },
  {
    title: "PROMO",
    link: "/promo",
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

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const sidebarRef = useRef();
  const contentRefs = useRef({});

  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const el = sidebarRef.current;
    if (isOpen && el) disableBodyScroll(el);
    else if (el) enableBodyScroll(el);
    return () => {
      if (el) enableBodyScroll(el);
    };
  }, [isOpen]);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            key="overlay"
            className="absolute inset-0 bg-black/60 z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Sidebar panel */}
          <motion.div
            ref={sidebarRef}
            key="sidebar"
            className="absolute right-0 top-0 w-3/4 max-w-[300px] h-screen bg-[#0a3b50] z-[999] p-4 pt-6 pb-10 space-y-6 shadow-lg overflow-y-auto scroll-smooth"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between items-center px-2">
              <Image src="/logo.webp" alt="Logo" width={120} height={30} />
              <button onClick={onClose}>
                <X className="text-white w-6 h-6 cursor-pointer" />
              </button>
            </div>

            {menuItems.map((menu) => (
              <div key={menu.title}>
                <div
                  className="w-full flex justify-between items-center bg-white/20 text-white font-bold py-2 px-4 rounded-xl shadow mb-2 cursor-pointer"
                  onClick={() => toggleMenu(menu.title)} // seluruh bar jadi bisa toggle dropdown
                >
                  {/* Tombol teks promo aja yang bisa redirect */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // biar gak ikut trigger parent
                      if (menu.link) {
                        router.push(menu.link);
                        onClose();
                      }
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    {menu.title}
                  </button>

                  {/* Panah dropdown */}
                  {menu.children && (
                    <span className="ml-2 text-white text-sm">
                      {openMenus[menu.title] ? "▾" : "▸"}
                    </span>
                  )}
                </div>

                {/* Dropdown submenu */}
                <motion.div
                  animate={{
                    height: openMenus[menu.title]
                      ? contentRefs.current[menu.title]?.scrollHeight ?? 0
                      : 0,
                    opacity: openMenus[menu.title] ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden px-4"
                >
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[menu.title] = el;
                    }}
                  >
                    {menu.children?.map((child, idx) => {
                      const slug = child.toLowerCase().replace(/\s+/g, "-");

                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            router.push(`/${slug}`);
                            onClose();
                          }}
                          className="w-full text-left py-1 pl-2 text-sm border-b border-white/20 text-white hover:underline cursor-pointer"
                        >
                          {child}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
