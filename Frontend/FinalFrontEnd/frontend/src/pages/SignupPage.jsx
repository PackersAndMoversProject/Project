import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Grid, Paper, Typography, TextField, Button, Box,
    InputAdornment, IconButton, CircularProgress, Alert
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, Person, Phone, Badge, DirectionsCar } from '@mui/icons-material';

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'CUSTOMER', // Default Role
        licenseNumber: '',
        vehicleNumber: '',
        vehicleType: 'MINI_TRUCK'
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
        if (fieldErrors[e.target.name]) setFieldErrors({ ...fieldErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Password: Min 8 chars, 1 Uppercase, 1 Lowercase, 1 Number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
        if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
        if (!formData.phone.trim()) errors.phone = "Phone number is required";

        if (!passwordRegex.test(formData.password)) {
            errors.password = "Password must be at least 8 chars, include 1 uppercase, 1 lowercase & 1 number.";
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        // Driver Validation
        if (formData.role === 'DRIVER') {
            if (!formData.licenseNumber.trim()) errors.licenseNumber = "License Number is required";
            if (!formData.vehicleNumber.trim()) errors.vehicleNumber = "Vehicle Number is required";
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            // Exclude confirmPassword from payload
            const { confirmPassword, ...payload } = formData;
            const response = await axios.post('http://localhost:9090/api/auth/register', payload);

            // Handle response message
            if (response.data && typeof response.data === 'string' && response.data.includes("Pending Admin Approval")) {
                alert("Driver Registration Successful! Your account is pending admin approval.");
            } else {
                alert("Registration Successful! Please login.");
            }

            navigate('/login');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            padding: 2
        }}>
            <Paper elevation={10} sx={{ maxWidth: 900, width: '100%', borderRadius: 4, overflow: 'hidden' }}>
                <Grid container>
                    {/* Brand Section (Left Side) */}
                    <Grid item xs={12} md={5} sx={{
                        bgcolor: '#2c3e50',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 6,
                        textAlign: 'center'
                    }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Join Us Today
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            Create an account to start your hassle-free moving journey.
                        </Typography>
                    </Grid>

                    {/* Form Section (Right Side) */}
                    <Grid item xs={12} md={7} sx={{ p: 6 }}>
                        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                            Sign Up
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
                            Please fill in your details to register.
                        </Typography>

                        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

                        <form onSubmit={handleSignup}>
                            <Grid container spacing={2}>
                                {/* Role Selection */}
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Register As"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                    >
                                        <option value="CUSTOMER">Customer (Sender)</option>
                                        <option value="DRIVER">Driver (Partner)</option>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Full Name" name="fullName"
                                        value={formData.fullName} onChange={handleChange}
                                        error={!!fieldErrors.fullName} helperText={fieldErrors.fullName}
                                        InputProps={{ startAdornment: (<InputAdornment position="start"><Person color="action" /></InputAdornment>) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth label="Email" name="email"
                                        value={formData.email} onChange={handleChange}
                                        error={!!fieldErrors.email} helperText={fieldErrors.email}
                                        InputProps={{ startAdornment: (<InputAdornment position="start"><Email color="action" /></InputAdornment>) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth label="Phone" name="phone"
                                        value={formData.phone} onChange={handleChange}
                                        error={!!fieldErrors.phone} helperText={fieldErrors.phone}
                                        InputProps={{ startAdornment: (<InputAdornment position="start"><Phone color="action" /></InputAdornment>) }}
                                    />
                                </Grid>

                                {/* Conditional Driver Fields */}
                                {formData.role === 'DRIVER' && (
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth label="License Number" name="licenseNumber"
                                                value={formData.licenseNumber} onChange={handleChange}
                                                error={!!fieldErrors.licenseNumber} helperText={fieldErrors.licenseNumber}
                                                InputProps={{ startAdornment: (<InputAdornment position="start"><Badge color="action" /></InputAdornment>) }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth label="Vehicle Number" name="vehicleNumber"
                                                value={formData.vehicleNumber} onChange={handleChange}
                                                error={!!fieldErrors.vehicleNumber} helperText={fieldErrors.vehicleNumber}
                                                InputProps={{ startAdornment: (<InputAdornment position="start"><DirectionsCar color="action" /></InputAdornment>) }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                select
                                                fullWidth
                                                label="Vehicle Type"
                                                name="vehicleType"
                                                value={formData.vehicleType}
                                                onChange={handleChange}
                                                SelectProps={{ native: true }}
                                            >
                                                <option value="MINI_TRUCK">Mini Truck</option>
                                                <option value="MEDIUM_TRUCK">Medium Truck</option>
                                                <option value="LARGE_TRUCK">Large Truck</option>
                                            </TextField>
                                        </Grid>
                                    </>
                                )}

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Password" name="password" type={showPassword ? 'text' : 'password'}
                                        value={formData.password} onChange={handleChange}
                                        error={!!fieldErrors.password} helperText={fieldErrors.password}
                                        InputProps={{
                                            startAdornment: (<InputAdornment position="start"><Lock color="action" /></InputAdornment>),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Confirm Password" name="confirmPassword" type="password"
                                        value={formData.confirmPassword} onChange={handleChange}
                                        error={!!fieldErrors.confirmPassword} helperText={fieldErrors.confirmPassword}
                                        InputProps={{ startAdornment: (<InputAdornment position="start"><Lock color="action" /></InputAdornment>) }}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 4, mb: 2, height: 50, fontWeight: 'bold' }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
                            </Button>

                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link to="/login" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 500 }}>
                                        Already have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default SignupPage;
