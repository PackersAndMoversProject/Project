import axios from 'axios';

const API_URL = 'http://localhost:9090/api/bookings';

export const getBookingsByCustomer = async (customerId) => {
    const response = await axios.get(`${API_URL}/customer/${customerId}`);
    return response.data;
};

export const getBookingById = async (bookingId) => {
    const response = await axios.get(`${API_URL}/${bookingId}`);
    return response.data;
};

export const createBookingFromQuotation = async (quotationId) => {
    const response = await axios.post(`${API_URL}/from-quotation/${quotationId}`);
    return response.data;
};

export const deleteBooking = async (bookingId) => {
    const response = await axios.delete(`${API_URL}/${bookingId}`);
    return response.data;
};
