import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, MenuItem } from '@mui/material';

const SupportTicketForm = () => {
    const [category, setCategory] = useState('OTHER');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to create ticket
        console.log('Ticket Created', { category, description });
        alert('Ticket Created Successfully');
    };

    return (
        <Card style={{ maxWidth: 600, margin: '20px auto' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Raise a Support Ticket</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        select
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="PAYMENT_ISSUE">Payment Issue</MenuItem>
                        <MenuItem value="DRIVER_BEHAVIOR">Driver Behavior</MenuItem>
                        <MenuItem value="DELAY_COMPLAINT">Delay Complaint</MenuItem>
                        <MenuItem value="APP_ISSUE">App Issue</MenuItem>
                        <MenuItem value="OTHER">Other</MenuItem>
                    </TextField>

                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        required
                    />

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Ticket
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default SupportTicketForm;
