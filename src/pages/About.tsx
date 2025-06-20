import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Users,
  MapPin,
  Package,
  Star,
  UserCheck,
  Lightbulb,
  Shield,
  Target,
  Eye,
  ArrowRight,
  CheckCircle,
  Factory,
  Palette,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: Award, number: "15+", label: "Years of Excellence", color: "from-orange-400 to-orange-600" },
    { icon: MapPin, number: "6", label: "Cities Served", color: "from-blue-400 to-blue-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "from-green-400 to-green-600" },
    { icon: Package, number: "500+", label: "Product Variants", color: "from-purple-400 to-purple-600" }
  ];

  const values = [
    {
      icon: Star,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we manufacture, delivering consistent quality that exceeds industry expectations.",
      color: "from-orange-400 to-orange-600",
      bg: "from-orange-50 to-orange-100",
      border: "border-orange-200"
    },
    {
      icon: UserCheck,
      title: "Customer Focus",
      description: "Our customer success is our primary goal. We build lasting partnerships through exceptional service and support.",
      color: "from-blue-400 to-blue-600",
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving our formulations and manufacturing processes to stay ahead of industry trends.",
      color: "from-green-400 to-green-600",
      bg: "from-green-50 to-green-100",
      border: "border-green-200"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality and dependable service you can trust for all your industrial painting needs.",
      color: "from-purple-400 to-purple-600",
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-green-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-blue-600/5"></div>
        <div className={`container mx-auto px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-8 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 px-6 py-2 text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Crafting excellence in{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent animate-pulse">
                surface coatings
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              15 years of dedication to manufacturing premium paint solutions that protect,
              beautify, and endure across India's most demanding industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300 px-6 py-2 shadow-lg">
                <CheckCircle className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Building trust through quality &
                <span className="text-orange-600"> innovation</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Vedant Surface Coating Industries began with a simple
                  yet powerful vision: to manufacture the highest quality paints and
                  primers that industries could rely on.
                </p>
                <p>
                  What started as a small manufacturing unit has grown into a trusted name across
                  major industrial hubs in India. We specialize in both oil-based and water-based
                  formulations, ensuring we meet diverse industry requirements with precision and care.
                </p>
                <p>
                  Today, we proudly serve industries in Indore, Chennai, Jabalpur, Zafrabad,
                  Hyderabad, and Nagpur, maintaining our commitment to quality and innovation in
                  every product we create.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
                Learn More About Our Process
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <Card className="relative p-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 border-2 border-orange-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl mb-8 mx-auto shadow-xl">
                  <Factory className="w-10 h-10 text-white" />
                </div>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl text-gray-900 font-bold">Manufacturing Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Advanced facilities equipped with modern technology for precision
                    manufacturing and rigorous quality control processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Numbers Section */}

      <section id="achievements" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 px-4 sm:px-6 py-2 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              Our Achievements
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Numbers that speak volumes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Our commitment to excellence is reflected in the trust our clients place in us and
              the milestones we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 group bg-white/80 backdrop-blur-sm transform hover:-translate-y-4 hover:rotate-1"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-3xl mb-6 sm:mb-8 mx-auto group-hover:scale-125 transition-all duration-500 shadow-xl`}>
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <CardContent className="p-0">
                  <div className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 ${activeCard === index ? 'scale-110' : ''}`}>
                    {item.number}
                  </div>
                  <div className="text-gray-600 font-medium text-base sm:text-lg">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300 px-6 py-2 shadow-lg">
              <Palette className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The principles that guide everything we do
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our core values shape our culture, drive our decisions, and ensure we deliver
              exceptional results for our clients every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-10 hover:shadow-2xl transition-all duration-500 ${value.border} hover:border-opacity-60 group bg-gradient-to-br ${value.bg} transform hover:-translate-y-2 hover:rotate-1`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl text-gray-900 font-bold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-12 bg-gradient-to-br from-orange-50 via-white to-orange-100 border-2 border-orange-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl mb-10 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl text-gray-900 font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-xl">
                    To provide superior quality paint and coating solutions that protect and
                    enhance industrial infrastructure while building lasting partnerships with
                    our clients through exceptional service and innovation.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="p-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-2 border-blue-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl mb-10 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl text-gray-900 font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-xl">
                    To become India's most trusted and innovative surface coating company,
                    setting new standards in quality, sustainability, and customer satisfaction
                    across all industrial sectors we serve.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;