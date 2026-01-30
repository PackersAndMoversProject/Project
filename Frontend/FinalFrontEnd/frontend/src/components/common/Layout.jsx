import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
// import './Layout.css'; // Optional styling for main content area

const Layout = ({ role }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar role={role} />
            <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
