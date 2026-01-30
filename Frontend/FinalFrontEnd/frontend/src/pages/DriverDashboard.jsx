import React, { useEffect, useState } from 'react';
import { getAssignedJobs, getDriverProfile, acceptJob, completeJob } from '../services/driverService';
import { Container, Paper, Typography, Button, Box, Grid, Card, CardContent, Chip } from '@mui/material';

const DriverDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [driver, setDriver] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
        if (storedUser && storedUser.userId) {
            fetchDriverData(storedUser.userId);
        }
    }, []);

    const fetchDriverData = async (driverId) => {
        try {
            const profile = await getDriverProfile(driverId);
            setDriver(profile);
            const assignedJobs = await getAssignedJobs(driverId);
            setJobs(assignedJobs);
        } catch (error) {
            console.error("Error fetching driver data:", error);
        }
    };

    const handleAcceptJob = async (bookingId) => {
        try {
            await acceptJob(user.userId, bookingId);
            alert("Job Accepted!");
            fetchDriverData(user.userId);
        } catch (error) {
            alert("Failed to accept job.");
        }
    };

    const handleCompleteJob = async (bookingId) => {
        try {
            await completeJob(user.userId, bookingId);
            alert("Job Completed!");
            fetchDriverData(user.userId);
        } catch (error) {
            alert("Failed to complete job.");
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>Driver Dashboard</Typography>

            {driver && (
                <Paper sx={{ p: 2, mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6">Welcome, {user?.fullName}</Typography>
                        <Typography variant="body2" color="textSecondary">License: {driver.licenseNumber}</Typography>
                    </Box>
                    <Chip label={driver.availability ? "Available" : "Busy"} color={driver.availability ? "success" : "secondary"} />
                </Paper>
            )}

            <Typography variant="h5" gutterBottom>Assigned Jobs</Typography>
            {jobs.length === 0 ? (
                <Typography>No jobs assigned yet.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {jobs.map((job) => (
                        <Grid item xs={12} md={6} key={job.bookingId}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>Reference #{job.bookingId}</Typography>
                                    <Typography color="textSecondary" gutterBottom>Status: {job.bookingStatus}</Typography>

                                    <Box mt={2} mb={2}>
                                        <Typography><strong>From:</strong> {job.quotation?.pickupCity}</Typography>
                                        <Typography><strong>To:</strong> {job.quotation?.dropCity}</Typography>
                                        <Typography><strong>Date:</strong> {job.shiftingDate}</Typography>
                                        <Typography><strong>Service:</strong> {job.service?.serviceName}</Typography>
                                    </Box>

                                    {job.bookingStatus === 'CREATED' && (
                                        <Button variant="contained" color="primary" onClick={() => handleAcceptJob(job.bookingId)}>
                                            Accept Job
                                        </Button>
                                    )}
                                    {job.bookingStatus === 'CONFIRMED' && ( // Assuming Accept moves it to CONFIRMED or DRIVER_ASSIGNED
                                        <Button variant="contained" color="success" onClick={() => handleCompleteJob(job.bookingId)}>
                                            Mark Completed
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default DriverDashboard;
