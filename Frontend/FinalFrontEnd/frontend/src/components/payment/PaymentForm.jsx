import React, { useState } from 'react';
import { Paper, Typography, Button, TextField, MenuItem, Box } from '@mui/material';

const PaymentForm = ({ amount, onSubmit }) => {
    const [paymentMethod, setPaymentMethod] = useState('UPI');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ paymentMethod, amount });
    };

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: 500, mx: 'auto' }}>
            <Typography variant="h5" color="primary" gutterBottom align="center">
                Payment Details
            </Typography>
            <Typography variant="h4" align="center" sx={{ my: 3 }}>
                ₹ {amount}
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="Payment Method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    fullWidth
                    sx={{ mb: 3 }}
                >
                    <MenuItem value="UPI">UPI</MenuItem>
                    <MenuItem value="CARD">Card</MenuItem>
                    <MenuItem value="NET_BANKING">Net Banking</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Pay Now
                </Button>
            </form>
        </Paper>
    );
};

export default PaymentForm;
