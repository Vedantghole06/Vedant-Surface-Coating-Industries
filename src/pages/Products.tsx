// import React from 'react';
// import { ShoppingCart, CheckCircle, Eye } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   subtitle: string;
//   description: string;
//   priceRange: string;
//   priceUnit: string;
//   colors: string[];
//   features: string[];
//   bucketColor: string;
//   gradientFrom: string;
//   gradientTo: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Premium Primer",
//     subtitle: "High-quality primer",
//     description: "Perfect paint adhesion and long-lasting finish for all surfaces.",
//     priceRange: "₹450 - ₹650",
//     priceUnit: "per litre",
//     colors: ["White", "Grey", "Clear"],
//     features: ["Excellent adhesion", "Quick drying"],
//     bucketColor: "#4F87FF",
//     gradientFrom: "from-blue-400",
//     gradientTo: "to-blue-600"
//   },
//   {
//     id: 2,
//     name: "Red Oxide Primer",
//     subtitle: "Oil base formula",
//     description: "Durable oil-based red oxide primer for superior metal protection.",
//     priceRange: "₹380 - ₹520",
//     priceUnit: "per litre",
//     colors: ["Red Oxide", "Black"],
//     features: ["Anti-corrosive", "Weather resistant"],
//     bucketColor: "#FF6B35",
//     gradientFrom: "from-orange-400",
//     gradientTo: "to-red-500"
//   },
//   {
//     id: 3,
//     name: "Red Oxide Primer",
//     subtitle: "Water base formula",
//     description: "Eco-friendly water-based red oxide primer with excellent coverage.",
//     priceRange: "₹420 - ₹580",
//     priceUnit: "per litre",
//     colors: ["Red Oxide", "Black"],
//     features: ["Eco-friendly", "Low VOC"],
//     bucketColor: "#4ADE80",
//     gradientFrom: "from-green-400",
//     gradientTo: "to-emerald-500"
//   },
//   {
//     id: 4,
//     name: "Premium Oil Paint",
//     subtitle: "All shades available",
//     description: "Premium oil paints available in a complete spectrum of colors.",
//     priceRange: "₹520 - ₹780",
//     priceUnit: "per litre",
//     colors: ["All Colors", "Custom Mix"],
//     features: ["Rich colors", "Fade resistant"],
//     bucketColor: "#A855F7",
//     gradientFrom: "from-purple-400",
//     gradientTo: "to-purple-600"
//   },
//   {
//     id: 5,
//     name: "Industrial Coating",
//     subtitle: "Heavy duty protection",
//     description: "Specialized coating for industrial equipment and machinery.",
//     priceRange: "₹680 - ₹950",
//     priceUnit: "per litre",
//     colors: ["Grey", "Black", "Silver"],
//     features: ["Chemical resistant", "High durability"],
//     bucketColor: "#64748B",
//     gradientFrom: "from-gray-400",
//     gradientTo: "to-gray-600"
//   },
//   {
//     id: 6,
//     name: "Marine Paint",
//     subtitle: "Waterproof formula",
//     description: "Specially formulated for marine and coastal applications.",
//     priceRange: "₹750 - ₹1200",
//     priceUnit: "per litre",
//     colors: ["White", "Blue", "Grey"],
//     features: ["Waterproof", "Salt resistant"],
//     bucketColor: "#06B6D4",
//     gradientFrom: "from-cyan-400",
//     gradientTo: "to-blue-500"
//   }
// ];

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
//   return (
//     <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
//       {/* Product Image Section */}
//       <div className="relative h-64 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br opacity-20"
//           style={{ background: `linear-gradient(135deg, ${product.bucketColor}20, ${product.bucketColor}10)` }}>
//         </div>

//         {/* Demo Paint Bucket Image */}
//         <div className="relative h-full flex items-center justify-center p-6">
//           <div className="relative w-40 h-48 group-hover:scale-110 transition-transform duration-500">
//             {/* Main Bucket Body */}
//             <div className="absolute bottom-0 w-full h-40 rounded-t-3xl rounded-b-2xl shadow-2xl"
//               style={{
//                 background: `linear-gradient(145deg, ${product.bucketColor}, ${product.bucketColor}dd)`,
//                 boxShadow: '0 20px 40px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.2)'
//               }}>

