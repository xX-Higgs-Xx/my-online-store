import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const HomePage = () => (
    <div className='bg-[url(../assets/imgIndex.jpg)] bg-cover bg-top w-full h-screen overflow-y-scroll relative'>
        <Navbar />
        <Banner />
    </div>
);

export default HomePage;
