import Link from 'next/link';
import ProductList from '../../components/ProductList';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
