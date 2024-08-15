import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FDISE%C3%91O3.jpg?alt=media&token=0bd2fceb-83d6-4623-864c-e85713dccc10',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_8969.jpg?alt=media&token=e727c7bf-d5ba-4d9b-8f97-e8c9bd323c03',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_8981.jpg?alt=media&token=a385d7ac-1212-4c8a-9079-5fa33f9bcaf3',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9027.jpg?alt=media&token=ae0d65fb-1ad6-44dc-b85f-4ad716d8dd89',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9033.jpg?alt=media&token=c8c82da6-666d-474a-a5b0-271197f816ff',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FIMG_9075.jpg?alt=media&token=1ecc297c-960a-42de-8f1f-753e8cb83a67',
    'https://firebasestorage.googleapis.com/v0/b/tienda-jaff.appspot.com/o/IMG%20INDEX%2FimgIndex.jpg?alt=media&token=449234a9-a113-4ea4-8e6a-32396450633f'
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
