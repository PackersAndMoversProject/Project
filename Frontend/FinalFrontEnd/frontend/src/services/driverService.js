import axios from 'axios';

const API_URL = 'http://localhost:9090/api/drivers';

export const getDriverProfile = async (driverId) => {
    const response = await axios.get(`${API_URL}/${driverId}/profile`);
    return response.data;
};

export const getAssignedJobs = async (driverId) => {
    const response = await axios.get(`${API_URL}/${driverId}/jobs`);
    return response.data;
};

export const acceptJob = async (driverId, bookingId) => {
    const response = await axios.put(`${API_URL}/${driverId}/accept-job/${bookingId}`);
    return response.data;
};

export const completeJob = async (driverId, bookingId) => {
    const response = await axios.put(`${API_URL}/${driverId}/graduate-job/${bookingId}`);
    return response.data;
};
