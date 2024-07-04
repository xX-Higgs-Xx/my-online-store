
import Footer from './Footer';

const Banner = () => (
    <div>
        <div className="min-h-screen text-white flex flex-col justify-end">
            <div className="lg:flex ml-8 mb-28">
                <div>
                    <h1 className="lg:ml-14 lg:mb-4 lg:text-5xl text-2xl ">TEMPORADA 2024</h1>
                </div>
                <button className="duration-200 z-0 md:ml-4 border-2 px-8 py-3 rounded-full text-xs border-white hover:bg-white hover:text-orange-400 lg:font-bold backdrop-blur">VER MÁS</button>
            </div>
        </div>
        <Footer />
    </div>
);

export default Banner;
