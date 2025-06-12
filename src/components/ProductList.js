// components/ProductList.js
import Image from "next/image";

export default function ProductList({ products, onSelect }) {
  return (
    <div className="py-8 relative z-10">
      {products.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-3 border-b border-white/50 last:border-none"
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
            <h2 className="font-bold text-[12px]">{item.title}</h2>
            <p className="text-xs text-white/80 leading-tight">{item.desc}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-sm">{item.price}</span>
              <button
                onClick={() => onSelect(item)}
                className="text-xs bg-orange-500 text-white font-semibold px-3 py-1 rounded-full shadow hover:bg-orange-600 cursor-pointer"
              >
                {item.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
