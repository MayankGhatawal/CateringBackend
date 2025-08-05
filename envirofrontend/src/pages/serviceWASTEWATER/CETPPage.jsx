import React from 'react';
import { Helmet } from 'react-helmet';
import cetp from '../../public/productimg//Combined Effluent Treatment Plant.png';

export default function CETPPage() {
  return (
    <div className="space-y-8">
      <Helmet>
  <title>Services - Combined Effluent Treatment Plant (CETP) - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Explore our advanced Combined Effluent Treatment Plant (CETP) solutions at Varsha Enviro Technologies. Designed to treat wastewater from multiple industries through a centralized system ensuring efficient and compliant discharge."
  />
  <meta
    name="keywords"
    content="CETP, Combined Effluent Treatment Plant, Centralized Wastewater Treatment, Industrial Effluent, Wastewater Management, Varsha Enviro Technologies, Environmental Compliance, Effluent Recycling, Pollution Control"
  />
</Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={cetp}
          alt="Combined Effluent Treatment Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Combined Effluent Treatment Plant (CETP)
        </h2>
      
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Centralized treatment facilities designed to handle mixed industrial effluents from multiple sources. Our CETP systems provide cost-effective solutions for industrial clusters and manufacturing zones.
        </p>
      </div>

    

  
    </div>
  );
}