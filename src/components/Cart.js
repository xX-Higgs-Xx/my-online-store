import React, { useState } from 'react';
import PayPalButton from './PayPalButton';
import Footer from './Footer';

const initialCart = [
    { id: 1, name: "Camiseta de algodón negra", price: 19.99, quantity: 2, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" },
    { id: 2, name: "Camiseta de algodón blanca", price: 39.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg" },
    { id: 3, name: "Camiseta de algodón rosa", price: 29.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);
    const [selectedPayment, setSelectedPayment] = useState('');

    const handleQuantityChange = (id, amount) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal;
        return { subtotal, total };
    };

    const { subtotal, total } = calculateTotal();

    return (
        <>
            <div className="pt-28 lg:pt-48 h-screen overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden relative">
                <h1 className="text-2xl font-bold mb-6 ml-16">Carrito de compras</h1>
                <div className="grid md:grid-cols-[1fr_300px] gap-8 lg:px-16">
                    <div className="grid gap-6">
                        {cart.map(item => (
                            <div key={item.id} className="grid grid-cols-[100px_1fr_auto] items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    width="100"
                                    height="100"
                                    className="rounded-lg object-cover"
                                    style={{ aspectRatio: '100 / 100', objectFit: 'cover' }}
                                />
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-gray-100 hover:bg-gray-200 h-10 w-10"
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M5 12h14"></path>
                                        </svg>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-gray-100 hover:bg-gray-200 h-10 w-10"
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-gray-100 hover:bg-gray-200 h-10 w-10"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            <line x1="10" x2="10" y1="11" y2="17"></line>
                                            <line x1="14" x2="14" y1="11" y2="17"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 grid gap-4">
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Impuestos:</span>
                                <span>${(subtotal * 0.16).toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-300 my-2"></div>
                            <div className="flex items-center justify-between font-semibold">
                                <span>Total:</span>
                                <span>${(total+(subtotal*0.16)).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="block justify-between">
                                <button className={`px-4 py-2 rounded-md border ${selectedPayment === 'PayPal' ? 'border-black' : 'border-gray-300'} w-full mb-5`} onClick={() => setSelectedPayment('PayPal')}>
                                    PayPal
                                </button>
                                <div className='text-center text-xs text-blue-700'>
                                    Por el momento, el unico metodo de pago es PayPal.
                                </div>
                            </div>
                            {selectedPayment === 'PayPal' && (
                                <div>
                                    <PayPalButton total={total} />
                                </div>
                            )}
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2"
                                onClick={() => alert('Procediendo al pago')}
                            >
                                Proceder al pago
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;
