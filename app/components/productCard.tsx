'use client';

import { Star, Zap } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  badge: string;
  onAddCart: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  description,
  badge,
  onAddCart,
}: ProductCardProps) {
  return (
    <div className="card group hover:shadow-glow hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-3">
              <Zap className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Product Image</p>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>

        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="text-amber-400 fill-amber-400"
            />
          ))}
          <span className="text-xs text-slate-500 ml-2">(142 reviews)</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </span>
            <p className="text-xs text-slate-400 line-through">
              ${Math.round(price * 1.25)}
            </p>
          </div>
          <button
            onClick={onAddCart}
            className="btn-primary text-sm py-2 px-3"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}