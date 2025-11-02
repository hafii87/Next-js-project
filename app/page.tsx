import Link from 'next/link';
import ProductCard from './components/productCard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Next.js App</h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern e-commerce application built with Next.js and React
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link 
            href="/users" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition inline-block"
          >
            Go to Users Page
          </Link>
          <Link 
            href="/products" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition inline-block"
          >
            View Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            id={1} 
            name="Laptop" 
            price={999} 
            description="High-performance laptop"
          />
          <ProductCard 
            id={2} 
            name="Headphones" 
            price={199} 
            description="Wireless headphones"
          />
          <ProductCard 
            id={3} 
            name="Mouse" 
            price={49} 
            description="Ergonomic mouse"
          />
          <ProductCard 
            id={4} 
            name="Keyboard" 
            price={129} 
            description="Mechanical keyboard"
          />
        </div>
      </div>
    </main>
  );
}