import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Paintbrush, Shield, Truck, Palette, Award, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card';


export default function Component() {

    const stats = [
        {
            icon: <Palette className="w-8 h-8 text-orange-100" />,
            number: "6+",
            label: "Major Cities",
            gradient: "from-orange-400 to-red-500"
        },
        {
            icon: <Award className="w-8 h-8 text-orange-100" />,
            number: "15+",
            label: "Years Experience",
            gradient: "from-amber-400 to-orange-500"
        },
        {
            icon: <Users className="w-8 h-8 text-orange-100" />,
            number: "500+",
            label: "Happy Clients",
            gradient: "from-pink-400 to-rose-500"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-orange-100" />,
            number: "99%",
            label: "Quality Assured",
            gradient: "from-emerald-400 to-teal-500"
        }
    ];

    return (

        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
                    {/* Trust Badge with Animation */}
                    <div className="flex justify-center animate-fade-in">
                        <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 hover:from-orange-200 hover:to-orange-100 px-6 py-3 text-sm font-semibold border border-orange-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Star className="w-4 h-4 mr-2 fill-orange-500 text-orange-500 animate-pulse" />
                            Trusted since 2009 • 15+ Years of Excellence
                        </Badge>
                    </div>

                    {/* Main Heading with Gradient */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                Premium paint solutions
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                                for industrial excellence
                            </span>
                        </h1>

                        {/* Enhanced Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Manufacturing high-quality primers and oil paints that meet the highest industry standards.
                            <span className="text-orange-600 font-medium"> Serving major industrial hubs across India</span> with reliability and innovation.
                        </p>
                    </div>

                    {/* Feature Icons */}
                    <div className="flex justify-center items-center gap-8 py-6">
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="p-2 bg-orange-100 rounded-full">
                                <Paintbrush className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="text-sm font-medium">Premium Quality</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="p-2 bg-blue-100 rounded-full">
                                <Shield className="w-5 h-5 text-blue-500" />
                            </div>
                            <span className="text-sm font-medium">Industry Standards</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="p-2 bg-green-100 rounded-full">
                                <Truck className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-sm font-medium">Pan-India Delivery</span>
                        </div>
                    </div>

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 p-7 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                        >
                            Get Quote Now
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-10 p-7 text-lg font-semibold rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            View Products
                        </Button>
                    </div>


                </div>

                <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>
            </div>



            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
                    {/* Header Badge */}
                    <div className="flex justify-center mb-8">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-6 py-2 text-sm font-medium rounded-full border border-blue-200 shadow-sm">
                            🎨 Our Products
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                            Comprehensive paint{' '}
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                solutions
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            From industrial-grade primers to vibrant decorative paints, we offer everything you
                            need for your projects with unmatched quality and reliability.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white"
                            >
                                <CardContent className="p-6 lg:p-8 text-center">
                                    {/* Icon with gradient background */}
                                    <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {stat.icon}
                                        </div>
                                    </div>

                                    {/* Number with enhanced styling */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                        {stat.number}
                                    </h3>

                                    {/* Label */}
                                    <p className="text-gray-600 font-medium text-sm lg:text-base">
                                        {stat.label}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Additional decorative elements */}
                    <div className="mt-20 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce animation-delay-400"></div>
                    </div>
                </div>

                {/* Custom styles for animation delays */}
                <style>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
            </div>


        </>
    )
}