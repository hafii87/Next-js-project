'use client';
import Link from 'next/link';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from './CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { cart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ModernShop
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-600 outline-none"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
              >
                <Search size={20} />
                Search
              </button>
            )}
            <Link
              href="/cart"
              className="relative text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {cart > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cart}
                </span>
              )}
            </Link>
          </div>

          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
