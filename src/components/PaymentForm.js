import { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/process-payment', {
                cardNumber,
                expiry,
                cvv,
                amount
            });

            // Manejar la respuesta de la API de Clip
            console.log(response.data);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
            />
            <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
            />
            <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <button type="submit">Pay Now</button>
        </form>
    );
};

export default PaymentForm;
