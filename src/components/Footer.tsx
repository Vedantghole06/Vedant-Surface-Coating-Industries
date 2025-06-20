import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Custom hook for smooth scroll to top
const useScrollToTop = () => {
    const smoothScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return smoothScrollToTop;
};

// Custom Link component with smooth scroll
const SmoothLink = ({ to, children, className }) => {
    const navigate = useNavigate();
    const scrollToTop = useScrollToTop();

    const handleClick = (e) => {
        e.preventDefault();

        // Add a subtle fade effect during navigation
        document.body.style.transition = 'opacity 0.3s ease-in-out';
        document.body.style.opacity = '0.7';

        // Navigate and scroll to top
        setTimeout(() => {
            navigate(to);
            scrollToTop();

            // Restore opacity
            setTimeout(() => {
                document.body.style.opacity = '1';
                // Clean up inline styles
                setTimeout(() => {
                    document.body.style.transition = '';
                    document.body.style.opacity = '';
                }, 300);
            }, 100);
        }, 150);
    };

    return (
        <a
            href={to}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <span className="ml-3 text-xl font-semibold">
                                Vedant Surface Coating
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Manufacturing premium paint solutions since 2009. Your trusted
                            partner for industrial-grade primers and oil paints.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <SmoothLink
                                    to="/"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                                    Home
                                </SmoothLink>
                            </li>
                            <li>
                                <SmoothLink
                                    to="/products"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                                    Products
                                </SmoothLink>
                            </li>
                            <li>
                                <SmoothLink
                                    to="/about"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                                    About
                                </SmoothLink>
                            </li>
                            <li>
                                <SmoothLink
                                    to="/contact"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center group"
                                >
                                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                                    Contact
                                </SmoothLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <a
                                        href="tel:+919823798526"
                                        className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200"
                                    >
                                        +91 9823798526
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <a
                                        href="mailto:sunilghole@gmail.com"
                                        className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 break-all"
                                    >
                                        sunilghole@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="text-gray-300 text-sm">
                                        Industrial Area, Sector 5, India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <div className="text-center sm:text-left">
                            <p className="text-gray-400 text-sm">
                                © 2024 Vedant Surface Coating Industries. All rights reserved. Crafting excellence since 2009.
                            </p>
                        </div>
                        <div className="text-center sm:text-right">
                            <p className="text-gray-400 text-sm">
                                Made with ❤️ by{' '}
                                <a
                                    href="https://kiwee-labs.vercel.app/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
                                >
                                    Kiwee Labs
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;