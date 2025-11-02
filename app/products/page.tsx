'use client';
import { useEffect, useState } from 'react';
import { useCart } from '../components/CartContext';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { Product } from '../types/product';

const ProductsPage = () => {
  const { addToCart } = useCart(); // Remove cart
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const products: Product[] = [
    { 
      id: 1, 
      name: 'Laptop', 
      price: 999, 
      description: 'High-performance laptop',
      badge: 'Sale'
    },
    { 
      id: 2, 
      name: 'Smartphone', 
      price: 699, 
      description: 'Latest smartphone model',
      badge: 'New'
    },
    { 
      id: 3, 
      name: 'Headphones', 
      price: 199, 
      description: 'Wireless noise-canceling',
      badge: 'Popular'
    },
    { 
      id: 4, 
      name: 'Tablet', 
      price: 499, 
      description: 'Lightweight tablet',
      badge: 'Sale'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
        <p className="text-slate-600 mb-8">Browse our collection of premium tech products</p>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default ProductsPage;