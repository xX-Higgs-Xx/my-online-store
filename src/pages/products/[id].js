import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = { id, name: `Product ${id}`, price: id * 100 }; // Simulando datos de producto

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
