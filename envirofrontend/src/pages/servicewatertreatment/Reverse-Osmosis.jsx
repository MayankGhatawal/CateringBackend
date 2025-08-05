import React from 'react';
import { Helmet } from 'react-helmet';
import ROimg from '../../public/productimg/Reverse Osmosis.png';

const ReverseOsmosis = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Reverse Osmosis (RO) - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Discover our efficient Reverse Osmosis (RO) water treatment solutions at Varsha Enviro Technologies. Remove dissolved salts, impurities, and contaminants for pure water."
        />
        <meta
          name="keywords"
          content="Reverse Osmosis, RO, Water Purification, Membrane Filtration, Varsha Enviro Technologies, Pure Water, Water Treatment"
        />
      </Helmet>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={ROimg}
          alt="Reverse Osmosis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Reverse Osmosis (RO)
        </h2>
        
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Reverse Osmosis (RO) is a water purification technology that uses a semipermeable membrane to remove ions, molecules, and larger particles from drinking water. It is widely used in residential, commercial, and industrial water treatment.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Varsha Enviro Technologies, our RO systems provide high-quality purified water by effectively removing dissolved salts, bacteria, and other impurities, ensuring safe and clean water for various applications.
        </p>
      </div>
    </div>
  );
};

export default ReverseOsmosis;
