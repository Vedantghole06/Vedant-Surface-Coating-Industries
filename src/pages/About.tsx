// import { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
//   Award,
//   Users,
//   MapPin,
//   Package,
//   Star,
//   UserCheck,
//   Lightbulb,
//   Shield,
//   Target,
//   Eye,
//   ArrowRight,
//   CheckCircle,
//   Factory,
//   Palette,
//   ChevronRight,
//   Sparkles
// } from 'lucide-react';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const achievements = [
//     { icon: Award, number: "15+", label: "Years of Excellence", color: "from-orange-400 to-orange-600" },
//     { icon: MapPin, number: "6", label: "Cities Served", color: "from-blue-400 to-blue-600" },
//     { icon: Users, number: "1000+", label: "Happy Clients", color: "from-green-400 to-green-600" },
//     { icon: Package, number: "500+", label: "Product Variants", color: "from-purple-400 to-purple-600" }
//   ];

//   const values = [
//     {
//       icon: Star,
//       title: "Quality Excellence",
//       description: "We maintain the highest standards in every product we manufacture, delivering consistent quality that exceeds industry expectations.",
//       color: "from-orange-400 to-orange-600",
//       bg: "from-orange-50 to-orange-100",
//       border: "border-orange-200"
//     },
//     {
//       icon: UserCheck,
//       title: "Customer Focus",
//       description: "Our customer success is our primary goal. We build lasting partnerships through exceptional service and support.",
//       color: "from-blue-400 to-blue-600",
//       bg: "from-blue-50 to-blue-100",
//       border: "border-blue-200"
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description: "Continuously improving our formulations and manufacturing processes to stay ahead of industry trends.",
//       color: "from-green-400 to-green-600",
//       bg: "from-green-50 to-green-100",
//       border: "border-green-200"
//     },
//     {
//       icon: Shield,
//       title: "Reliability",
//       description: "Consistent quality and dependable service you can trust for all your industrial painting needs.",
//       color: "from-purple-400 to-purple-600",
//       bg: "from-purple-50 to-purple-100",
//       border: "border-purple-200"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200/20 to-green-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Hero Section */}
//       <section id="about" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-blue-600/5"></div>
//         <div className={`container mx-auto px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="max-w-5xl mx-auto text-center">
//             <Badge className="mb-8 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 px-6 py-2 text-sm font-medium shadow-lg">
//               <Sparkles className="w-4 h-4 mr-2" />
//               About Us
//             </Badge>
//             <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Crafting excellence in{' '}
//               <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent animate-pulse">
//                 surface coatings
//               </span>
//             </h1>
//             <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
//               15 years of dedication to manufacturing premium paint solutions that protect,
//               beautify, and endure across India's most demanding industrial environments.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
//                 Get Started Today
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//               <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
//                 Contact Our Team
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section id="story" className="py-24 bg-white/70 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300 px-6 py-2 shadow-lg">
//                 <CheckCircle className="w-4 h-4 mr-2" />
//                 Our Story
//               </Badge>
//               <h2 className="text-5xl font-bold text-gray-900 leading-tight">
//                 Building trust through quality &
//                 <span className="text-orange-600"> innovation</span>
//               </h2>
//               <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
//                 <p>
//                   Founded in 2009, Vedant Surface Coating Industries began with a simple
//                   yet powerful vision: to manufacture the highest quality paints and
//                   primers that industries could rely on.
//                 </p>
//                 <p>
//                   What started as a small manufacturing unit has grown into a trusted name across
//                   major industrial hubs in India. We specialize in both oil-based and water-based
//                   formulations, ensuring we meet diverse industry requirements with precision and care.
//                 </p>
//                 <p>
//                   Today, we proudly serve industries in Indore, Chennai, Jabalpur, Zafrabad,
//                   Hyderabad, and Nagpur, maintaining our commitment to quality and innovation in
//                   every product we create.
//                 </p>
//               </div>
//               <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 rounded-4xl">
//                 Learn More About Our Process
//                 <ChevronRight className="w-5 h-5 ml-2" />
//               </Button>
//             </div>
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
//               <Card className="relative p-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 border-2 border-orange-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
//                 <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl mb-8 mx-auto shadow-xl">
//                   <Factory className="w-10 h-10 text-white" />
//                 </div>
//                 <CardHeader className="text-center pb-6">
//                   <CardTitle className="text-3xl text-gray-900 font-bold">Manufacturing Excellence</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     Advanced facilities equipped with modern technology for precision
//                     manufacturing and rigorous quality control processes.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Numbers Section */}

