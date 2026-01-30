import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import BookingForm from '../components/booking/BookingForm';
import BookingDetails from '../components/booking/BookingDetails';
import { createBooking } from '../services/bookingService';

const BookingPage = () => {
    const { quotationId } = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState('');

    const handleConfirmBooking = async () => {
        try {
            const result = await createBooking(quotationId);
            setBooking(result);
        } catch (err) {
            console.error("Booking failed", err);
            setError('Failed to create booking. Please try again.');
        }
    };

    const handleProceedToPayment = (bookingId) => {
        navigate(`/payment/${bookingId}`);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Complete Your Booking
                </Typography>

                {error && <Typography color="error" align="center">{error}</Typography>}

                {!booking ? (
                    <BookingForm onConfirm={handleConfirmBooking} />
                ) : (
                    <BookingDetails booking={booking} onProceedToPayment={handleProceedToPayment} />
                )}
            </Box>
        </Container>
    );
};

export default BookingPage;
