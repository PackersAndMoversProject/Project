import React from 'react';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import aboutImage from '../../image/Screenshot (275).png';

const AboutPage = () => {
  const services = [
    {
      title: 'Household Shifting',
      description: 'Complete home relocation services with professional packing and safe transportation',
      icon: '🏠'
    },
    {
      title: 'Office Relocation',
      description: 'Corporate moving solutions with minimal business disruption and secure handling',
      icon: '🏢'
    },
    {
      title: 'Vehicle Transportation',
      description: 'Safe and reliable car and bike transportation across cities',
      icon: '🚗'
    },
    {
      title: 'Storage Solutions',
      description: 'Secure warehousing and storage facilities for short and long-term needs',
      icon: '📦'
    }
  ];

  const values = [
    {
      title: 'Customer Trust',
      description: 'Building lasting relationships through reliable service and transparent communication',
      icon: '🤝'
    },
    {
      title: 'Safety First',
      description: 'Ensuring the security of your belongings with proper packing and careful handling',
      icon: '🛡️'
    },
    {
      title: 'Reliability',
      description: 'Consistent, on-time service delivery that you can depend on',
      icon: '⏰'
    },
    {
      title: 'Transparency',
      description: 'Clear pricing, honest communication, and no hidden charges',
      icon: '💎'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Packers&Movers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner for safe, reliable, and professional moving services across the country
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Packers&Movers, your premier relocation partner with over a decade of experience in the moving industry. We have successfully completed thousands of relocations across the country, earning the trust of families and businesses alike.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began with a simple mission: to make moving stress-free and affordable for everyone. Today, we stand as one of the most reliable moving companies, committed to delivering excellence in every aspect of our service.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Packers&Movers is a professional relocation service provider dedicated to making your moving experience smooth and stress-free. With years of experience in the industry, we specialize in providing comprehensive moving solutions for individuals, families, and businesses.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We understand that moving can be overwhelming, which is why we offer end-to-end services that handle every aspect of your relocation. From careful packing to safe transportation and timely delivery, we ensure your belongings reach their destination securely.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={aboutImage} 
                  alt="About Packers and Movers" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              To become the most trusted and preferred moving company nationwide, setting industry standards for quality service, customer satisfaction, and technological innovation in relocation services.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional moving services that exceed customer expectations through professional expertise, innovative solutions, and unwavering commitment to safety and reliability.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to continuous improvement, environmental responsibility, and building long-term relationships with our customers through honest, transparent, and reliable service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Responsibility */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Safety and Responsibility</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Packers&Movers, safety is our top priority. We understand that your belongings are not just items, but memories and investments that deserve the utmost care and protection.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Insurance</h4>
                <p className="text-gray-600 text-sm">Full coverage protection for all your valuable items during transit</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Rigorous quality checks at every stage of the moving process</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-semibold text-gray-800 mb-2">Secure Handling</h4>
                <p className="text-gray-600 text-sm">Professional packing materials and secure transportation methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Company</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Established with a vision to revolutionize the moving industry, Packers&Movers has grown from a small local business to a nationwide network of moving professionals. Our success is built on the foundation of trust, reliability, and customer satisfaction.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-semibold text-gray-800 mb-2">10+ Years Experience</h4>
                <p className="text-gray-600 text-sm">Over a decade of excellence in moving services</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-semibold text-gray-800 mb-2">5000+ Happy Customers</h4>
                <p className="text-gray-600 text-sm">Thousands of successful relocations completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Pan-India Network</h4>
                <p className="text-gray-600 text-sm">Comprehensive coverage across all major cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;