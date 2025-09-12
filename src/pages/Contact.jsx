import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'select',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AProduct: ${formData.product}%0AMessage: ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918933095000?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', product: 'select', message: '' });
    
    // Show success message
    alert('Redirecting to WhatsApp to send your message!');
  };

  return (
    <div className="contact-container">
      {/* Page Heading */}
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-content">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="info-text">
            Have questions about our products or need assistance choosing the right feed for your fish? Our team is here to help.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-container">📍</div>
              <div className="contact-text">
                <h4>Address</h4>
                <p>Mehnagar, Shah Dewait, Azamgarh, UttarPradesh, India, 276204</p>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.525822857269!2d83.12517891543082!3d25.930369183650695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b9cde3c94b6f%3A0xee0c089942339e83!2sPopulerr%20Fish%20Feeds!5e0!3m2!1sen!2sin!4v1694345678901!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '10px', marginTop: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">📞</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 8933095000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">✉</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>populerrfishfeed@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="contact-form">
          <h2>Request Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Product of Interest</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
              > 
                <option value="select">Select Product</option>
<option value="34/5 (1.5mm)">34/5 (1.5mm)</option>
<option value="32/5 (2mm)">32/5 (2mm)</option>
<option value="30/4 (3mm)">30/4 (3mm)</option>
<option value="28/5 (4mm)">28/5 (4mm)</option>
<option value="28/4 (4mm)">28/4 (4mm)</option>
<option value="28/4 (3mm)">28/4 (3mm)</option>
<option value="24/4 (4mm)">24/4 (4mm)</option>
<option value="20/4 (3mm)">20/4 (3mm)</option>
<option value="Other Products">Other Products</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;