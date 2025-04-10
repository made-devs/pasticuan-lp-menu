// components/ProductModal.js
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductModal({ product, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/60 flex items-end justify-center px-4 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
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
        <div className="w-full flex justify-center pt-4">
          <div className="relative w-[90%] mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={product.img_modal}
              alt={product.title}
              width={800} // atau angka maksimal sesuai kebutuhan
              height={0}
              sizes="(max-width: 430px) 90vw, 800px"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
        <div className="p-4 pt-6 px-5 space-y-3">
          <div className="bg-black/40 rounded-xl p-3">
            <h2 className="text-[23px] font-extrabold text-white px-4 leading-tight text-center">
              {product.title}
            </h2>
            <p className="text-sm leading-tight text-white/90 px-1 py-2">
              {product.desc_modal}
            </p>
          </div>
          <button
            onClick={() => alert("ORDER NOW!")}
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-full shadow-md hover:bg-orange-600 transition cursor-pointer"
          >
            ORDER NOW
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-3xl leading-none"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
}
