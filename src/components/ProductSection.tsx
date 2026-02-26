"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  quantity: string;
  badge?: string;
}

interface ProductSectionProps {
  title: string;
  titleColor?: "primary" | "secondary";
  products: Product[];
}

export default function ProductSection({
  title,
  titleColor = "secondary",
  products,
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <LayoutGrid
            className={`h-6 w-6 ${
              titleColor === "primary" ? "text-primary" : "text-secondary"
            }`}
          />
          <h2 className="text-lg md:text-xl font-bold">
            <span
              className={
                titleColor === "primary" ? "text-primary" : "text-secondary"
              }
            >
              {title.split(" ")[0]}
            </span>{" "}
            <span className="text-gray-800">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-gray-200"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-gray-200"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Products Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[200px] md:w-[220px]">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
