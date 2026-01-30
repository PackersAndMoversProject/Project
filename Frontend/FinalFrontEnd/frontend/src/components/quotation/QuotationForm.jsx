import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    TextField, FormControl, InputLabel, Select, MenuItem,
    Checkbox, FormControlLabel, Button, Grid, Typography, Paper
} from '@mui/material';

const QuotationForm = ({ onSubmit }) => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        pickupDate: '',
        pickupCity: '',
        dropCity: '',
        pickupAddress: '',
        dropAddress: '',
        serviceId: location.state?.serviceId || 1, // Pre-select from navigation key
        goodsCategory: 'HOUSEHOLD',
        approximateWeightKg: '',
        numberOfItems: '',
        pickupFloor: 0,
        dropFloor: 0,
        liftAvailable: false,
        vehicleType: 'MINI_TRUCK',
        manpowerCount: 0,
        packingRequired: false,
        unpackingRequired: false,
        insuranceRequired: false,
        storageRequired: false,
        specialHandling: 'NONE'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sanitize Payload
        const payload = {
            ...formData,
            approximateWeightKg: formData.approximateWeightKg ? parseInt(formData.approximateWeightKg) : null,
            numberOfItems: formData.numberOfItems ? parseInt(formData.numberOfItems) : null,
            pickupFloor: formData.pickupFloor ? parseInt(formData.pickupFloor) : 0,
            dropFloor: formData.dropFloor ? parseInt(formData.dropFloor) : 0,
            manpowerCount: formData.manpowerCount ? parseInt(formData.manpowerCount) : 0,
            serviceId: parseInt(formData.serviceId),
        };

        // Add Customer ID if logged in
        const userStr = localStorage.getItem('user');
        if (userStr) {
            const user = JSON.parse(userStr);
            // In a real app, user object would contain ID. 
            // Since we mocked login without ID, we might not have it.
            // But let's assume if it had one:
            if (user.userId) payload.customerId = user.userId;
        }

        onSubmit(payload);
    };

    return (
        <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>Get a Quotation</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Pickup Date" name="pickupDate" type="date" InputLabelProps={{ shrink: true }} onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Spacing */}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Pickup City" name="pickupCity" onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Drop City" name="dropCity" onChange={handleChange} required />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth label="Pickup Address" name="pickupAddress" onChange={handleChange} required multiline rows={2} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Drop Address" name="dropAddress" onChange={handleChange} required multiline rows={2} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Service Type</InputLabel>
                            <Select name="serviceId" value={formData.serviceId} label="Service Type" onChange={handleChange}>
                                <MenuItem value={1}>Home Shifting</MenuItem>
                                <MenuItem value={2}>Office Shifting</MenuItem>
                                <MenuItem value={3}>Vehicle Shifting</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Goods Category</InputLabel>
                            <Select name="goodsCategory" value={formData.goodsCategory} label="Goods Category" onChange={handleChange}>
                                <MenuItem value="HOUSEHOLD">Household</MenuItem>
                                <MenuItem value="OFFICE">Office</MenuItem>
                                <MenuItem value="INDUSTRIAL">Industrial</MenuItem>
                                <MenuItem value="VEHICLE">Vehicle</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type="number" label="Approx Weight (kg)" name="approximateWeightKg" onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth type="number" label="No. of Items" name="numberOfItems" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth type="number" label="Pickup Floor" name="pickupFloor" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth type="number" label="Drop Floor" name="dropFloor" onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Vehicle Type</InputLabel>
                            <Select name="vehicleType" value={formData.vehicleType} label="Vehicle Type" onChange={handleChange}>
                                <MenuItem value="MINI_TRUCK">Mini Truck</MenuItem>
                                <MenuItem value="MEDIUM_TRUCK">Medium Truck</MenuItem>
                                <MenuItem value="LARGE_TRUCK">Large Truck</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type="number" label="Manpower Count" name="manpowerCount" onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox name="liftAvailable" checked={formData.liftAvailable} onChange={handleChange} />} label="Lift Available" />
                        <FormControlLabel control={<Checkbox name="packingRequired" checked={formData.packingRequired} onChange={handleChange} />} label="Packing Required" />
                        <FormControlLabel control={<Checkbox name="unpackingRequired" checked={formData.unpackingRequired} onChange={handleChange} />} label="Unpacking Required" />
                        <FormControlLabel control={<Checkbox name="insuranceRequired" checked={formData.insuranceRequired} onChange={handleChange} />} label="Insurance" />
                        <FormControlLabel control={<Checkbox name="storageRequired" checked={formData.storageRequired} onChange={handleChange} />} label="Storage" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth size="large">Get Quotation</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default QuotationForm;
