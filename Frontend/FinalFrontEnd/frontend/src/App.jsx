import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CustomerDashboard from './pages/CustomerDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import QuotationPage from './pages/QuotationPage';
import BookingReviewPage from './pages/BookingReviewPage';
import MyBookingsPage from './pages/MyBookingsPage';
import SupportTicketForm from './pages/SupportTicketForm';
import LandingPage from './pages/LandingPage';
import AdminBookingsPage from './pages/AdminBookingsPage';
import AdminDriversPage from './pages/AdminDriversPage';
import './App.css';

// Mock Protected Route
const ProtectedRoute = ({ children, role }) => {
  // In real app, check localStorage user role
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Navigate to="/login" />;
  // if (role && user.role !== role) return <Navigate to="/login" />; // Disable for demo flexibility
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Customer Routes */}
        <Route path="/customer" element={<Layout role="CUSTOMER" />}>
          <Route path="dashboard" element={<ProtectedRoute role="CUSTOMER"><CustomerDashboard /></ProtectedRoute>} />
          <Route path="quote" element={<ProtectedRoute role="CUSTOMER"><QuotationPage /></ProtectedRoute>} />
          <Route path="bookings" element={<ProtectedRoute role="CUSTOMER"><MyBookingsPage /></ProtectedRoute>} />
          <Route path="booking/:quotationId" element={<ProtectedRoute role="CUSTOMER"><BookingReviewPage /></ProtectedRoute>} />
          <Route path="support" element={<ProtectedRoute role="CUSTOMER"><SupportTicketForm /></ProtectedRoute>} />
        </Route>

        {/* Driver Routes */}
        <Route path="/driver" element={<Layout role="DRIVER" />}>
          <Route path="dashboard" element={<ProtectedRoute role="DRIVER"><DriverDashboard /></ProtectedRoute>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Layout role="ADMIN" />}>
          <Route path="dashboard" element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>} />
          <Route path="bookings" element={<ProtectedRoute role="ADMIN"><AdminBookingsPage /></ProtectedRoute>} />
          <Route path="drivers" element={<ProtectedRoute role="ADMIN"><AdminDriversPage /></ProtectedRoute>} />
          {/* Placeholder for Users if needed, or redirect */}
          <Route path="users" element={<Navigate to="/admin/dashboard" />} />
        </Route>

        {/* Employee Routes */}
        <Route path="/employee" element={<Layout role="EMPLOYEE" />}>
          <Route path="dashboard" element={<ProtectedRoute role="EMPLOYEE"><EmployeeDashboard /></ProtectedRoute>} />
        </Route>

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
