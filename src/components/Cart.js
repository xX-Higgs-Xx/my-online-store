const Cart = () => {
  // Aquí manejarías el estado del carrito y los productos en él
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ];

  return (
    <div>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default Cart;
