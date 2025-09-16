import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      {/* Google Font import */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <header style={styles.header}>
        <h1 style={styles.title}>Terms and Conditions</h1>
        {/* <p style={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p> */}
      </header>
      
      <div style={styles.content}>
        <section style={styles.section}>
          <p style={styles.paragraph}>
            Welcome to populerrfishfeeds.com!
          </p>
          <p style={styles.paragraph}>
            These terms and conditions outline the rules and regulations for the use of Populerr Fish Feeds' Website, located at https://populerrfishfeeds.com.
          </p>
          <p style={styles.paragraph}>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use populerrfishfeeds.com if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cookies</h2>
          <p style={styles.paragraph}>
            The website uses cookies to help personalize your online experience. By accessing populerrfishfeeds.com, you agreed to use the required cookies.
          </p>
          <p style={styles.paragraph}>
            A cookie is a text file placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by the web server in the domain that issued the cookie to you.
          </p>
          <p style={styles.paragraph}>
            We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional cookies. Some required cookies are necessary for the operation of our website. These cookies do not require your consent as they always work.
          </p>
          <p style={styles.paragraph}>
            Please note: by accepting required cookies, you also accept third-party cookies that might be used via services integrated into our website (for example, embedded videos provided by third parties).
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>License</h2>
          <p style={styles.paragraph}>
            Unless otherwise stated, Populerr Fish Feeds and/or its licensors own the intellectual property rights for all material on populerrfishfeeds.com. All intellectual property rights are reserved.
          </p>
          <p style={styles.paragraph}>
            You may access this from populerrfishfeeds.com for your own personal use, subject to restrictions set in these terms and conditions.
          </p>
          <p style={styles.paragraph}>
            You must not:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Copy or republish material from populerrfishfeeds.com</li>
            <li style={styles.listItem}>Sell, rent, or sub-license material from populerrfishfeeds.com</li>
            <li style={styles.listItem}>Reproduce, duplicate, or copy material from populerrfishfeeds.com</li>
            <li style={styles.listItem}>Redistribute content from populerrfishfeeds.com</li>
          </ul>
          <p style={styles.paragraph}>
            This Agreement shall begin on the date hereof.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Comments and User Content</h2>
          <p style={styles.paragraph}>
            Parts of this website may offer users an opportunity to post and exchange opinions and information in certain areas of the website. Populerr Fish Feeds does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of Populerr Fish Feeds, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them.
          </p>
          <p style={styles.paragraph}>
            To the extent permitted by applicable laws, Populerr Fish Feeds shall not be liable for Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of, posting of, and/or appearance of Comments on this website.
          </p>
          <p style={styles.paragraph}>
            Populerr Fish Feeds reserves the right to monitor all Comments and to remove any Comments considered inappropriate, offensive, or causing breach of these Terms and Conditions.
          </p>
          <p style={styles.paragraph}>
            You warrant and represent that:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.</li>
            <li style={styles.listItem}>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party.</li>
            <li style={styles.listItem}>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.</li>
            <li style={styles.listItem}>The Comments will not be used to solicit or promote business, custom, or unlawful activity.</li>
          </ul>
          <p style={styles.paragraph}>
            You hereby grant Populerr Fish Feeds a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any forms, formats, or media.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Hyperlinking to Our Content</h2>
          <p style={styles.paragraph}>
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Government agencies</li>
            <li style={styles.listItem}>Search engines</li>
            <li style={styles.listItem}>News organizations</li>
            <li style={styles.listItem}>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
            <li style={styles.listItem}>System-wide Accredited Businesses (except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups, which may not hyperlink to our website)</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <p style={styles.paragraph}>
            If you have any questions about these Terms and Conditions, please contact us at:
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
  },
  title: {
    color: '#2c3e50',
    marginBottom: '0.5rem',
    fontSize: '2.5rem',
    fontWeight: '700',
    paddingTop: '3.5rem'
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

export default TermsAndConditions;