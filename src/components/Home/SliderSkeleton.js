// File: components/Home/SliderSkeleton.jsx

export default function SliderSkeleton() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-pulse space-x-4">
        {/* Wrapper untuk satu slide skeleton */}
        <div className="w-full flex-shrink-0 p-4">
          {/* PERUBAHAN: Semua elemen skeleton sekarang ada di dalam flex container ini */}
          <div className="flex w-full flex-col items-center">
            {/* Box untuk gambar */}
            <div className="h-[280px] w-full rounded-lg bg-gray-700"></div>

            {/* Box untuk judul */}
            <div className="mt-4 h-6 w-3/4 rounded bg-gray-700"></div>

            {/* Box untuk tombol */}
            <div className="mt-3 h-9 w-1/2 rounded-full bg-gray-700"></div>
          </div>
        </div>

        {/* Skeleton kedua untuk layar yang lebih besar (opsional tapi bagus) */}
        <div className="hidden w-full flex-shrink-0 p-4 sm:block">
          <div className="flex w-full flex-col items-center">
            <div className="h-[280px] w-full rounded-lg bg-gray-700"></div>
            <div className="mt-4 h-6 w-3/4 rounded bg-gray-700"></div>
            <div className="mt-3 h-9 w-1/2 rounded-full bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
