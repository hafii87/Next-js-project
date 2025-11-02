'use client';

import Link from 'next/link';
import ProductCard from './components/ProductCard'; // Correct casing
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useCart } from './components/CartContext';
import type { Product } from './types/product';

const products: Product[] = [
	{
		id: 1,
		name: 'Premium Laptop Pro',
		price: 1299,
		description: 'High-performance laptop with latest specs',
		badge: 'Best Seller',
	},
	{
		id: 2,
		name: 'Wireless Headphones Pro',
		price: 299,
		description: 'Noise-cancelling with 50hr battery life',
		badge: 'New',
	},
	{
		id: 3,
		name: 'Ergonomic Mouse',
		price: 79,
		description: 'Perfect for all-day comfort and precision',
		badge: 'Sale',
	},
	{
		id: 4,
		name: 'Mechanical Keyboard RGB',
		price: 199,
		description: 'Premium switches with RGB backlit',
		badge: 'Popular',
	},
];

export default function HomePage() {
	const { addToCart } = useCart();

	return (
		<main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
			{/* Navigation */}
			<Navbar />

			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
					<div className="space-y-6">
						<h1 className="text-5xl sm:text-6xl font-bold leading-tight">
							<span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								Discover Premium
							</span>
							<br />
							<span className="text-slate-900">Products Today</span>
						</h1>
						<p className="text-xl text-slate-600 leading-relaxed">
							Curated collection of high-quality tech products designed for
							professionals and enthusiasts. Experience excellence with every
							purchase.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="btn-primary">Explore Collection</button>
							<button className="btn-secondary">Learn More</button>
						</div>
					</div>

					<div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
						<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl m-1 flex items-center justify-center">
							<div className="text-center space-y-4">
								<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
									<svg
										className="w-16 h-16 text-indigo-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<p className="text-slate-600 font-semibold">
									Premium Quality
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Featured Products */}
				<div className="space-y-8">
					<div className="flex justify-between items-end">
						<div>
							<h2 className="text-4xl font-bold text-slate-900 mb-2">
								Featured Products
							</h2>
							<p className="text-slate-600">
								Hand-picked selections curated just for you
							</p>
						</div>
						<Link
							href="/products"
							className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
						>
							View All →
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								{...product}
								onAddCart={addToCart}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</main>
	);
}