//               {/* Bucket Handle */}
//               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-md">
//                 <div className="absolute inset-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
//               </div>

//               {/* Bucket Lid */}
//               <div className="absolute -top-1 left-1 right-1 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-3xl shadow-lg">
//                 <div className="absolute inset-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-3xl"></div>
//                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-600 rounded-full"></div>
//               </div>

//               {/* Product Label */}
//               <div className="absolute inset-x-3 top-8 bottom-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-inner flex flex-col items-center justify-center p-3 border border-gray-200">
//                 <div className="text-center">
//                   <div className="text-xs font-black text-gray-800 mb-1 tracking-wide">
//                     PREMIUM
//                   </div>
//                   <div className="text-xs font-bold text-gray-700 leading-tight">
//                     PAINT<br />COATING
//                   </div>
//                   <div className="w-8 h-0.5 bg-orange-400 mx-auto mt-2 rounded-full"></div>
//                   <div className="text-xs text-gray-600 mt-1 font-medium">
//                     QUALITY
//                   </div>
//                 </div>
//               </div>

//               {/* Paint Drip Effect */}
//               <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 rounded-b-full opacity-60"
//                 style={{ backgroundColor: product.bucketColor }}>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating Price Badge */}
//         <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full shadow-lg">
//           <div className="text-sm font-bold">{product.priceRange.split(' - ')[0]}</div>
//         </div>
//       </div>

//       {/* Product Content */}
//       <div className="p-6 space-y-4">
//         {/* Title Section */}
//         <div className="space-y-2">
//           <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
//             {product.name}
//           </h3>
//           <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
//             {product.subtitle}
//           </p>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             {product.description}
//           </p>
//         </div>

//         {/* Price Section */}
//         <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
//           <div className="flex items-baseline gap-2">
//             <span className="text-3xl font-bold text-orange-600">{product.priceRange}</span>
//             <span className="text-sm text-gray-500">{product.priceUnit}</span>
//           </div>
//         </div>

