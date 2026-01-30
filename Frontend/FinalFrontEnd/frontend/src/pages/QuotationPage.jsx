import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import QuotationForm from '../components/quotation/QuotationForm';
import QuotationResult from '../components/quotation/QuotationResult';
import { createQuotation } from '../services/quotationService';
import { useNavigate } from 'react-router-dom';

const QuotationPage = () => {
    const [quotation, setQuotation] = useState(null);
    const navigate = useNavigate();

    const handleQuotationSubmit = async (data) => {
        try {
            const result = await createQuotation(data);
            setQuotation(result);
        } catch (error) {
            console.error("Failed to generate quotation", error);
            alert("Error generating quotation. Please check console.");
        }
    };

    const handleProceedToBooking = (quotationId) => {
        navigate(`/customer/booking/${quotationId}`);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Packers & Movers
                </Typography>

                {!quotation ? (
                    <QuotationForm onSubmit={handleQuotationSubmit} />
                ) : (
                    <QuotationResult quotation={quotation} onProceed={handleProceedToBooking} />
                )}
            </Box>
        </Container>
    );
};

export default QuotationPage;
