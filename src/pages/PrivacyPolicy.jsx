import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      {/* Google Font import */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <header style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p style={styles.paragraph}>
            populerrfishfeeds.com website is owned by Populerr Fish Feeds, which is the data controller of your personal data.
          </p>
          <p style={styles.paragraph}>
            We have adopted this Privacy Policy, which determines how we are processing the information collected by populerrfishfeeds.com, and which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using populerrfishfeeds.com website.
          </p>
          <p style={styles.paragraph}>
            We take care of your personal data and undertake to guarantee its confidentiality and security.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Personal Information We Collect</h2>
          <p style={styles.paragraph}>
            When you visit populerrfishfeeds.com, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as "Device Information."
          </p>
          <p style={styles.paragraph}>
            Moreover, we may collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration or purchases in order to fulfill agreements and provide services.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Do We Process Your Data?</h2>
          <p style={styles.paragraph}>
            Our top priority is customer data security. As such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website and provide services.
          </p>
          <p style={styles.paragraph}>
            Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
          </p>
          <p style={styles.paragraph}>
            You can visit the website without telling us who you are or revealing any personal information. However, if you wish to use some of the website's features, subscribe to our newsletter, or contact us, you may need to provide personal data such as your email, first name, last name, city of residence, organization, or telephone number.
          </p>
          <p style={styles.paragraph}>
            You may choose not to provide personal data, but certain website features may not be available to you (e.g., receiving our newsletter or contacting us directly). Users who are uncertain about which information is mandatory are welcome to contact us at <a href="mailto:populerrfishfeed@gmail.com" style={styles.link}>populerrfishfeed@gmail.com</a>.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Rights</h2>
          <p style={styles.paragraph}>If you are a European resident, you have the following rights related to your personal data:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>The right to be informed</li>
            <li style={styles.listItem}>The right of access</li>
            <li style={styles.listItem}>The right to rectification</li>
            <li style={styles.listItem}>The right to erasure</li>
            <li style={styles.listItem}>The right to restrict processing</li>
            <li style={styles.listItem}>The right to data portability</li>
            <li style={styles.listItem}>The right to object</li>
            <li style={styles.listItem}>Rights in relation to automated decision-making and profiling</li>
          </ul>
          <p style={styles.paragraph}>
            If you would like to exercise these rights, please contact us at the email below.
          </p>
          <p style={styles.paragraph}>
            Additionally, if you are a European resident, we note that we are processing your information to fulfill contracts (for example, if you place an order through the Site), or otherwise to pursue our legitimate business interests. Please note that your information may be transferred outside of Europe, including to Canada and the United States.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Links to Other Websites</h2>
          <p style={styles.paragraph}>
            Our website may contain links to other websites not owned or controlled by us. Please be aware that we are not responsible for such third-party websites or their privacy practices. We encourage you to read the privacy statements of every website that collects personal information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Information Security</h2>
          <p style={styles.paragraph}>
            We secure the information you provide on controlled computer servers, protected from unauthorized access, use, or disclosure. We use reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, or disclosure of personal data in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed as completely secure.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Legal Disclosure</h2>
          <p style={styles.paragraph}>
            We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, or when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <p style={styles.paragraph}>
            If you would like to contact us to understand more about this Privacy Policy or wish to exercise your rights regarding your personal information, you may send an email to:
          </p>
          <div style={styles.contactInfo}>
            <p style={styles.contactText}>📧 <a href="mailto:populerrfishfeed@gmail.com" style={styles.link}>populerrfishfeed@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: '"Open Sans", Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    backgroundColor: '#fff',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '2px solid #3498db',
    paddingTop : '3rem',
  },
  title: {
    color: '#2c3e50',
    marginBottom: '0.5rem',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  date: {
    color: '#7f8c8d',
    fontStyle: 'italic',
    fontSize: '1rem',
    marginTop: '0.5rem',
  },
  content: {
    padding: '0 1rem',
  },
  section: {
    marginBottom: '2.5rem',
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    color: '#3498db',
    marginBottom: '1.2rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #eaeaea',
    fontSize: '1.6rem',
    fontWeight: '600',
  },
  paragraph: {
    marginBottom: '1rem',
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  list: {
    marginLeft: '1.8rem',
    marginBottom: '1.2rem',
  },
  listItem: {
    marginBottom: '0.6rem',
    lineHeight: '1.5',
  },
  contactInfo: {
    backgroundColor: '#e8f4fc',
    padding: '1.2rem',
    borderRadius: '6px',
    marginTop: '1.2rem',
    textAlign: 'center',
  },
  contactText: {
    margin: '0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2c3e50',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.2s ease',
  },
};

// Add hover effect for links
styles.linkHover = {
  ...styles.link,
  ':hover': {
    color: '#2980b9',
    textDecoration: 'underline',
  }
};

export default PrivacyPolicy;