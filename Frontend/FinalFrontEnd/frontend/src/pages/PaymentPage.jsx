import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import PaymentForm from '../components/payment/PaymentForm';
import PaymentStatus from '../components/payment/PaymentStatus';
import { makePayment } from '../services/paymentService';
import { getBookingById } from '../services/bookingService';

const PaymentPage = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState(null);
    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const data = await getBookingById(bookingId);
                setBooking(data);
            } catch (error) {
                console.error("Failed to load booking", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooking();
    }, [bookingId]);

    const handlePaymentSubmit = async (paymentData) => {
        try {
            const result = await makePayment(bookingId, paymentData);
            setPayment(result);
        } catch (error) {
            console.error("Payment failed", error);
            alert("Payment failed. Please try again.");
        }
    };

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Secure Payment
                </Typography>

                {!payment ? (
                    booking && (
                        <PaymentForm
                            amount={booking.quotation?.quotedAmount}
                            onSubmit={handlePaymentSubmit}
                        />
                    )
                ) : (
                    <PaymentStatus payment={payment} />
                )}
            </Box>
        </Container>
    );
};

export default PaymentPage;
