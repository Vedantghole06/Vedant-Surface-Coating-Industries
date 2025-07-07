import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode, MouseEvent } from 'react';

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

// Define prop types for SmoothLink
interface SmoothLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

// Custom Link component with smooth scroll
const SmoothLink = ({ to, children, className }: SmoothLinkProps) => {
    const navigate = useNavigate();
    const scrollToTop = useScrollToTop();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        document.body.style.transition = 'opacity 0.3s ease-in-out';
        document.body.style.opacity = '0.7';

        setTimeout(() => {
            navigate(to);
            scrollToTop();

            setTimeout(() => {
                document.body.style.opacity = '1';
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
                            <div className="flex-shrink-0 flex items-center group">
                                <img
                                    src="./logo.png"
                                    alt="Logo"
                                    className="h-10 w-auto object-contain rounded-md shadow-sm"
                                />
                            </div>
                            <span className="ml-3 text-xl font-semibold">
                                Vedant Surface Coating Industries
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
                            {[
                                { to: "/", label: "Home" },
                                { to: "/products", label: "Products" },
                                { to: "/about", label: "About" },
                                { to: "/contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <SmoothLink
                                        to={link.to}
                                        className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                                        {link.label}
                                    </SmoothLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <a
                                    href="tel:+919823798526"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200"
                                >
                                    +91 9823798526
                                </a>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <a
                                    href="mailto:sunilghole@gmail.com"
                                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200 break-all"
                                >
                                    sunilghole@gmail.com
                                </a>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                    Industrial Area, Sector 5, India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © 2024 Vedant Surface Coating Industries. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm text-center sm:text-right">
                            Made with ❤️ by{' '}
                            <a
                                href="https://kiwee-labs.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
                            >
                                Kiwee Labs
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
