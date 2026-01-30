import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import homepageImage from '../assets/homepage.jpg';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleServiceClick = (serviceId) => {
        navigate('/customer/quote', { state: { serviceId } });
    };

    return (
        <div className="landing-page">
            {/* Navbar Overlay */}
            <nav className="navbar">
                <a onClick={() => navigate('/')} className="navbar-brand" style={{ cursor: 'pointer' }}>Movers & Packers</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a onClick={() => navigate('/')} className="nav-link">Home</a></li>

                    {/* Services Dropdown */}
                    <li className="nav-item">
                        <span className="nav-link">Services ▾</span>
                        <div className="dropdown-menu">
                            <a onClick={() => handleServiceClick(1)} className="dropdown-item">Home Shifting</a>
                            <a onClick={() => handleServiceClick(2)} className="dropdown-item">Office Shifting</a>
                            <a onClick={() => handleServiceClick(3)} className="dropdown-item">Vehicle Shifting</a>
                        </div>
                    </li>

                    <li className="nav-item"><a onClick={() => navigate('/about')} className="nav-link">About</a></li>

                    {/* Conditional rendering could be added here if user is logged in, but for landing page we usually show Login */}
                    <li className="nav-item"><a onClick={() => navigate('/login')} className="nav-link">User Login</a></li>
                    <li className="nav-item"><a onClick={() => navigate('/contact')} className="nav-link">Contact Us</a></li>
                </ul>
                <a onClick={() => navigate('/customer/quote')} className="btn-quote" style={{ cursor: 'pointer' }}>Request Quote</a>
            </nav>

            {/* Hero Section */}
            <header className="hero-section" style={{ backgroundImage: `url(${homepageImage})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">SAFE, FAST & AFFORDABLE RELOCATION</h1>
                    <p className="hero-subtitle">Trusted by thousands for seamless home and office moving services.</p>
                    <a onClick={() => navigate('/customer/quote')} className="hero-cta" style={{ cursor: 'pointer' }}>Get a Free Quote</a>
                </div>
            </header>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3 className="feature-title">Safe & Secure</h3>
                        <p className="feature-desc">We ensure your belongings are packed and transported with the utmost care and insurance coverage.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3 className="feature-title">On-Time Delivery</h3>
                        <p className="feature-desc">Our dedicated fleet ensures punctual delivery across all major cities.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3 className="feature-title">Affordable Pricing</h3>
                        <p className="feature-desc">Transparent quotes with no hidden charges. Quality service at the best market rates.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👷</div>
                        <h3 className="feature-title">Expert Team</h3>
                        <p className="feature-desc">Highly trained professionals to handle packing, loading, and unloading efficiently.</p>
                    </div>
                </div>
            </section>

            {/* About Section Preview */}
            <section className="about-preview">
                <h2 className="section-title">About Our Company</h2>
                <p className="about-text">
                    We are a leading Packers & Movers service provider dedicated to making relocation hassle-free.
                    Whether you are moving your home, office, or vehicle, our expert team handles everything from packing
                    to final setup at your new destination. With years of experience and a customer-first approach,
                    we guarantee a smooth transition for you and your family.
                </p>
                <a onClick={() => navigate('/about')} style={{ color: '#e67e22', fontWeight: 'bold', cursor: 'pointer' }}>Read More →</a>
            </section>

            {/* Simple Footer */}
            <footer style={{ backgroundColor: '#2c3e50', color: 'white', padding: '2rem', textAlign: 'center' }}>
                <p>© 2026 Packers & Movers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
