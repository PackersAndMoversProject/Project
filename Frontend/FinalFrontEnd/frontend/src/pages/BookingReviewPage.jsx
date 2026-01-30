import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuotationById } from '../services/quotationService';
import { createBookingFromQuotation } from '../services/bookingService';
import { Container, Paper, Typography, Button, Box, Divider, CircularProgress, Grid } from '@mui/material';

const BookingReviewPage = () => {
    const { quotationId } = useParams();
    const navigate = useNavigate();
    const [quotation, setQuotation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const fetchQuotation = async () => {
            try {
                const data = await getQuotationById(quotationId);
                setQuotation(data);
            } catch (error) {
                console.error("Error fetching quotation:", error);
                alert("Failed to load quotation details.");
            } finally {
                setLoading(false);
            }
        };
        fetchQuotation();
    }, [quotationId]);

    const handleConfirmBooking = async () => {
        setProcessing(true);
        // Simulate Payment Delay
        setTimeout(async () => {
            try {
                await createBookingFromQuotation(quotationId);
                alert("Booking Confirmed! Payment Successful.");
                navigate('/customer/dashboard');
            } catch (error) {
                console.error("Booking failed:", error);
                alert("Booking failed. Please try again.");
            } finally {
                setProcessing(false);
            }
        }, 1500);
    };

    if (loading) return <Box display="flex" justifyContent="center" mt={5}><CircularProgress /></Box>;
    if (!quotation) return <Typography align="center" mt={5}>Quotation not found.</Typography>;

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>Review & Book</Typography>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Service Details</Typography>
                        <Typography><strong>Service:</strong> {quotation.service?.serviceName}</Typography>
                        <Typography><strong>Pickup Date:</strong> {quotation.pickupDate}</Typography>
                        <Typography><strong>Vehicle:</strong> {quotation.vehicleType}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Route</Typography>
                        <Typography><strong>From:</strong> {quotation.pickupCity}</Typography>
                        <Typography><strong>To:</strong> {quotation.dropCity}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                            <Typography variant="h5" color="primary">Total Amount: ₹{quotation.quotedAmount}</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={4} display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        onClick={handleConfirmBooking}
                        disabled={processing}
                    >
                        {processing ? "Processing Payment..." : "Pay & Confirm Booking"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default BookingReviewPage;
