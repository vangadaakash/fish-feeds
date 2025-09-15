import React from 'react';
import { FaMedal, FaHeart, FaChartLine, FaLeaf } from "react-icons/fa";
import './About.css';
import image from '/images/image.png';


const ChooseUs = () => {
  return (
    <section className="choose-us-section">
      
      <div className="container">
        {/* Heading */}
        <h2 className="choose-us-heading">
          Why Choose Populerr Fish Feeds?
        </h2>
        <p className="choose-us-subheading">
          Our commitment to quality and innovation makes us the preferred choice for aquaculture professionals.
        </p>

        {/* Cards */}
        <div className="choose-us-grid">
          {/* Premium Quality */}
          <div className="choose-us-card">
            <div className="choose-us-icon-container">
              <FaMedal className="choose-us-icon" />
            </div>
            <h3 className="choose-us-card-title">
              Premium Quality
            </h3>
            <p className="choose-us-card-text">
              Our feeds are manufactured using the highest quality ingredients to ensure optimal nutrition for your fish.
            </p>
          </div>

          {/* Species-Specific */}
          <div className="choose-us-card">
            <div className="choose-us-icon-container">
              <FaHeart className="choose-us-icon" />
            </div>
            <h3 className="choose-us-card-title">
              Species-Specific
            </h3>
            <p className="choose-us-card-text">
              Specialized feed formulations tailored to the specific nutritional needs of different fish species.
            </p>
          </div>

          {/* Enhanced Growth */}
          <div className="choose-us-card">
            <div className="choose-us-icon-container">
              <FaChartLine className="choose-us-icon" />
            </div>
            <h3 className="choose-us-card-title">
              Enhanced Growth
            </h3>
            <p className="choose-us-card-text">
              Scientifically proven to improve growth rates, feed conversion, and overall fish health.
            </p>
          </div>

          {/* Sustainable */}
          <div className="choose-us-card">
            <div className="choose-us-icon-container">
              <FaLeaf className="choose-us-icon" />
            </div>
            <h3 className="choose-us-card-title">
              Sustainable
            </h3>
            <p className="choose-us-card-text">
              Environmentally responsible ingredients and production methods for sustainable aquaculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  /*const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: '15+ years of experience in aquaculture and fish nutrition research.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Head of Nutrition',
      bio: 'PhD in Aquatic Animal Nutrition with expertise in feed formulation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Production Manager',
      bio: 'Specializes in quality control and efficient feed manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Anjali Patel',
      role: 'Sales Director',
      bio: 'Expert in market development and customer relationship management.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
*/
  return (
    <div className="about-us-page">
      {/* Centered About Us Heading */}
      <div className="container">
        <div className="centered-heading">
          <h1 className="main-about-heading">About Us</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Populerr Fish Feeds</h1>
          <p>Leading the way in sustainable aquaculture nutrition</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>At Populerr Fish Feeds, we specialize in high-quality, nutritionally balanced fish feed designed to boost productivity and ensure the health and well-being of aquatic life. More than just a feed manufacturer, we are a driving force behind the sustainable growth of aquaculture.
</p>
              <p>Founded with a vision to revolutionize fish farming through superior nutrition, we combine scientific innovation, environmental responsibility, and farmer-focused solutions to help aquaculture thrive.
</p>
<p>Our team of experienced aquaculture experts, nutritionists, and engineers has developed a wide range of specialized fish feeds, carefully formulated to meet the diverse needs of different water species. With a state-of-the-art production facility, advanced quality testing labs, and efficient packaging systems, we ensure precision, consistency, and top quality in every single unit.
</p>
<p>Whether you're a small-scale farmer or a large commercial aquaculture operator, Populerr Fish Feeds is your trusted partner — providing expert guidance, a consistent supply, and a superior quality product that drives success.</p>
            </div>
            <div className="story-image">
              <img src={image} alt="Fish farming" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ChooseUs />

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously research and develop new formulations to improve fish health and growth rates.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We work closely with fish farmers to understand their challenges and develop solutions together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices that ensure the future of aquaculture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Experts</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default AboutUs;