import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9086.jpg?alt=media&token=44b348b5-994f-41d5-baf4-aa76c16df3c0',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9077.jpg?alt=media&token=3e3de6e4-f943-4ac9-8989-0b7c397cf2ff',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9070.jpg?alt=media&token=a6333b75-9d23-4c20-b3ab-47a3745587eb',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9033.jpg?alt=media&token=914f262f-45bb-4c27-b92c-acb0615a3c73',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9027.jpg?alt=media&token=9c4cf031-b0a1-4a74-bd7f-32b9777fe3a2',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_8990.jpg?alt=media&token=43921fcc-1f21-4dd7-a584-7edac69329fe'
];

const HomePage = () => (
    <div className='w-full h-screen overflow-y-scroll relative'>
        <Navbar />
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            className='w-full h-screen origin-center'
        >
            {images.map((image, index) => (
                <div key={index} className='w-full h-screen relative'>
                    <img 
                        src={image} 
                        alt={`Slide ${index + 1}`} 
                        className='w-full h-screen object-cover lg:object-top lg:object-cover' 
                    />
                </div>
            ))}
        </Carousel>
        <Banner />
        <Footer />
    </div>
);

export default HomePage;
