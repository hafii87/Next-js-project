'use client';

import type { Product } from '../types/product';

interface ProductCardProps extends Product {
  onAddCart: () => void;
}

export default function ProductCard({
  name,
  price,
  description,
  badge,
  onAddCart,
}: ProductCardProps) {
  return (
    <div className="card p-6 relative">
      {badge && (
        <span className="absolute top-4 right-4 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {badge}
        </span>
      )}
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-indigo-600">${price}</span>
        <button className="btn-primary" onClick={onAddCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}