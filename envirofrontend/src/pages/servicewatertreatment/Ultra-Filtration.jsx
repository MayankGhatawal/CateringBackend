import React from 'react';
import { Helmet } from 'react-helmet';
import UFimg from '../../public/productimg/Ultra-Filtration.png';

const UltraFiltration = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Ultra-Filtration (UF) - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Explore our advanced Ultra-Filtration (UF) services at Varsha Enviro Technologies. Efficiently remove suspended solids, bacteria, and viruses for clean and safe water."
        />
        <meta
          name="keywords"
          content="Ultra-Filtration, UF, Water Treatment, Membrane Filtration, Varsha Enviro Technologies, Clean Water, Water Purification"
        />
      </Helmet>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={UFimg}
          alt="Ultra-Filtration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Ultra-Filtration (UF)
        </h2>
       
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Ultra-Filtration (UF) is a membrane filtration process that removes suspended solids, bacteria, viruses, and other contaminants from water. It is widely used in water treatment plants, food and beverage industries, and pharmaceutical manufacturing.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our UF systems at Varsha Enviro Technologies ensure high-quality water output with low energy consumption and minimal maintenance. The technology provides a reliable barrier against pathogens and particles larger than 0.01 microns.
        </p>
      </div>
    </div>
  );
};

export default UltraFiltration;
