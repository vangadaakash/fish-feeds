import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About */}
                <div>
                    {/* Logo */}
                    <img
                        src="/images/nav-logo.jpg"
                        alt="Populerr Fish Feeds Logo"
                        className="w-24 h-auto mb-4"
                    />

                    <h3 className="text-xl font-semibold mb-4 text-white">
                        Populerr Fish Feeds
                    </h3>
                    <p>
                        Premium quality floating fish feeds for optimal growth and health in aquaculture.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>
                        <li><Link to="/about" className="hover:text-white">Our Mission</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact & Map */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
                    <p>Email: populerrfishfeeds@gmail.com</p>
                    <p>Phone: +91 8933095000</p>
                    <p className="mt-2">
                        Address: <br /> Mehnagar, Shah Dewait, Azamgarh,
                        <br /> UttarPradesh, India, 276204,<br />
                        
                    </p>

                   
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
                © 2025 Populerr Fish Feeds. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
