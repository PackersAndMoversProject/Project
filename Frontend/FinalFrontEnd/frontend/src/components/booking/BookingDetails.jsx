import React from 'react';
import { Paper, Typography, Box, Button, CircularProgress } from '@mui/material';

const BookingDetails = ({ booking, onProceedToPayment }) => {
    if (!booking) return <CircularProgress />;

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" color="primary" gutterBottom>Booking Confirmed!</Typography>
            <Box sx={{ my: 3 }}>
                <Typography variant="h4">Booking ID: {booking.bookingId}</Typography>
                <Typography variant="subtitle1">Status: {booking.bookingStatus}</Typography>
                <Typography variant="body1">Service: {booking.service?.serviceName}</Typography>
            </Box>
            <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => onProceedToPayment(booking.bookingId)}
            >
                Proceed to Payment
            </Button>
        </Paper>
    );
};

export default BookingDetails;
