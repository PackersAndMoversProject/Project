import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { getBookingsByCustomer } from '../services/bookingService';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
    const navigate = useNavigate();
    const [activeBookings, setActiveBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.userId) {
                try {
                    const data = await getBookingsByCustomer(user.userId);
                    // Filter for active bookings (everything except COMPLETED or CANCELLED)
                    const active = data.filter(b => b.bookingStatus !== 'COMPLETED' && b.bookingStatus !== 'CANCELLED');
                    setActiveBookings(active);
                } catch (error) {
                    console.error("Failed to fetch bookings", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchBookings();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>Welcome, Customer!</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6">Start Moving</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Get a quick quote for your shifting needs.
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => navigate('/customer/quote')}>
                                Get Quote
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6">Active Bookings</Typography>
                            <Typography variant="h3">{activeBookings.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6">Support</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Need help? Contact our support team.
                            </Typography>
                            <Button variant="outlined" onClick={() => navigate('/customer/support')}>
                                Help Center
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Active Bookings List */}
            <Paper sx={{ mt: 4, p: 2 }}>
                <Typography variant="h6" gutterBottom>My Active Bookings</Typography>
                {activeBookings.length === 0 ? (
                    <Typography color="text.secondary">No active bookings found.</Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Booking ID</TableCell>
                                    <TableCell>Service</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Cost</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {activeBookings.map((booking) => (
                                    <TableRow key={booking.bookingId}>
                                        <TableCell>#{booking.bookingId}</TableCell>
                                        <TableCell>{booking.service?.serviceName}</TableCell>
                                        <TableCell>{booking.shiftingDate}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={booking.bookingStatus}
                                                color={booking.bookingStatus === 'CREATED' ? 'info' : 'success'}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>₹{booking.quotation?.quotedAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        </Container>
    );
};

export default CustomerDashboard;
