import axios from 'axios';

const API_URL = 'http://localhost:9090/api/admin';

export const getAllUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const getAllDrivers = async () => {
    const response = await axios.get(`${API_URL}/drivers`);
    return response.data;
};

export const getAllBookings = async () => {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
};

export const assignDriver = async (bookingId, driverId) => {
    const response = await axios.put(`${API_URL}/assign-driver/${bookingId}?driverId=${driverId}`);
    return response.data;
};

export const verifyDriver = async (driverId) => {
    const response = await axios.put(`${API_URL}/verify-driver/${driverId}`);
    return response.data;
};