//         {/* Colors & Features Grid */}
//         <div className="grid grid-cols-1 gap-4">
//           {/* Available Colors */}
//           <div className="space-y-2">
//             <p className="text-sm font-bold text-gray-800">Available Colors:</p>
//             <div className="flex flex-wrap gap-2">
//               {product.colors.map((color, index) => (
//                 <span key={index} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-xl font-medium transition-colors cursor-pointer">
//                   {color}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Features */}
//           <div className="space-y-2">
//             <p className="text-sm font-bold text-gray-800">Key Features:</p>
//             <div className="grid grid-cols-1 gap-2">
//               {product.features.map((feature, index) => (
//                 <div key={index} className="flex items-center gap-3 bg-green-50 rounded-xl p-2">
//                   <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                   <span className="text-sm text-gray-700 font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-3 pt-2">
//           <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
//             <ShoppingCart className="w-5 h-5" />
//             Get Quote
//           </button>
//           <button className="px-6 py-4 border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
//             <Eye className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Products = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       {/* Header */}
//       <div className="relative overflow-hidden bg-white border-b border-gray-100">
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-blue-50 opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             {/* Products Badge */}
//             <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//               <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//               PRODUCTS
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               Category of<br />
//               <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
//                 Surface Coatings
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our comprehensive range of premium paints and primers, crafted for
//               excellence and built to last in the most demanding industrial environments.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle, Eye, Star, Award, Shield, Sparkles } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  priceRange: string;
  priceUnit: string;
  colors: string[];
  features: string[];
  bucketColor: string;
  gradientFrom: string;
  gradientTo: string;
  luxuryBadge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Primer",
    subtitle: "High-quality primer",
    description: "Perfect paint adhesion and long-lasting finish for all surfaces.",
    priceRange: "₹450 - ₹650",
    priceUnit: "per litre",
    colors: ["Pearl White", "Platinum Grey", "Crystal Clear"],
    features: ["Excellent adhesion", "Quick drying"],
    bucketColor: "#4F87FF",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    luxuryBadge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Red Oxide Primer",
    subtitle: "Oil base formula",
    description: "Durable oil-based red oxide primer for superior metal protection.",
    priceRange: "₹380 - ₹520",
    priceUnit: "per litre",
    colors: ["Copper Oxide", "Midnight Black"],
    features: ["Anti-corrosive", "Weather resistant"],
    bucketColor: "#FF6B35",
    gradientFrom: "from-orange-400",
    gradientTo: "to-red-500",
    luxuryBadge: "PREMIUM"
  },
  {
    id: 3,
    name: "Red Oxide Primer",
    subtitle: "Water base formula",
    description: "Eco-friendly water-based red oxide primer with excellent coverage.",
    priceRange: "₹420 - ₹580",
    priceUnit: "per litre",
    colors: ["Rust Oxide", "Carbon Black"],
    features: ["Eco-friendly", "Low VOC"],
    bucketColor: "#4ADE80",
    gradientFrom: "from-green-400",
    gradientTo: "to-emerald-500",
    luxuryBadge: "ECO-LUXURY"
  },
  {
    id: 4,
    name: "Premium Oil Paint",
    subtitle: "All shades available",
    description: "Premium oil paints available in a complete spectrum of colors.",
    priceRange: "₹520 - ₹780",
    priceUnit: "per litre",
    colors: ["Royal Colors", "Custom Blend"],
    features: ["Rich pigments", "Fade resistant"],
    bucketColor: "#A855F7",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-600",
    luxuryBadge: "SIGNATURE"
  },
  {
    id: 5,
    name: "Industrial Coating",
    subtitle: "Heavy duty protection",
    description: "Specialized coating for industrial equipment and machinery.",
    priceRange: "₹680 - ₹950",
    priceUnit: "per litre",
    colors: ["Titanium Grey", "Obsidian Black", "Sterling Silver"],
    features: ["Chemical resistant", "High durability"],
    bucketColor: "#64748B",
    gradientFrom: "from-gray-400",
    gradientTo: "to-gray-600",
    luxuryBadge: "PROFESSIONAL"
  },
  {
    id: 6,
    name: "Marine Paint",
    subtitle: "Waterproof formula",
    description: "Specially formulated for marine and coastal applications.",
    priceRange: "₹750 - ₹1200",
    priceUnit: "per litre",
    colors: ["Ocean White", "Navy Blue", "Storm Grey"],
    features: ["Waterproof", "Salt resistant"],
    bucketColor: "#06B6D4",
    gradientFrom: "from-cyan-400",
    gradientTo: "to-blue-500",
    luxuryBadge: "MARINE GRADE"
  }
];

