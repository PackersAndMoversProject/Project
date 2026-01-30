import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ role }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token logic here
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <div className="logo">Packers & Movers</div>
            <ul className="menu">
                {role === 'CUSTOMER' && (
                    <>
                        <li><Link to="/customer/dashboard">Dashboard</Link></li>
                        <li><Link to="/customer/quote">Get Quote</Link></li>
                        <li><Link to="/customer/bookings">My Bookings</Link></li>
                        <li><Link to="/customer/support">Support</Link></li>
                    </>
                )}
                {role === 'DRIVER' && (
                    <>
                        <li><Link to="/driver/dashboard">Dashboard</Link></li>
                        <li><Link to="/driver/jobs">My Jobs</Link></li>
                        <li><Link to="/driver/earnings">Earnings</Link></li>
                        <li><Link to="/driver/documents">Documents</Link></li>
                    </>
                )}
                {role === 'ADMIN' && (
                    <>
                        <li><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/users">Users</Link></li>
                        <li><Link to="/admin/bookings">All Bookings</Link></li>
                        <li><Link to="/admin/drivers">Drivers</Link></li>
                    </>
                )}
                {role === 'EMPLOYEE' && (
                    <>
                        <li><Link to="/employee/dashboard">Dashboard</Link></li>
                        <li><Link to="/employee/verification">Verification</Link></li>
                        <li><Link to="/employee/tickets">Support Tickets</Link></li>
                    </>
                )}
            </ul>
            <div className="logout">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
