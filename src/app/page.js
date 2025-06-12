import Image from "next/image";
import HomePageClient from "@/components/Home/HomePageClient"; // <-- PERUBAHAN: Import komponen client baru

// Ini sekarang adalah Server Component (tidak ada "use client")
export default function Home() {
  return (
    // Layout utama tetap di sini, di-render oleh server
    <div className="w-full font-montserrat max-w-[430px] mx-auto bg-[#0a3b50] text-white relative overflow-hidden">
      {/* Semua bagian interaktif dipindahkan ke dalam HomePageClient */}
      <HomePageClient />
    </div>
  );
}
