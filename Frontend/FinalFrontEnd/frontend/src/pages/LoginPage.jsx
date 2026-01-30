import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container, Grid, Paper, Typography, TextField, Button, Box,
    InputAdornment, IconButton, CircularProgress, Alert
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';

const LoginPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(credentials.email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        if (!credentials.password) {
            setError('Password is required.');
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:9090/api/auth/login', credentials);
            const { token, role, userId, fullName } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify({ email: credentials.email, role, userId, fullName }));

            if (role === 'ADMIN') navigate('/admin/dashboard');
            else if (role === 'DRIVER') navigate('/driver/dashboard');
            else if (role === 'EMPLOYEE') navigate('/employee/dashboard');
            else navigate('/customer/dashboard');

        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Invalid credentials. Please try again.");
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
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Corporate Blue Gradient
            padding: 2
        }}>
            <Paper elevation={10} sx={{ maxWidth: 900, width: '100%', borderRadius: 4, overflow: 'hidden' }}>
                <Grid container>
                    {/* Brand Section (Left Side) */}
                    <Grid item xs={12} md={6} sx={{
                        bgcolor: '#2c3e50',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 6,
                        textAlign: 'center'
                    }}>
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            Packers & Movers
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.8 }}>
                            Seamless Relocation Services
                        </Typography>
                    </Grid>

                    {/* Login Form Section (Right Side) */}
                    <Grid item xs={12} md={6} sx={{ p: 6 }}>
                        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                            Login to manage your bookings and profile.
                        </Typography>

                        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

                        <form onSubmit={handleLogin}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                value={credentials.email}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email color="action" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                margin="normal"
                                value={credentials.password}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock color="action" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 4, mb: 2, height: 50, fontWeight: 'bold' }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                            </Button>

                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 500 }}>
                                        Don't have an account? Sign Up
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

export default LoginPage;
