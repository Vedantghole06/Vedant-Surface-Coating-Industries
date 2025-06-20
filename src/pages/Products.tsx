import React from 'react';
import { ShoppingCart, CheckCircle, Eye } from 'lucide-react';

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
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Primer",
    subtitle: "High-quality primer",
    description: "Perfect paint adhesion and long-lasting finish for all surfaces.",
    priceRange: "₹450 - ₹650",
    priceUnit: "per litre",
    colors: ["White", "Grey", "Clear"],
    features: ["Excellent adhesion", "Quick drying"],
    bucketColor: "#4F87FF",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600"
  },
  {
    id: 2,
    name: "Red Oxide Primer",
    subtitle: "Oil base formula",
    description: "Durable oil-based red oxide primer for superior metal protection.",
    priceRange: "₹380 - ₹520",
    priceUnit: "per litre",
    colors: ["Red Oxide", "Black"],
    features: ["Anti-corrosive", "Weather resistant"],
    bucketColor: "#FF6B35",
    gradientFrom: "from-orange-400",
    gradientTo: "to-red-500"
  },
  {
    id: 3,
    name: "Red Oxide Primer",
    subtitle: "Water base formula",
    description: "Eco-friendly water-based red oxide primer with excellent coverage.",
    priceRange: "₹420 - ₹580",
    priceUnit: "per litre",
    colors: ["Red Oxide", "Black"],
    features: ["Eco-friendly", "Low VOC"],
    bucketColor: "#4ADE80",
    gradientFrom: "from-green-400",
    gradientTo: "to-emerald-500"
  },
  {
    id: 4,
    name: "Premium Oil Paint",
    subtitle: "All shades available",
    description: "Premium oil paints available in a complete spectrum of colors.",
    priceRange: "₹520 - ₹780",
    priceUnit: "per litre",
    colors: ["All Colors", "Custom Mix"],
    features: ["Rich colors", "Fade resistant"],
    bucketColor: "#A855F7",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-600"
  },
  {
    id: 5,
    name: "Industrial Coating",
    subtitle: "Heavy duty protection",
    description: "Specialized coating for industrial equipment and machinery.",
    priceRange: "₹680 - ₹950",
    priceUnit: "per litre",
    colors: ["Grey", "Black", "Silver"],
    features: ["Chemical resistant", "High durability"],
    bucketColor: "#64748B",
    gradientFrom: "from-gray-400",
    gradientTo: "to-gray-600"
  },
  {
    id: 6,
    name: "Marine Paint",
    subtitle: "Waterproof formula",
    description: "Specially formulated for marine and coastal applications.",
    priceRange: "₹750 - ₹1200",
    priceUnit: "per litre",
    colors: ["White", "Blue", "Grey"],
    features: ["Waterproof", "Salt resistant"],
    bucketColor: "#06B6D4",
    gradientFrom: "from-cyan-400",
    gradientTo: "to-blue-500"
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
      {/* Product Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br opacity-20"
          style={{ background: `linear-gradient(135deg, ${product.bucketColor}20, ${product.bucketColor}10)` }}>
        </div>

        {/* Demo Paint Bucket Image */}
        <div className="relative h-full flex items-center justify-center p-6">
          <div className="relative w-40 h-48 group-hover:scale-110 transition-transform duration-500">
            {/* Main Bucket Body */}
            <div className="absolute bottom-0 w-full h-40 rounded-t-3xl rounded-b-2xl shadow-2xl"
              style={{
                background: `linear-gradient(145deg, ${product.bucketColor}, ${product.bucketColor}dd)`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.2)'
              }}>

              {/* Bucket Handle */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-md">
                <div className="absolute inset-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
              </div>

              {/* Bucket Lid */}
              <div className="absolute -top-1 left-1 right-1 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-3xl shadow-lg">
                <div className="absolute inset-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-3xl"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* Product Label */}
              <div className="absolute inset-x-3 top-8 bottom-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-inner flex flex-col items-center justify-center p-3 border border-gray-200">
                <div className="text-center">
                  <div className="text-xs font-black text-gray-800 mb-1 tracking-wide">
                    PREMIUM
                  </div>
                  <div className="text-xs font-bold text-gray-700 leading-tight">
                    PAINT<br />COATING
                  </div>
                  <div className="w-8 h-0.5 bg-orange-400 mx-auto mt-2 rounded-full"></div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">
                    QUALITY
                  </div>
                </div>
              </div>

              {/* Paint Drip Effect */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 rounded-b-full opacity-60"
                style={{ backgroundColor: product.bucketColor }}>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full shadow-lg">
          <div className="text-sm font-bold">{product.priceRange.split(' - ')[0]}</div>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-4">
        {/* Title Section */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
            {product.subtitle}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-orange-600">{product.priceRange}</span>
            <span className="text-sm text-gray-500">{product.priceUnit}</span>
          </div>
        </div>

        {/* Colors & Features Grid */}
        <div className="grid grid-cols-1 gap-4">
          {/* Available Colors */}
          <div className="space-y-2">
            <p className="text-sm font-bold text-gray-800">Available Colors:</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, index) => (
                <span key={index} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-xl font-medium transition-colors cursor-pointer">
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <p className="text-sm font-bold text-gray-800">Key Features:</p>
            <div className="grid grid-cols-1 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-green-50 rounded-xl p-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
            <ShoppingCart className="w-5 h-5" />
            Get Quote
          </button>
          <button className="px-6 py-4 border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Products Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              PRODUCTS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Category of<br />
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Surface Coatings
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium paints and primers, crafted for
              excellence and built to last in the most demanding industrial environments.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;