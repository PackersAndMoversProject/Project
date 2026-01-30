import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const BookingForm = ({ onConfirm }) => {
    return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Ready to book your move?
            </Typography>
            <Typography variant="body1" paragraph>
                Click the button below to confirm your booking based on the quotation.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onConfirm}
            >
                Confirm Booking
            </Button>
        </Box>
    );
};

export default BookingForm;