//       <section id="achievements" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative">
//           <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//             <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 px-4 sm:px-6 py-2 shadow-lg">
//               <Award className="w-4 h-4 mr-2" />
//               Our Achievements
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
//               Numbers that speak volumes
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//               Our commitment to excellence is reflected in the trust our clients place in us and
//               the milestones we've achieved together.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {achievements.map((item, index) => (
//               <Card
//                 key={index}
//                 className="text-center p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 group bg-white/80 backdrop-blur-sm transform hover:-translate-y-4 hover:rotate-1"
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-3xl mb-6 sm:mb-8 mx-auto group-hover:scale-125 transition-all duration-500 shadow-xl`}>
//                   <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//                 </div>
//                 <CardContent className="p-0">
//                   <div className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 ${activeCard === index ? 'scale-110' : ''}`}>
//                     {item.number}
//                   </div>
//                   <div className="text-gray-600 font-medium text-base sm:text-lg">{item.label}</div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section id="values" className="py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-20">
//             <Badge className="mb-8 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300 px-6 py-2 shadow-lg">
//               <Palette className="w-4 h-4 mr-2" />
//               Our Values
//             </Badge>
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               The principles that guide everything we do
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Our core values shape our culture, drive our decisions, and ensure we deliver
//               exceptional results for our clients every single day.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {values.map((value, index) => (
//               <Card
//                 key={index}
//                 className={`p-10 hover:shadow-2xl transition-all duration-500 ${value.border} hover:border-opacity-60 group bg-gradient-to-br ${value.bg} transform hover:-translate-y-2 hover:rotate-1`}
//               >
//                 <div className="flex items-start space-x-6">
//                   <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-xl`}>
//                     <value.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <CardHeader className="p-0 mb-6">
//                       <CardTitle className="text-2xl text-gray-900 font-bold">{value.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-0">
//                       <p className="text-gray-600 leading-relaxed text-lg">
//                         {value.description}
//                       </p>
//                     </CardContent>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <Card className="p-12 bg-gradient-to-br from-orange-50 via-white to-orange-100 border-2 border-orange-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 group">
//               <div className="absolute -inset-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
//               <div className="relative">
//                 <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl mb-10 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
//                   <Target className="w-10 h-10 text-white" />
//                 </div>
//                 <CardHeader className="text-center pb-8">
//                   <CardTitle className="text-3xl text-gray-900 font-bold">Our Mission</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-gray-600 leading-relaxed text-xl">
//                     To provide superior quality paint and coating solutions that protect and
//                     enhance industrial infrastructure while building lasting partnerships with
//                     our clients through exceptional service and innovation.
//                   </p>
//                 </CardContent>
//               </div>
//             </Card>

//             <Card className="p-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-2 border-blue-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
//               <div className="relative">
//                 <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl mb-10 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
//                   <Eye className="w-10 h-10 text-white" />
//                 </div>
//                 <CardHeader className="text-center pb-8">
//                   <CardTitle className="text-3xl text-gray-900 font-bold">Our Vision</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-gray-600 leading-relaxed text-xl">
//                     To become India's most trusted and innovative surface coating company,
//                     setting new standards in quality, sustainability, and customer satisfaction
//                     across all industrial sectors we serve.
//                   </p>
//                 </CardContent>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default About;






