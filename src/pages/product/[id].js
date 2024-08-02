// src/pages/product/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import products from '../../data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModalSizeChart from '@/components/ModalSizeChart';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('m');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false); // Estado para el corazón

    useEffect(() => {
        if (id) {
            const foundProduct = products.find(p => p.id === id);
            setProduct(foundProduct);
        }
    }, [id]);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite); // Alterna el estado de favorito
    };

    const handleShareClick = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: 'Check out this product!',
                url: window.location.href,
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full'>
            <Navbar />
            <div className="max-w-6xl px-4 mx-auto py-6 text-lg lg:pt-48 pt-28">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
                    <div className="grid gap-4 md:gap-8">
                        <Carousel showThumbs={true} infiniteLoop={true}>
                            {product.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`Product Image ${index + 1}`}
                                        className="object-fill w-screen h-a rounded-lg overflow-hidden"
                                        style={{ aspectRatio: '2/3' }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="grid gap-6 md:gap-10 items-start">
                        <div className="flex-row">
                            <div className="grid gap-4">
                                <div className="flex justify-between">
                                    <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
                                    <div>
                                        <button className="pr-5" onClick={handleShareClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share-2" width="30" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
                                                <path d="M12 14v-11" />
                                                <path d="M9 6l3 -3l3 3" />
                                            </svg>
                                        </button>
                                        <button className="pr-5 lg:pr-0" onClick={handleFavoriteClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="30" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill={isFavorite ? "#2c3e50" : "none"} strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-4xl font-bold">${product.price}</div>
                            </div>
                        </div>
                        <form className="grid gap-6 md:gap-10 px-5">
                            <div className="grid gap-2 my-9 lg:my-0">
                                <label className="text-4xl lg:font-medium lg:text-lg" htmlFor="size">Talla</label>
                                <div className="flex items-center gap-2" id="size">
                                    {['xs', 's', 'm', 'l', 'xl'].map(size => (
                                        <label key={size} className="lg:text-base font-medium text-2xl leading-none border cursor-pointer rounded-md p-2 flex items-center gap-2 justify-around w-full">
                                            <input
                                                type="radio"
                                                name="size"
                                                value={size}
                                                checked={selectedSize === size}
                                                onChange={handleSizeChange}
                                                className="hidden"
                                            />
                                            <span className={`flex items-center justify-center w-4 h-4 rounded-full border ${selectedSize === size ? 'bg-black fill-black' : 'border-gray-300'}`}>
                                                {selectedSize === size && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5 fill-current text-white">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                    </svg>
                                                )}
                                            </span>
                                            {size.toUpperCase()}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center -mt-9 text-sm">
                                <button type="button" onClick={handleOpenModal}>
                                    Encuentra tu talla
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="grid gap-2">
                                    <label className="font-medium text-4xl lg:text-lg" htmlFor="quantity">Cantidad</label>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="flex w-8/12 text-center text-3xl items-center justify-between rounded-md border px-4 py-3 lg:text-base"
                                        min="1"
                                    />
                                </div>
                                <button type="button" className="w-full border-2 border-black mt-9 hover:border-none hover:text-white hover:bg-black duration-500 text-2xl lg:text-lg font-medium text-primary-foreground h-12 rounded-md px-8">
                                    Agregar al carrito
                                </button>
                            </div>
                            <div className="border-t pt-6 mt-6">
                                <h2 className="font-bold text-2xl mb-4">Especificaciones Técnicas</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-semibold">Composición</h3>
                                        <p>60% algodón peinado anillado, 40% poliéster</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Peso</h3>
                                        <p>180 g/m²</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Lavado</h3>
                                        <p>Lavar a máquina a 30°C, no usar secadora</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Origen</h3>
                                        <p>Hecho en México</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <ModalSizeChart isOpen={isModalOpen} onRequestClose={handleCloseModal} />
        </div>
    );
};

export default ProductDetails;
