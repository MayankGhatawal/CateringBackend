import React from 'react';
import zld from '../../public/productimg/Zero Liquid Discharge.png';
import { Helmet } from 'react-helmet';

export default function ZLDPage() {
  return (
    <div className="space-y-8">
      <Helmet>
  <title>Services - Zero Liquid Discharge (ZLD) - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Implement Zero Liquid Discharge (ZLD) systems with Varsha Enviro Technologies. Our advanced ZLD solutions ensure complete wastewater recovery, eliminate liquid waste, and promote sustainable industrial operations."
  />
  <meta
    name="keywords"
    content="ZLD, Zero Liquid Discharge, Wastewater Recovery, Industrial Wastewater Treatment, Varsha Enviro Technologies, Water Reuse, Zero Discharge System, Sustainable Water Solutions, Pollution Control"
  />
</Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={zld}
          alt="Zero Liquid Discharge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Zero Liquid Discharge (ZLD)
        </h2>
       
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Revolutionary water treatment technology that eliminates liquid waste discharge entirely. Our ZLD systems maximize water recovery and minimize environmental impact through advanced evaporation and crystallization processes.
        </p>
      </div>

    </div>
  );
}