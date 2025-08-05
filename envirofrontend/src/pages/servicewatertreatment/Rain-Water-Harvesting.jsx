import React from 'react';
import { Helmet } from 'react-helmet';
import rainwater from '../../public/productimg/Rain Water Harvesting.png';

const RainWaterHarvesting = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Rain Water Harvesting - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Discover our Rain Water Harvesting solutions at Varsha Enviro Technologies. Efficiently collect and store rainwater for sustainable water management and conservation."
        />
        <meta
          name="keywords"
          content="Rain Water Harvesting, Water Conservation, Sustainable Water Management, Varsha Enviro Technologies, Rainwater Collection, Environmental Solutions"
        />
      </Helmet>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={rainwater}
          alt="Rain Water Harvesting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Rain Water Harvesting
        </h2>
      
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Rain Water Harvesting is an effective method to collect and store rainwater for future use, reducing dependency on traditional water sources and promoting sustainable water management.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Varsha Enviro Technologies, we provide customized rainwater harvesting systems designed to maximize water collection efficiency and support environmental conservation efforts.
        </p>
      </div>
    </div>
  );
};

export default RainWaterHarvesting;
