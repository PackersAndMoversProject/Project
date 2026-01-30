import React from 'react';
import { Paper, Typography, Button, Box, Alert } from '@mui/material';

const QuotationResult = ({ quotation, onProceed }) => {
    if (!quotation) return null;

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" color="primary" gutterBottom>Quotation Generated!</Typography>

            <Box sx={{ my: 3 }}>
                <Typography variant="h3">₹ {quotation.quotedAmount}</Typography>
                <Typography variant="subtitle1" color="textSecondary">Quotation ID: {quotation.quotationId}</Typography>
                <Alert severity="info" sx={{ mt: 2, display: 'inline-flex' }}>Status: {quotation.status}</Alert>
            </Box>

            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => onProceed(quotation.quotationId)}
            >
                Proceed to Books
            </Button>
        </Paper>
    );
};

export default QuotationResult;
