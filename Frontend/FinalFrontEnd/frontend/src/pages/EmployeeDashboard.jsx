import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h4" gutterBottom>Employee Portal</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Pending Verifications</Typography>
                            <Typography variant="h3">3</Typography>
                            <Button variant="outlined" style={{ marginTop: '10px' }} onClick={() => navigate('/employee/verification')}>
                                Review Documents
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Open Support Tickets</Typography>
                            <Typography variant="h3">5</Typography>
                            <Button variant="outlined" style={{ marginTop: '10px' }} onClick={() => navigate('/employee/tickets')}>
                                Resolve Issues
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default EmployeeDashboard;
