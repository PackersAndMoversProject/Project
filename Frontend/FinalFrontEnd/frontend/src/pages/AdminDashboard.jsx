import React, { useEffect, useState } from 'react';
import { getAllBookings, getAllDrivers, assignDriver, verifyDriver } from '../services/adminService';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Tabs, Tab, Box, Select, MenuItem, Chip } from '@mui/material';

const AdminDashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);
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

    const handleVerifyDriver = async (driverId) => {
        try {
            await verifyDriver(driverId);
            alert("Driver Verified Successfully!");
            fetchData();
        } catch (error) {
            alert("Failed to verify driver.");
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

            <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} sx={{ mb: 3 }}>
                <Tab label="Manage Bookings" />
                <Tab label="Manage Drivers" />
            </Tabs>

            {tabIndex === 0 && (
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
            )}

            {tabIndex === 1 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Driver ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>License</TableCell>
                                <TableCell>Availability</TableCell>
                                <TableCell>Verified</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {drivers.map((driver) => (
                                <TableRow key={driver.driverId}>
                                    <TableCell>{driver.driverId}</TableCell>
                                    <TableCell>{driver.user?.fullName}</TableCell>
                                    <TableCell>{driver.licenseNumber}</TableCell>
                                    <TableCell>{driver.availability ? "Available" : "Busy"}</TableCell>
                                    <TableCell>
                                        <Chip label={driver.isVerified ? "Verified" : "Pending"} color={driver.isVerified ? "success" : "warning"} />
                                    </TableCell>
                                    <TableCell>
                                        {!driver.isVerified && (
                                            <Button variant="contained" color="success" size="small" onClick={() => handleVerifyDriver(driver.driverId)}>
                                                Verify
                                            </Button>
                                        )}
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

export default AdminDashboard;
