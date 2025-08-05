import React from 'react';
import { Helmet } from 'react-helmet';
import etp from '../../public/productimg/Effluent Treatment Plant.png';

export default function ETPPage() {
  return (
    <div className="space-y-8">
      <Helmet>
  <title>Services - Effluent Treatment Plant (ETP) - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Discover our reliable Effluent Treatment Plant (ETP) solutions at Varsha Enviro Technologies. Designed to treat industrial wastewater effectively and ensure compliance with environmental discharge norms."
  />
  <meta
    name="keywords"
    content="ETP, Effluent Treatment Plant, Industrial Wastewater Treatment, Effluent Recycling, Pollution Control, Varsha Enviro Technologies, Wastewater Management, Zero Liquid Discharge, Industrial ETP Solutions"
  />
</Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={etp} 
          alt="Effluent Treatment Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Effluent Treatment Plant (ETP)
        </h2>
      
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Comprehensive industrial effluent treatment systems tailored for various industries including textiles, pharmaceuticals, chemicals, and food processing. Our ETP solutions ensure complete removal of contaminants and pollutants.
        </p>
      </div>

      

 
    </div>
  );
}