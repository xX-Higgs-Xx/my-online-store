import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import products from '../data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SalesPage = () => {
    const router = useRouter();
    const { query } = router;
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (query.category) {
            setCategory(query.category);
        }
    }, [query]);

    const viewProductDetails = (id) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className='w-full bg-zinc-200'>
            <Navbar />
            <div className="container mx-auto px-4 md:px-6 pt-28 lg:pt-48 pb-12">
                <h1 className="text-2xl font-bold mb-6">{category}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-64 lg:h-72 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-top lg:object-center"
                                    style={{ aspectRatio: '400 / 400' }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity"></div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold">${product.price}</span>
                                    <button
                                        onClick={() => viewProductDetails(product.id)}
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SalesPage;
