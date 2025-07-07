import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Award, Users, CheckCircle, Crown, Diamond, Zap } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function Component() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        {
            icon: <Palette className="w-8 h-8" />,
            number: "6+",
            label: "Major Cities",
            color: "from-amber-400 to-orange-500",
            accent: "border-amber-200"
        },
        {
            icon: <Award className="w-8 h-8" />,
            number: "15+",
            label: "Years Experience",
            color: "from-blue-500 to-indigo-600",
            accent: "border-blue-200"
        },
        {
            icon: <Users className="w-8 h-8" />,
            number: "500+",
            label: "Happy Clients",
            color: "from-emerald-500 to-teal-600",
            accent: "border-emerald-200"
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            number: "99%",
            label: "Quality Assured",
            color: "from-purple-500 to-violet-600",
            accent: "border-purple-200"
        }
    ];

    const features = [
        {
            icon: <Crown className="w-6 h-6" />,
            text: "Premium Quality",
            bg: "bg-gradient-to-br from-amber-50 to-orange-100",
            iconColor: "text-amber-700",
            border: "border-amber-200"
        },
        {
            icon: <Diamond className="w-6 h-6" />,
            text: "Industry Standards",
            bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
            iconColor: "text-blue-700",
            border: "border-blue-200"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            text: "Pan-India Delivery",
            bg: "bg-gradient-to-br from-emerald-50 to-teal-100",
            iconColor: "text-emerald-700",
            border: "border-emerald-200"
        }
    ];

    return (
        <>
            {/* Hero Section - Luxury Edition */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
                {/* Sophisticated background elements */}
                <div className="absolute inset-0">
                    {/* Elegant floating orbs */}
                    <div
                        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 via-orange-300/20 to-red-200/30 rounded-full blur-3xl"
                        style={{
                            transform: `translateY(${scrollY * 0.1}px)`,
                            animation: 'float 8s ease-in-out infinite'
                        }}
                    ></div>
                    <div
                        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/25 via-indigo-300/20 to-purple-200/25 rounded-full blur-3xl"
                        style={{
                            transform: `translateY(${-scrollY * 0.05}px)`,
                            animation: 'float 10s ease-in-out infinite reverse'
                        }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-2xl"
                        style={{
                            animation: 'float 6s ease-in-out infinite',
                            animationDelay: '2s'
                        }}
                    ></div>

                    {/* Luxury grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

                    {/* Premium geometric accents */}
                    <div className="absolute top-1/4 left-1/2 w-2 h-20 bg-gradient-to-b from-amber-400 to-transparent rotate-45 opacity-60"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-2 h-16 bg-gradient-to-b from-blue-400 to-transparent rotate-12 opacity-50"></div>
                </div>

                <div className={`max-w-7xl mx-auto text-center space-y-12 relative z-10 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Luxury Trust Badge */}
                    <div className="flex justify-center">
                        <Badge className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white hover:shadow-2xl hover:shadow-amber-200 px-8 py-4 text-base font-semibold rounded-full border-2 border-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-105">
                            <Crown className="w-5 h-5 mr-3 text-yellow-200" />
                            PREMIUM PAINT SOLUTIONS • TRUSTED SINCE 2009
                            <Diamond className="w-5 h-5 ml-3 text-yellow-200" />
                        </Badge>
                    </div>

                    {/* Sophisticated Main Heading */}
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                            <span className="block text-slate-800 mb-4 drop-shadow-sm">
                                PREMIUM PAINT
                            </span>
                            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                                EXCELLENCE
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium">
                            Manufacturing <span className="font-bold text-slate-800">world-class primers and oil paints</span> that exceed industry standards.
                            <br />
                            <span className="text-amber-700 font-semibold">Delivering uncompromising quality across India's industrial landscape.</span>
                        </p>
                    </div>

                    {/* Premium Features Display */}
                    <div className="flex flex-wrap justify-center items-center gap-8 py-12">
                        {features.map((feature, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                                    <div className={`p-4 ${feature.bg} rounded-xl border-2 ${feature.border} group-hover:scale-110 transition-transform duration-300`}>
                                        <div className={feature.iconColor}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <span className="text-slate-700 font-semibold text-lg">
                                        {feature.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-amber-300 hover:scale-105 transition-all duration-300 group border-2 border-white/20">
                            REQUEST PREMIUM QUOTE
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>

                        <Button variant="outline" className="border-2 border-slate-300 bg-white/90 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 px-12 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-slate-300 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            EXPLORE CATALOG
                        </Button>
                    </div>
                </div>
            </div>

            {/* Luxury Stats Section */}
            <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden flex items-center">
                {/* Elegant background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-r from-blue-100/50 to-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-to-r from-amber-100/50 to-orange-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>

                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.05),transparent_50%)]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20">
                    {/* Premium Header Badge */}
                    <div className="flex justify-center mb-16">
                        <Badge className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl border-2 border-white/20">
                            <Award className="w-5 h-5 mr-3 text-amber-300" />
                            INDUSTRY LEADERSHIP & EXCELLENCE
                        </Badge>
                    </div>

                    {/* Sophisticated Title */}
                    <div className="text-center mb-20 max-w-6xl mx-auto">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
                            Comprehensive Paint{' '}
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Mastery
                            </span>
                        </h2>

                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                            From precision-engineered industrial primers to premium decorative finishes,
                            we deliver comprehensive paint solutions that define quality standards across industries.
                        </p>
                    </div>

                    {/* Premium Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl hover:shadow-gray-200 transition-all duration-700 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-2 border-gray-100 hover:border-gray-200 hover:scale-105 cursor-pointer"
                                style={{
                                    animationDelay: `${index * 200}ms`,
                                    animation: 'fadeInUp 1s ease-out forwards'
                                }}
                            >
                                <CardContent className="p-10 text-center">
                                    {/* Premium Icon */}
                                    <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 border-4 ${stat.accent}`}>
                                        <div className="text-white">
                                            {stat.icon}
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <h3 className="text-4xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                                        {stat.number}
                                    </h3>

                                    {/* Label */}
                                    <p className="text-slate-600 font-semibold text-base">
                                        {stat.label}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Elegant decorative line */}
                    <div className="mt-20 flex justify-center">
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Premium Custom Styles */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Smooth scroll behavior */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Premium glassmorphism effect */
                .backdrop-blur-sm {
                    backdrop-filter: blur(8px);
                }
            `}</style>
        </>
    )
}