import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Users,
  MapPin,
  Package,
  Shield,
  Target,
  Eye,
  ArrowRight,
  CheckCircle,
  Factory,
  Palette,
  ChevronRight,
  Sparkles,
  Crown,
  Gem,
  Zap
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { icon: Award, number: "15+", label: "Years of Mastery", color: "from-amber-400 via-yellow-500 to-orange-500" },
    { icon: MapPin, number: "6", label: "Premium Locations", color: "from-emerald-400 via-teal-500 to-cyan-500" },
    { icon: Users, number: "1000+", label: "Elite Clientele", color: "from-rose-400 via-pink-500 to-fuchsia-500" },
    { icon: Package, number: "500+", label: "Signature Solutions", color: "from-violet-400 via-purple-500 to-indigo-500" }
  ];

  const values = [
    {
      icon: Crown,
      title: "Uncompromising Quality",
      description: "Every formulation is crafted to perfection, representing the pinnacle of surface coating excellence with meticulous attention to detail.",
      gradient: "from-amber-100 via-yellow-50 to-orange-50",
      iconGradient: "from-amber-500 via-yellow-600 to-orange-600",
      border: "border-amber-200/50"
    },
    {
      icon: Gem,
      title: "Client Partnership",
      description: "We cultivate exceptional relationships with our distinguished clients, providing personalized service that exceeds expectations.",
      gradient: "from-emerald-100 via-teal-50 to-cyan-50",
      iconGradient: "from-emerald-500 via-teal-600 to-cyan-600",
      border: "border-emerald-200/50"
    },
    {
      icon: Zap,
      title: "Innovation Excellence",
      description: "Pioneering advanced formulations and cutting-edge manufacturing processes that redefine industry standards.",
      gradient: "from-rose-100 via-pink-50 to-fuchsia-50",
      iconGradient: "from-rose-500 via-pink-600 to-fuchsia-600",
      border: "border-rose-200/50"
    },
    {
      icon: Shield,
      title: "Trusted Authority",
      description: "Established reputation for delivering consistent, premium-grade solutions that industries depend on for critical applications.",
      gradient: "from-violet-100 via-purple-50 to-indigo-50",
      iconGradient: "from-violet-500 via-purple-600 to-indigo-600",
      border: "border-violet-200/50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-amber-200/30 via-yellow-300/20 to-orange-300/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            top: '-10%',
            right: '-10%'
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-emerald-200/30 via-teal-300/20 to-cyan-300/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            top: '50%',
            left: '-15%',
            animationDelay: '1s'
          }}
        ></div>
        <div
          className="absolute w-60 h-60 bg-gradient-to-br from-rose-200/30 via-pink-300/20 to-fuchsia-300/30 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            bottom: '20%',
            right: '25%',
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-emerald-500/10"></div>
        <div className={`container mx-auto px-4 relative transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-12 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 text-amber-800 hover:from-amber-100 hover:to-orange-100 transition-all duration-500 px-8 py-3 text-lg font-semibold shadow-2xl border border-amber-200/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-3 text-amber-600" />
              Discover Excellence
            </Badge>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-12 leading-tight">
              Masterful{' '}
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                surface
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                transformations
              </span>
            </h1>

            <p className="text-3xl text-slate-600 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
              Fifteen years of dedication to crafting premium coating solutions that elevate,
              protect, and beautify India's most prestigious industrial environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 via-yellow-600 to-orange-600 hover:from-amber-600 hover:via-yellow-700 hover:to-orange-700 text-white px-14 py-8 text-xl font-bold shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl border-2 border-amber-400/20">
                Begin Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button variant="outline" size="lg" className="border-3 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 px-14 py-8 text-xl font-bold transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl backdrop-blur-sm">
                Explore Our Heritage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-32 bg-white/80 backdrop-blur-xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-emerald-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <Badge className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 text-emerald-800 hover:from-emerald-100 hover:to-cyan-100 px-8 py-3 shadow-xl border border-emerald-200/50">
                <CheckCircle className="w-5 h-5 mr-3" />
                Our Distinguished Legacy
              </Badge>

              <h2 className="text-6xl font-bold text-slate-900 leading-tight">
                Crafting distinction through
                <span className="text-transparent bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text"> artistry</span>
                {' '}&
                <span className="text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text"> precision</span>
              </h2>

              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light">
                <p>
                  Established in 2009, Vedant Surface Coating Industries emerged from a visionary pursuit:
                  to create the most exceptional paint and primer solutions that discerning industries
                  could trust implicitly.
                </p>
                <p>
                  From our sophisticated origins as a boutique manufacturing facility, we have evolved into
                  a distinguished name across India's premier industrial centers. Our expertise spans both
                  premium oil-based and water-based formulations, ensuring we meet the most exacting
                  industry requirements.
                </p>
                <p>
                  Today, we proudly serve elite industries across Indore, Chennai, Jabalpur, Zafrabad,
                  Hyderabad, and Nagpur, maintaining our unwavering commitment to excellence and
                  innovation in every masterpiece we create.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-700 text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl">
                Discover Our Craftsmanship
                <ChevronRight className="w-6 h-6 ml-3" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-300/20 via-yellow-300/20 to-orange-300/20 rounded-3xl blur-3xl animate-pulse"></div>
              <Card className="relative p-16 bg-gradient-to-br from-amber-50/80 via-white/90 to-orange-50/80 border-3 border-amber-200/30 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-2 backdrop-blur-xl">
                <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-600 rounded-3xl mb-12 mx-auto shadow-2xl">
                  <Factory className="w-14 h-14 text-white" />
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-4xl text-slate-900 font-bold">Manufacturing Artistry</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed text-xl font-light">
                    State-of-the-art facilities featuring cutting-edge technology for precision
                    manufacturing and uncompromising quality assurance processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50/80 to-blue-50/80 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-violet-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24">
            <Badge className="mb-12 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 text-rose-800 hover:from-rose-100 hover:to-fuchsia-100 px-8 py-3 shadow-xl border border-rose-200/50">
              <Award className="w-5 h-5 mr-3" />
              Distinguished Achievements
            </Badge>
            <h2 className="text-6xl font-bold text-slate-900 mb-8">
              Milestones of distinction
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our commitment to excellence is reflected in the trust our esteemed clients place in us
              and the remarkable milestones we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="text-center p-12 hover:shadow-2xl transition-all duration-700 border-3 border-white/50 hover:border-white/80 group bg-white/60 backdrop-blur-xl transform hover:-translate-y-6 hover:rotate-3 hover:scale-105"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`flex items-center justify-center w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl mb-10 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <CardContent className="p-0">
                  <div className={`text-6xl font-bold text-slate-900 mb-4 transition-all duration-500 ${activeCard === index ? 'scale-125 text-transparent bg-gradient-to-r ' + item.color + ' bg-clip-text' : ''}`}>
                    {item.number}
                  </div>
                  <div className="text-slate-600 font-semibold text-xl">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white/90 relative overflow-hidden backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <Badge className="mb-12 bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 text-violet-800 hover:from-violet-100 hover:to-indigo-100 px-8 py-3 shadow-xl border border-violet-200/50">
              <Palette className="w-5 h-5 mr-3" />
              Our Core Principles
            </Badge>
            <h2 className="text-6xl font-bold text-slate-900 mb-8">
              The foundations of our excellence
            </h2>
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
              Our core principles shape our distinguished culture, guide our strategic decisions,
              and ensure we deliver extraordinary results for our valued clients every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-16 hover:shadow-2xl transition-all duration-700 ${value.border} hover:border-opacity-80 group bg-gradient-to-br ${value.gradient} backdrop-blur-xl transform hover:-translate-y-4 hover:rotate-2 hover:scale-105`}
              >
                <div className="flex items-start space-x-8">
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.iconGradient} rounded-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl flex-shrink-0`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-3xl text-slate-900 font-bold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-slate-600 leading-relaxed text-xl font-light">
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
      <section className="py-32 bg-gradient-to-br from-slate-50/80 to-blue-50/80 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-20 bg-gradient-to-br from-amber-50/80 via-white/90 to-orange-50/80 border-3 border-amber-200/30 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:-rotate-2 hover:scale-105 group relative overflow-hidden backdrop-blur-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/20 via-yellow-300/20 to-orange-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-600 rounded-3xl mb-12 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  <Target className="w-14 h-14 text-white" />
                </div>
                <CardHeader className="text-center pb-10">
                  <CardTitle className="text-4xl text-slate-900 font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed text-2xl font-light">
                    To deliver superior quality paint and coating solutions that protect and
                    enhance prestigious industrial infrastructure while cultivating lasting
                    partnerships through exceptional service and innovative excellence.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="p-20 bg-gradient-to-br from-emerald-50/80 via-white/90 to-cyan-50/80 border-3 border-emerald-200/30 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-2 hover:scale-105 group relative overflow-hidden backdrop-blur-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300/20 via-teal-300/20 to-cyan-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl mb-12 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  <Eye className="w-14 h-14 text-white" />
                </div>
                <CardHeader className="text-center pb-10">
                  <CardTitle className="text-4xl text-slate-900 font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed text-2xl font-light">
                    To become India's most distinguished and innovative surface coating company,
                    establishing new benchmarks in quality, sustainability, and client satisfaction
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