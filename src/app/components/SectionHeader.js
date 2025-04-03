export default function SectionHeader({ title }) {
  return (
    <div className="flex justify-between items-baseline py-4 px-2">
      <h2 className="text-lg font-extrabold mb-2">{title}</h2>
      <button className="text-sm font-semibold text-white hover:underline cursor-pointer">
        Lihat Semua ▸
      </button>
    </div>
  );
}
