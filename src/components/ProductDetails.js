import { useRouter } from 'next/router';

const ProductDetails = ({ product }) => {
  const router = useRouter();

  const addToCart = () => {
    // Lógica para agregar el producto al carrito
    router.push('/cart');
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
