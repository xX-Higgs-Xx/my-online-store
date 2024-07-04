// src/components/ProductList.js
import React from 'react';

const products = [
  {
    id: 1,
    name: "Slim-Fit Dress Shirt",
    description: "Tailored and professional dress shirt",
    price: 34.99,
    image: "/placeholder.svg",
    category: "CABALLEROS_Camisas",
  },
  {
    id: 2,
    name: "Linen Button-Down",
    description: "Breathable and stylish linen shirt",
    price: 39.99,
    image: "/placeholder.svg",
    category: "CABALLEROS_Camisas",
  },
  {
    id: 3,
    name: "Vintage Graphic Tee",
    description: "Retro-inspired graphic t-shirt",
    price: 22.99,
    image: "/placeholder.svg",
    category: "CABALLEROS_PolosPlayeras",
  },
  {
    id: 4,
    name: "Lightweight Henley",
    description: "Breathable and comfortable henley top",
    price: 24.99,
    image: "/placeholder.svg",
    category: "CABALLEROS_PolosPlayeras",
  },
  // Add more products with categories
];

const ProductList = ({ selectedCategory }) => {
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Productos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} width="400" height="400" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${product.price}</span>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
