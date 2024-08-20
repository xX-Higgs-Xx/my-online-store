import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { useRouter } from 'next/router';

const initialCart = [
    { id: 1, name: "Camiseta de algodón negra", price: 19.99, quantity: 2, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" },
    { id: 2, name: "Camiseta de algodón blanca", price: 39.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg" },
    { id: 3, name: "Camiseta de algodón rosa", price: 29.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const [isScreenHeight, setIsScreenHeight] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [addressDetails, setAddressDetails] = useState(null);
    const router = useRouter();

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
        const total = subtotal + subtotal * 0.16; // Incluye impuestos
        const total = subtotal + subtotal * 0.16;
        return { subtotal, total };
    };

    const { subtotal, total } = calculateTotal();

    const handleProceedToCheckout = () => {
        setShowOrderSummary(true);
        setIsScreenHeight(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const addressData = {
            address: form.address.value,
            city: form.city.value,
            state: form.state.value,
            country: form.country.value,
            postalCode: form.postalCode.value,
        };
        setAddressDetails(addressData);
        setFormSubmitted(true);
    };

    const handleProceedToPayment = async () => {
        try {
            const payload = {
                amount: total.toFixed(2),
                currency: 'MXN',
                description: 'Compra en My Online Store',
                // Añade más detalles aquí si es necesario
            };
    
            const response = await axios.post('https://api.clip.mx/v1/payments', payload, {
                headers: {
                    'Authorization': `Bearer test_0c2445ba-5717-44aa-8981-7d0b4eb51eb2`,
                    'Content-Type': 'application/json',
                },
            });
    
            console.log('Response from Clip:', response.data);
    
            if (response.data.status === 'approved') {
                alert('Pago exitoso');
                // Redirigir o actualizar estado después del pago exitoso
            } else {
                alert('Hubo un problema con tu pago, por favor intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error procesando el pago:', error.response?.data || error.message);
            alert('Error procesando el pago, por favor intenta más tarde.');
        }
    };
    

    const handleBackToAddress = () => {
        setFormSubmitted(false);
    };

    return (
        <>
            <div className={`pt-28 lg:pt-48 ${isScreenHeight ? 'h-screen' : 'h-auto'} overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden relative bg-white`}>
                <h1 className="text-2xl font-bold mb-6 ml-16">Carrito de compras</h1>
                {!formSubmitted && !showOrderSummary && (
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
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div className="block justify-between">
                                    <button className={`px-4 py-2 rounded-md border ${selectedPayment === 'CreditCard' ? 'border-black' : 'border-gray-300'} w-full mb-5`} onClick={() => setSelectedPayment('CreditCard')}>
                                        Tarjeta de Crédito
                                    </button>
                                    <div className='text-center text-xs text-blue-700'>
                                        Por el momento, el único método de pago es tarjeta de crédito.
                                    </div>
                                </div>
                                {selectedPayment === 'CreditCard' && (
                                    <div>
                                        {/* Aquí podrías mostrar un formulario adicional para obtener detalles de la tarjeta si es necesario */}
                                    </div>
                                )}
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2"
                                    onClick={handleProceedToCheckout}
                                >
                                    Ingresa tu dirección
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {showOrderSummary && !formSubmitted && (
                    <div className="bg-gray-100 rounded-lg p-16 mt-8">
                        <div className="w-full h-px bg-zinc-300 mb-12"></div>
                        <h2 className="text-2xl font-bold mb-4">Detalles de la Entrega</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Ingresa la dirección"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Ciudad
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Ingresa la ciudad"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Estado
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Ingresa el estado"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    País
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Ingresa el país"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Código Postal
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Ingresa el código postal"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
                            >
                                Guardar Ubicación
                            </button>
                        </form>
                    </div>
                )}
                {formSubmitted && (
                    <div className="bg-gray-100 rounded-lg p-16 mt-8">
                        <h2 className="text-2xl font-bold mb-4">Resumen de la compra</h2>
                        <div className="grid gap-4">
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
                                        <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-2 mt-4">
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
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-2">Dirección de Envío</h3>
                            <p>{addressDetails.address}</p>
                            <p>{addressDetails.city}, {addressDetails.state}, {addressDetails.country}</p>
                            <p>{addressDetails.postalCode}</p>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button
                                className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleBackToAddress}
                            >
                                Regresar para modificar dirección
                            </button>
                            <button
                                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleProceedToPayment}
                            >
                                Proceder al pago
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;
