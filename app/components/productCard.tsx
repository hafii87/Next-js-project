'use client';
import React from 'react';
import AddToCart from './Addtocart';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ id, name, price, description }: ProductCardProps) => {
  return (
    <div className={`${styles.card} bg-white hover:shadow-lg transition transform hover:scale-105`}>
      <div className="mb-4 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-sm">Product Image</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-indigo-600">${price}</span>
        <AddToCart productId={id} productName={name} productPrice={price} />
      </div>
    </div>
  );
};

export default ProductCard;