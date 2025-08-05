import React from 'react';
import { Helmet } from 'react-helmet';
import STPimg from '../../public/productimg/Sewage Treatment Plant.png';

export default function STPPage() {
  return (
    <div className="space-y-8">
<Helmet>
  <title>Services - Sewage Treatment Plant (STP) - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Explore our efficient and eco-friendly Sewage Treatment Plant (STP) solutions at Varsha Enviro Technologies. Designed for residential, industrial, and commercial wastewater treatment to ensure environmental compliance and sustainability."
  />
  <meta
    name="keywords"
    content="STP, Sewage Treatment Plant, Wastewater Treatment, Effluent Treatment, Environmental Compliance, Varsha Enviro Technologies, Water Recycling, Industrial STP, Domestic STP"
  />
</Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={STPimg} 
          alt="Sewage Treatment Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Sewage Treatment Plant (STP)
        </h2>
       
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Advanced sewage treatment solutions designed to treat domestic and municipal wastewater efficiently. Our STP systems utilize cutting-edge biological treatment processes to ensure compliance with environmental standards while maintaining cost-effectiveness.
        </p>
      </div>

  

    </div>
  );
}