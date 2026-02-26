"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    image: "https://ext.same-assets.com/3895683912/4108204490.jpeg",
    alt: "Artline",
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/3895683912/1730952943.jpeg",
    alt: "برگ سررسید",
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/3895683912/830456743.jpeg",
    alt: "پنتر",
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/3895683912/1132931651.jpeg",
    alt: "حوزه نوآوری",
  },
];

const featuredProduct = {
  image: "https://ext.same-assets.com/3895683912/1497574251.jpeg",
  name: "ماژیک اکریلیک ۸ رنگ وای پلاس ک...",
  quantity: "تعداد در بسته = ۱۲ عدد",
};

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Slider */}
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="relative aspect-[16/7] overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-secondary w-8"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm product-card cursor-pointer flex-1">
            <div className="relative aspect-square mb-3 overflow-hidden rounded-xl">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
              {featuredProduct.name}
            </h3>
            <p className="text-xs text-gray-500">{featuredProduct.quantity}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
