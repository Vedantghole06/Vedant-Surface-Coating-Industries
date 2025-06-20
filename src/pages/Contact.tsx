import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  ArrowRight,
  Sparkles,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      subject: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 9823798526",
      description: "Available 9 AM - 6 PM (Mon-Sat)",
      color: "from-blue-400 to-blue-600",
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "sunilghole@gmail.com",
      secondary: "vedantghole4@gmail.com",
      description: "We respond within 24 hours",
      color: "from-green-400 to-green-600",
      bg: "from-green-50 to-green-100",
      border: "border-green-200"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Ram Chandani Layout, MIDC Hingna, Nagpur",
      description: "Open for visits by appointment",
      color: "from-orange-400 to-orange-600",
      bg: "from-orange-50 to-orange-100",
      border: "border-orange-200"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Saturday",
      secondary: "10:00 AM - 7:00 PM",
      description: "Closed on Sundays & holidays",
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-blue-600/5"></div>
        <div className={`container mx-auto px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-8 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 px-6 py-2 text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Let's discuss your{' '}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent animate-pulse">
                coating needs
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Ready to transform your project with premium surface coatings? Our expert team is here to provide
              personalized solutions and exceptional service across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 px-6 py-2 shadow-lg">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Information
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Multiple ways to reach us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the most convenient way to connect with our team. We're here to help you
              with all your surface coating requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-500 ${item.border} hover:border-opacity-60 group bg-gradient-to-br ${item.bg} transform hover:-translate-y-4 hover:rotate-1`}
              >
                <div className="text-center">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-gray-900 font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-900 font-semibold text-lg mb-1">{item.primary}</p>
                    {item.secondary && (
                      <p className="text-gray-700 font-medium mb-3">{item.secondary}</p>
                    )}
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300 px-6 py-2 shadow-lg">
                <Send className="w-4 h-4 mr-2" />
                Send us a Message
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Ready to get started?
                <span className="text-orange-600"> Let's talk!</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fill out the form and our team will get back to you within 24 hours.
                  We're excited to learn about your project and how we can help.
                </p>
                <p>
                  Whether you need a custom coating solution, technical consultation, or
                  bulk orders, we're here to provide the perfect solution for your needs.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-white border-2 border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;