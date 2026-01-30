import axios from 'axios';

const API_URL = 'http://localhost:9090/api/quotations';

export const createQuotation = async (quotationData) => {
    const response = await axios.post(API_URL, quotationData);
    return response.data;
};

export const getQuotationById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
