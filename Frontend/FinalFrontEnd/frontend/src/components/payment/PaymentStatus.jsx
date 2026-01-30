import React from 'react';
import { Paper, Typography, Box, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = ({ payment }) => {
    const navigate = useNavigate();

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" color={payment.status === 'SUCCESS' ? 'green' : 'red'} gutterBottom>
                Payment {payment.status}
            </Typography>

            <Box sx={{ my: 3 }}>
                <Typography variant="h6">Transaction ID: {payment.transactionId}</Typography>
                <Alert severity="success" sx={{ mt: 2, display: 'inline-flex' }}>
                    Your booking is now confirmed!
                </Alert>
            </Box>

            <Button
                variant="outlined"
                onClick={() => navigate('/')}
            >
                Back to Home
            </Button>
        </Paper>
    );
};

export default PaymentStatus;