const FloatingElement = ({ delay }: { delay: number }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute w-32 h-32 rounded-full opacity-10 blur-sm"
      style={{
        background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
        transform: `translateY(${Math.sin((offset + delay) * 0.02) * 20}px)`,
        left: `${20 + (delay % 60)}%`,
        top: `${10 + (delay % 40)}%`
      }}
    />
  );
};

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-white/20 hover:border-amber-200/50 transform hover:-translate-y-3 hover:rotate-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Luxury Badge */}
      {product.luxuryBadge && (
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg border border-amber-200/30">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold tracking-wider">{product.luxuryBadge}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Price */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white px-4 py-3 rounded-2xl shadow-2xl border border-rose-200/30">
          <div className="text-sm font-bold">{product.priceRange.split(' - ')[0]}</div>
          <div className="text-xs opacity-90">{product.priceUnit}</div>
        </div>
      </div>

      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white/30 to-rose-50/30 opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

      {/* Product Showcase */}
      <div className="relative h-80 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-white to-rose-100/20">
          <div className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 70%, ${product.bucketColor}15, transparent 50%)`,
              animation: isHovered ? 'pulse 2s infinite' : 'none'
            }}>
          </div>
        </div>

        {/* Luxury Paint Bucket */}
        <div className="relative h-full flex items-center justify-center p-8">
          <div className={`relative w-44 h-56 transition-all duration-700 ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}`}>

            {/* Main Bucket with Premium Finish */}
            <div className="absolute bottom-0 w-full h-44 rounded-t-[2rem] rounded-b-3xl shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${product.bucketColor}, ${product.bucketColor}cc)`,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)'
              }}>

              {/* Metallic Handle */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-full shadow-lg border border-slate-200">
                <div className="absolute inset-1 bg-gradient-to-b from-slate-100 to-slate-200 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-slate-400 rounded-full"></div>
              </div>

              {/* Premium Lid */}
              <div className="absolute -top-2 left-1 right-1 h-8 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-t-[2rem] shadow-xl border-t border-slate-200">
                <div className="absolute inset-1 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-[2rem]"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-1.5 bg-slate-600 rounded-full"></div>
              </div>

              {/* Luxury Product Label */}
              <div className="absolute inset-x-4 top-10 bottom-4 bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-sm rounded-3xl shadow-inner flex flex-col items-center justify-center p-4 border border-amber-200/30">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Award className="w-3 h-3 text-amber-600" />
                    {/* <div className="text-xs font-black text-slate-800 tracking-widest">LUXURY</div> */}
                    <Award className="w-3 h-3 text-amber-600" />
                  </div>
                  <div className="text-sm font-bold text-slate-700 leading-tight">
                    PREMIUM<br />COATING
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <div className="text-xs text-slate-600 font-semibold tracking-wide">EXCELLENCE</div>
                  </div>
                </div>
              </div>

              {/* Premium Paint Drip */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-4 rounded-b-full opacity-70 shadow-lg"
                style={{ backgroundColor: product.bucketColor }}>
              </div>
            </div>

            {/* Floating Sparkles */}
            {isHovered && (
              <>
                <div className="absolute top-4 right-2 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                <div className="absolute top-12 left-4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 right-6 w-1 h-1 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Luxury Content Section */}
      <div className="relative p-8 space-y-6">
        {/* Title with Gradient */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-rose-700 transition-all duration-500">
            {product.name}
          </h3>
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
            <Shield className="w-4 h-4" />
            {product.subtitle}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Luxury Price Display */}
        <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-rose-50 rounded-2xl p-6 border border-amber-200/50 shadow-inner">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                {product.priceRange}
              </span>
              <span className="text-sm text-slate-500 ml-2">{product.priceUnit}</span>
            </div>
            <div className="text-xs text-amber-600 font-semibold tracking-wider">PREMIUM QUALITY</div>
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="space-y-4">
          {/* Luxury Colors */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Exclusive Colors:
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-white to-amber-50 hover:from-amber-50 hover:to-rose-50 text-slate-700 text-xs rounded-xl font-semibold transition-all cursor-pointer border border-amber-200/30 shadow-sm hover:shadow-md">
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Premium Features */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Luxury Features:
            </p>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200/30">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-amber-300/30">
            <ShoppingCart className="w-5 h-5" />
            <span className="tracking-wide">GET EXCLUSIVE QUOTE</span>
          </button>
          <button className="px-6 py-4 bg-gradient-to-r from-white to-amber-50 hover:from-amber-50 hover:to-rose-50 border-2 border-amber-300 hover:border-rose-300 text-slate-700 hover:text-rose-600 font-bold rounded-2xl transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 relative overflow-hidden">

      {/* Floating Background Elements */}
      {[...Array(6)].map((_, i) => (
        <FloatingElement key={i} delay={i * 100} />
      ))}

      {/* Luxury Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-white via-amber-50/30 to-rose-50/30 backdrop-blur-sm border-b border-amber-200/30">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-white/40 to-rose-100/20"></div>

        {/* Premium Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-200/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">

            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border border-amber-200/50">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="tracking-widest">PRODUCTS</span>
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-slate-800 mb-2">Exquisite</span>
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-rose-600 bg-clip-text text-transparent">
                Surface Coatings
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Experience the pinnacle of luxury with our exclusive collection of premium paints and primers.
              Crafted for discerning clients who demand nothing but excellence.
            </p>

            {/* Luxury Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-slate-600 font-semibold tracking-wide">YEARS EXCELLENCE</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-1">1000+</div>
                <div className="text-sm text-slate-600 font-semibold tracking-wide">LUXURY PROJECTS</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">99%</div>
                <div className="text-sm text-slate-600 font-semibold tracking-wide">CLIENT SATISFACTION</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Products Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>


      <style>{`
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
      `}</style>
    </div>
  );
};

export default Products;