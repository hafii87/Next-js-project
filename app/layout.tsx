import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from './components/CartContext';
import ErrorBoundary from './components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ModernShop - Premium E-Commerce',
  description: 'Discover premium products with modern design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <CartProvider>
            {children}
          </CartProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
