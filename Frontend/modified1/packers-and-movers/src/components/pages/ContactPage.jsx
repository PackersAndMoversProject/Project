import React, { useState } from 'react';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleClear = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <span className="text-gray-600">HOME</span> | <span className="text-blue-600 font-semibold">CONTACT US</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Address Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Address</h3>
              <div className="space-y-4">
                <p className="text-gray-600 flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">📍</span>
                  123 Business District, Mumbai, Maharashtra 400001, India
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  Free Phone: +91 98765 43210
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="text-blue-600 mr-3">✉️</span>
                  info@packersmovers.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject*"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    SUBMIT
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
                  >
                    CLEAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;