import React, { useEffect, useState } from 'react';
import { getAllBookings, getAllDrivers, assignDriver } from '../services/adminService';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, Select, MenuItem, Chip } from '@mui/material';

const AdminBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [selectedDrivers, setSelectedDrivers] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const bookingsData = await getAllBookings();
            setBookings(bookingsData);
            const driversData = await getAllDrivers();
            setDrivers(driversData);
        } catch (error) {
            console.error("Error fetching admin data:", error);
        }
    };

    const handleAssignDriver = async (bookingId) => {
        const driverId = selectedDrivers[bookingId];
        if (!driverId) {
            alert("Please select a driver first.");
            return;
        }
        try {
            await assignDriver(bookingId, driverId);
            alert("Driver Assigned Successfully!");
            fetchData();
        } catch (error) {
            alert("Failed to assign driver.");
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>All Bookings</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Booking ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Assigned Driver</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.bookingId}>
                                <TableCell>{booking.bookingId}</TableCell>
                                <TableCell>{booking.customer?.fullName}</TableCell>
                                <TableCell>{booking.service?.serviceName}</TableCell>
                                <TableCell>
                                    <Chip label={booking.bookingStatus} color={booking.bookingStatus === 'COMPLETED' ? 'success' : 'primary'} />
                                </TableCell>
                                <TableCell>
                                    {booking.driver ? booking.driver.user.fullName : "Not Assigned"}
                                </TableCell>
                                <TableCell>
                                    {!booking.driver && (
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Select
                                                size="small"
                                                value={selectedDrivers[booking.bookingId] || ''}
                                                onChange={(e) => setSelectedDrivers({ ...selectedDrivers, [booking.bookingId]: e.target.value })}
                                                displayEmpty
                                            >
                                                <MenuItem value="" disabled>Select Driver</MenuItem>
                                                {drivers.filter(d => d.availability).map(d => (
                                                    <MenuItem key={d.driverId} value={d.driverId}>{d.user?.fullName}</MenuItem>
                                                ))}
                                            </Select>
                                            <Button variant="contained" size="small" onClick={() => handleAssignDriver(booking.bookingId)}>Assign</Button>
                                        </Box>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AdminBookingsPage;
