"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "بازی فکری",
    image: "https://ext.same-assets.com/3895683912/2352773365.jpeg",
  },
  {
    id: 2,
    name: "دفتر",
    image: "https://ext.same-assets.com/3895683912/2828639092.jpeg",
  },
  {
    id: 3,
    name: "روبیک",
    image: "https://ext.same-assets.com/3895683912/3231731446.jpeg",
  },
  {
    id: 4,
    name: "فانتزی",
    image: "https://ext.same-assets.com/3895683912/316874641.jpeg",
  },
  {
    id: 5,
    name: "مداد رنگی",
    image: "https://ext.same-assets.com/3895683912/3087886217.jpeg",
  },
  {
    id: 6,
    name: "تراش",
    image: "https://ext.same-assets.com/3895683912/1112262076.jpeg",
  },
  {
    id: 7,
    name: "خودکار",
    image: "https://ext.same-assets.com/3895683912/374138595.jpeg",
  },
  {
    id: 8,
    name: "تلسکوپ",
    image: "https://ext.same-assets.com/3895683912/67751615.jpeg",
  },
];

export default function Categories() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="category-card group flex flex-col items-center"
          >
            <div className="relative w-full aspect-square bg-white rounded-2xl shadow-sm overflow-hidden p-3 mb-2">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
              {category.name}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="text-secondary hover:text-secondary/80 p-0 h-auto text-xs flex items-center gap-1 mt-1"
            >
              مشاهده
              <ChevronLeft className="h-3 w-3" />
            </Button>
          </a>
        ))}
      </div>
    </section>
  );
}
