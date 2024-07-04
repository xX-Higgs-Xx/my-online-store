import Link from 'next/link';

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Link href={`/products/${product.id}`}>
          {product.name} - ${product.price}
        </Link>
      </li>
    ))}
  </ul>
);

export default ProductList;
