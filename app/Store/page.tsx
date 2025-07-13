'use client';

import React, { useState } from 'react';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes?: string[];
  models?: string[];
}

export default function Store() {
  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: "Vintage Logo Tee",
      price: 29.99,
      category: "clothing",
      image: "https://i.pinimg.com/1200x/d2/83/70/d28370addd76af26ef5a011baeb36b4a.jpg",
      description: "Classic comfort with our signature logo",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Hooded Sweatshirt",
      price: 49.99,
      category: "clothing",
      image: "https://i.pinimg.com/1200x/83/8c/87/838c87e26aedbdfd28fdcf108b238138.jpg",
      description: "Premium quality hoodie for everyday wear",
      sizes: ["M", "L", "XL"]
    },
    {
      id: 3,
      name: "Signature Cap",
      price: 24.99,
      category: "accessories",
      image: "https://i.pinimg.com/1200x/d7/28/c7/d728c75f898f0e8682a5791f9a16aa4d.jpg",
      description: "Adjustable cap with embroidered logo"
    },
    {
      id: 4,
      name: "Limited Edition Mug",
      price: 19.99,
      category: "home",
      image: "https://i.pinimg.com/1200x/83/0d/c5/830dc57e6faf248cc41f656796fa93a0.jpg",
      description: "Start your day with inspiration"
    },
    {
      id: 5,
      name: "Logo Sticker Pack",
      price: 9.99,
      category: "accessories",
      image: "https://i.pinimg.com/736x/97/16/db/9716dbd52cd3a3744db7bb256502d055.jpg",
      description: "Set of 6 high-quality vinyl stickers"
    },
    {
      id: 6,
      name: "Premium Tote Bag",
      price: 34.99,
      category: "accessories",
      image: "https://i.pinimg.com/736x/6f/bb/a1/6fbba15a0aef51619e51d1536af91518.jpg",
      description: "Durable canvas tote for everyday use"
    },
    {
      id: 7,
      name: "Phone Case",
      price: 27.99,
      category: "accessories",
      image: "https://i.pinimg.com/1200x/a4/4b/8d/a44b8d5a00e4325a8cc9edfce6419d35.jpg",
      description: "Protect your device in style",
      models: ["iPhone 15", "Samsung S23", "Google Pixel 7"]
    },
    {
      id: 8,
      name: "Signed Poster",
      price: 39.99,
      category: "home",
      image: "https://i.pinimg.com/1200x/14/b1/a4/14b1a438bfc6173f702b99dffd9db17c.jpg",
      description: "Limited edition signed artwork"
    }
  ];

  // State for store
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("featured");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return a.id - b.id; // Default to featured order
  });

  // Add to cart function
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
    
    // Show confirmation
    const cartBtn = document.getElementById("cart-btn");
    if (cartBtn) {
      cartBtn.classList.add("animate-bounce");
      setTimeout(() => cartBtn.classList.remove("animate-bounce"), 1000);
    }
  };

  // Quick view function
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    document.body.style.overflow = "hidden";
  };

  // Close quick view
  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-[family-name:var(--font-geist-sans)]">
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white py-40 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OFFICIAL MERCHANDISE</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Wear your support with pride. Every purchase helps create more content!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Shop New Arrivals
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Best Sellers
            </button>
          </div>
        </div>
      </div>

      {/* Store Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Merchandise</h2>
            <p className="text-gray-600">{sortedProducts.length} products available</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                id="category" 
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="home">Home & Living</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select 
                id="sort" 
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() => openQuickView(product)}
              >
                <Image
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  width={800}
height={500}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button 
                    onClick={() => openQuickView(product)}
                    className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    Quick View
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900">{quickViewProduct.name}</h2>
                <button 
                  onClick={closeQuickView}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={quickViewProduct.image} 
                    alt={quickViewProduct.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-2xl font-bold text-amber-600 mb-4">${quickViewProduct.price.toFixed(2)}</p>
                  <p className="text-gray-700 mb-6">{quickViewProduct.description}</p>
                  
                  {/* Size selector for clothing */}
                  {quickViewProduct.sizes && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.sizes.map(size => (
                          <button 
                            key={size}
                            className="border border-gray-300 px-4 py-2 rounded-md hover:border-amber-500 hover:text-amber-600"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Model selector for phone cases */}
                  {quickViewProduct.models && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Model</h3>
                      <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm">
                        {quickViewProduct.models.map(model => (
                          <option key={model}>{model}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <div className="flex border border-gray-300 rounded-md">
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                      <span className="px-4 py-2">1</span>
                      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(quickViewProduct);
                        closeQuickView();
                      }}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Product Details</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Premium quality materials</li>
                      <li>• Official licensed merchandise</li>
                      <li>• Eco-friendly packaging</li>
                      <li>• Worldwide shipping available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
