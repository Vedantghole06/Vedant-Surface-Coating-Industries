import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center group">
                            <div className="flex-shrink-0 flex items-center group">
                                <img
                                    src="./logo.png"
                                    alt="Logo"
                                    className="h-18 w-auto pb-2 object-contain"
                                />
                            </div>
                            <div className="ml-4">
                                <span className="text-xl font-bold text-gray-900 leading-tight">
                                    Vedant Surface
                                </span>
                                <div className="text-sm font-medium text-orange-600 -mt-1">
                                    Coating Solutions
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Products', href: '/products' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-gray-700 hover:text-orange-600 px-4 py-2 text-md font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:+91 9823798526"
                            target="_blank"
                            className="text-orange-600 hover:text-orange-700 p-2 rounded-full hover:bg-orange-50 transition-colors duration-200"
                        >
                            <Phone className="h-5 w-5" />
                        </a>
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Book A Call
                            <svg
                                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-orange-500 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Products', href: '/products' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' }
                        ].map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg transform hover:translate-x-2"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="px-2 pt-4 space-y-3">
                            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center shadow-lg">
                                Book A Call
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
};

export default Navbar;