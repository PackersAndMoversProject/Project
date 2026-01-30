import axios from 'axios';

const API_URL = '/api/payments';

export const makePayment = async (bookingId, paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/pay/${bookingId}`, paymentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
