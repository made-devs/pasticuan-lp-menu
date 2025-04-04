"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function HeroHeader({ onOpenMenu }) {
  return (
    <header className="relative">
      <div className="relative w-full aspect-[377/268]">
        <Image
          src="https://res.cloudinary.com/df7lzicrz/image/upload/v1743755832/pasticuan/hero.webp"
          alt="Shipping Yard"
          fill
          className="object-cover"
        />
      </div>

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

      <div className="absolute top-4 right-4 z-20">
        <button onClick={onOpenMenu}>
          <Menu className="text-white w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </header>
  );
}
