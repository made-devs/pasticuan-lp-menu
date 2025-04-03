import Image from "next/image";
import SliderImport from "./components/SliderImport";
import SliderExport from "./components/SliderExport";
import SliderMember from "./components/SliderMember";

export default function Home() {
  return (
    <div className="w-full font-montserrat max-w-[430px] mx-auto bg-[#0a3b50] text-white">
      {/* Header */}
      <header className="relative">
        <div className="relative w-full aspect-[377/268]">
          <Image
            src="/hero.webp"
            alt="Shipping Yard"
            fill
            className="object-cover"
          />
        </div>
        {/* <img src="/hero.webp" alt="Hero" className="w-full h-48 object-cover" /> */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-12">
            <Image
              src="/logo.webp"
              alt="Logo"
              fill
              className="object-contain drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]
"
            />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
          </div>
        </div>
      </header>

      {/* Placeholder Section */}
      <section className="relative px-4 space-y-8 pb-10">
        <Image
          src="/bg.webp" // ganti sesuai nama file lo
          alt="Background texture"
          fill
          className="object-cover opacity-50 z-0"
        />
        <div className="relative z-10 pt-2">
          {/* Menu Button */}
          <div className="flex justify-center py-4">
            <button className="bg-orange-500 text-white text-xl font-bold px-8 py-2 rounded-3xl shadow-lg">
              <span className="text-5xl font-extrabold drop-shadow-[1px_4px_3px_rgba(0,0,0,1)]">
                MENU
              </span>
            </button>
          </div>
          <div className="flex justify-between items-baseline px-2">
            <h2 className="text-lg font-extrabold mb-2">PAKET IMPORTIR</h2>
            <button className="text-sm font-semibold text-white hover:underline cursor-pointer">
              Lihat Semua ▸
            </button>
          </div>
          {/* Nanti isinya carousel atau card */}
          <div className=" px-4 pt-2 rounded">
            <SliderImport />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-baseline px-2">
            <h2 className="text-lg font-extrabold mb-2">PAKET EKSPORTIR</h2>
            <button className="text-sm font-semibold text-white hover:underline cursor-pointer">
              Lihat Semua ▸
            </button>
          </div>
          <div className="px-4 pt-2 rounded">
            <SliderExport />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-baseline px-2">
            <h2 className="text-lg font-extrabold mb-2">PAKET MEMBER</h2>
            <button className="text-sm font-semibold text-white hover:underline cursor-pointer">
              Lihat Semua ▸
            </button>
          </div>
          <div className="px-4 pt-2  rounded">
            <SliderMember />
          </div>
        </div>
      </section>
    </div>
  );
}
