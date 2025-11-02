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
    
    // Reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className={`px-4 py-2 rounded-lg font-bold transition ${
          isAdded 
            ? 'bg-green-600 text-white' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {isAdded ? '✓ Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default AddToCart;