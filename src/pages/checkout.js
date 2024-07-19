import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const OrderSummaryPage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-28 lg:pt-48 h-screen overflow-x-hidden relative">
                <OrderSummary />
            </div>
            <Footer />
        </>
    );
};

export default OrderSummaryPage;
