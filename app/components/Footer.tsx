import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer content from HomePage */}
          // ...existing footer content...
        </div>
        <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
          <p>© 2024 ModernShop. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  );
}
