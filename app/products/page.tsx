'use client';
import React from 'react';
import ProductCard from '../components/productCard';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
    { id: 2, name: 'Headphones', price: 199, description: 'Wireless headphones' },
    { id: 3, name: 'Mouse', price: 49, description: 'Ergonomic mouse' },
    { id: 4, name: 'Keyboard', price: 129, description: 'Mechanical keyboard' },
    { id: 5, name: 'Monitor', price: 299, description: '4K Monitor' },
    { id: 6, name: 'Webcam', price: 89, description: 'HD Webcam' },
    { id: 7, name: 'Microphone', price: 159, description: 'Studio Microphone' },
    { id: 8, name: 'USB Hub', price: 39, description: '7-port USB Hub' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600 mb-8">Browse our collection of premium tech products</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;