import Link from "next/link";

export default function SectionHeader({ title, href = "" }) {
  return (
    <div className="flex items-center justify-between py-4 px-2">
      <h2 className="text-lg font-extrabold flex-1 pr-4">{title}</h2>
      <Link
        href={href}
        className="text-sm font-semibold text-white hover:underline cursor-pointer whitespace-nowrap"
      >
        Lihat Semua ▸
      </Link>
    </div>
  );
}
