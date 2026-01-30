import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, CircularProgress, Button } from '@mui/material';
import { getBookingsByCustomer, deleteBooking } from '../services/bookingService';
import { useNavigate } from 'react-router-dom';

const MyBookingsPage = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.userId) {
                try {
                    const data = await getBookingsByCustomer(user.userId);
                    // Sort by booking ID descending (newest first)
                    const sorted = data.sort((a, b) => b.bookingId - a.bookingId);
                    setBookings(sorted);
                } catch (error) {
                    console.error("Failed to fetch bookings", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchBookings();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'CREATED': return 'info';
            case 'ASSIGNED': return 'primary'; // Or secondary
            case 'IN_TRANSIT': return 'warning';
            case 'COMPLETED': return 'success';
            case 'CANCELLED': return 'error';
            default: return 'default';
        }
    };

    const handleDelete = async (bookingId) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            try {
                await deleteBooking(bookingId);
                alert("Booking Cancelled Successfully");
                // Refresh list
                const user = JSON.parse(localStorage.getItem('user'));
                if (user && user.userId) {
                    const data = await getBookingsByCustomer(user.userId);
                    setBookings(data.sort((a, b) => b.bookingId - a.bookingId));
                }
            } catch (error) {
                console.error("Delete failed", error);
                alert("Failed to cancel booking. Only CREATED bookings can be cancelled.");
            }
        }
    };

    if (loading) return <Container sx={{ mt: 5, textAlign: 'center' }}><CircularProgress /></Container>;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>My Bookings</Typography>

            {bookings.length === 0 ? (
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        You haven't made any bookings yet.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => navigate('/customer/quote')}>
                        Get a Quote Now
                    </Button>
                </Paper>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Booking ID</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>From</TableCell>
                                <TableCell>To</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Cost</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking) => (
                                <TableRow key={booking.bookingId}>
                                    <TableCell>#{booking.bookingId}</TableCell>
                                    <TableCell>{booking.service?.serviceName}</TableCell>
                                    <TableCell>{booking.quotation?.pickupCity}</TableCell>
                                    <TableCell>{booking.quotation?.dropCity}</TableCell>
                                    <TableCell>{booking.shiftingDate}</TableCell>
                                    <TableCell>₹{booking.quotation?.quotedAmount}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={booking.bookingStatus}
                                            color={getStatusColor(booking.bookingStatus)}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button size="small" variant="outlined" onClick={() => navigate(`/customer/booking/${booking.quotation?.quotationId}`)} sx={{ mr: 1 }}>
                                            Details
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="error"
                                            disabled={booking.bookingStatus !== 'CREATED'}
                                            onClick={() => handleDelete(booking.bookingId)}
                                        >
                                            Cancel
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default MyBookingsPage;
