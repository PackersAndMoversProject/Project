import React, { useEffect, useState } from 'react';
import { getAllDrivers, verifyDriver } from '../services/adminService';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip } from '@mui/material';

const AdminDriversPage = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const driversData = await getAllDrivers();
            setDrivers(driversData);
        } catch (error) {
            console.error("Error fetching drivers:", error);
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
            <Typography variant="h4" gutterBottom>Manage Drivers</Typography>
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
        </Container>
    );
};

export default AdminDriversPage;
