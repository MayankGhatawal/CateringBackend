import React from 'react';
import { Helmet } from 'react-helmet';
import DMimg from '../../public/productimg/Demineralization Plant.png';

const DemineralizationPlant = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Demineralization Plant (DM) - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Discover our high-performance Demineralization Plant (DM) services at Varsha Enviro Technologies. Purify water by removing minerals and salts for industrial, pharmaceutical, and commercial applications."
        />
        <meta
          name="keywords"
          content="DM Plant, Demineralization, Water Purification, Industrial Water Treatment, Varsha Enviro Technologies, Ion Exchange, Water Softening, Zero Hardness Water"
        />
      </Helmet>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={DMimg}
          alt="Demineralization Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Demineralization Plant (DM)
        </h2>
     
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Demineralization Plants (DM Plants) are advanced water purification systems designed to remove dissolved salts and minerals through ion exchange processes. These systems are crucial in industries where ultra-pure water is required, such as pharmaceuticals, power generation, and electronics.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Varsha Enviro Technologies, our DM plants ensure the production of high-quality demineralized water with minimal operational costs and long service life. The process involves strong acid cation and strong base anion exchange resins, delivering water with conductivity as low as 0.1 µS/cm.
        </p>
      </div>

     
    </div>
  );
};

export default DemineralizationPlant;
