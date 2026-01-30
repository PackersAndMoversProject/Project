import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={() => navigate('/')}
                    >
                        Packers & Movers
                    </Typography>

                    <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                    <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ ml: 2 }}
                        onClick={() => navigate('/customer/quote')}
                    >
                        Get Quote
                    </Button>
                    <Button color="inherit" onClick={() => navigate('/admin/dashboard')}>Admin</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
