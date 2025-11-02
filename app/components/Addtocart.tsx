'use client';
import React, { useState } from 'react';

interface AddToCartProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const AddToCart = ({ productId, productName, productPrice }: AddToCartProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    console.log(`Added ${productName} (ID: ${productId}) to cart - Price: $${productPrice}`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${
        isAdded
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-glow'
          : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-soft hover:shadow-medium'
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        {isAdded ? (
          <>
            <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Added!</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add</span>
          </>
        )}
      </div>
    </button>
  );
};

export default AddToCart;