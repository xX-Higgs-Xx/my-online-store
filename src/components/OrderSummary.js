import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: "Camiseta de algodón negra", price: 19.99, quantity: 2, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" },
  { id: 2, name: "Camiseta de algodón blanca", price: 39.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg" },
  { id: 3, name: "Camiseta de algodón rosa", price: 29.99, quantity: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" }
];

const OrderSummary = () => {
  const [cart] = useState(initialCart);
  const [location, setLocation] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted with location:', location);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Detalles de la Entrega</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              placeholder="Ingresa la dirección"
              value={location.address}
              onChange={handleInputChange}
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
              value={location.city}
              onChange={handleInputChange}
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
              value={location.state}
              onChange={handleInputChange}
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
              value={location.country}
              onChange={handleInputChange}
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
              value={location.postalCode}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar Ubicación
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Resumen del Pedido</h1>
          <div className="mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
