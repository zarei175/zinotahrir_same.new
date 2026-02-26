"use client";

import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  quantity: string;
  badge?: string;
}

export default function ProductCard({
  id,
  name,
  image,
  quantity,
  badge,
}: ProductCardProps) {
  return (
    <a
      href="#"
      className="product-card bg-white rounded-2xl p-4 shadow-sm block"
    >
      {badge && (
        <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 mb-2">
          {badge}
        </Badge>
      )}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
        {/* Watermark */}
        <div className="absolute bottom-2 right-2 opacity-30">
          <img
            src="https://ext.same-assets.com/3895683912/2903917159.png"
            alt="زینو"
            className="h-4 w-auto"
          />
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 leading-6">
        {name}
      </h3>
      <p className="text-xs text-gray-500">{quantity}</p>
    </a>
  );
}
