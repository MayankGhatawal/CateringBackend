import React from 'react';
import { Helmet } from 'react-helmet';
import Softenerimg from '../../public/productimg/Softener Plant.png';

const SoftenerPlant = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Softener Plant - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Learn about our Softener Plant services at Varsha Enviro Technologies. Effectively reduce water hardness by removing calcium and magnesium ions for industrial and domestic use."
        />
        <meta
          name="keywords"
          content="Softener Plant, Water Softening, Ion Exchange, Varsha Enviro Technologies, Hard Water Treatment, Industrial Water Treatment"
        />
      </Helmet>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={Softenerimg}
          alt="Softener Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Softener Plant
        </h2>
       
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Softener Plants are designed to reduce water hardness by removing calcium and magnesium ions through ion exchange processes. This treatment prevents scale formation and extends the life of plumbing and equipment.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Varsha Enviro Technologies, our Softener Plants offer efficient and cost-effective solutions for both industrial and domestic water softening needs, ensuring improved water quality and system performance.
        </p>
      </div>
    </div>
  );
};

export default SoftenerPlant;
