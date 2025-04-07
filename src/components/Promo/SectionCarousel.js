"use client";

import SectionHeader from "@/components/SectionHeader";
import SliderPromo from "@/components/Promo/SliderPromo";

const SectionCarousel = ({ title, href, category }) => {
  return (
    <div className="space-y-2">
      <SectionHeader title={title} href={href} />
      <SliderPromo category={category} />
    </div>
  );
};

export default SectionCarousel;
