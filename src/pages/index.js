import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://c.wallhere.com/photos/fe/f2/1575x977_px_babay_wallpapers_Batman_city_landscapes_cool_images_cute_babies_famous_people_hd_desktop_images-801494.jpg!d',
    'https://www.10wallpaper.com/wallpaper/3840x2160/1804/Hanger_clothing_fashion_market_4K_HD_3840x2160.jpg',
    'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?cs=srgb&dl=pexels-daiangan-102129.jpg&fm=jpg',
    './assets/imgIndex.jpg'
];

const HomePage = () => (
    <div className='w-full h-screen overflow-y-scroll relative'>
        <Navbar />
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            className='w-full h-screen origin-center'
        >
            {images.map((image, index) => (
                <div key={index} className='w-full h-screen relative'>
                    <img src={image} alt={`Slide ${index + 1}`} className='w-full h-screen object-cover' />
                    <Banner />
                </div>
            ))}
        </Carousel>
        <Footer />
    </div>
);

export default HomePage;
