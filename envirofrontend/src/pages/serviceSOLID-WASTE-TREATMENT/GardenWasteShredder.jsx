import React from 'react';
import { Helmet } from 'react-helmet';
import gws from '../../public/productimg/Garden Waste Shredder.png';

export default function GardenWasteShredder() {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Services - Garden Waste Shredder - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Explore our Garden Waste Shredder services at Varsha Enviro Technologies. We offer eco-friendly waste processing for gardens, parks, and institutions with efficient shredding technology."
        />
        <meta
          name="keywords"
          content="Garden Waste Shredder, Organic Waste Management, Varsha Enviro Technologies, Green Waste Recycling, Waste Processing"
        />
      </Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={gws}
          alt="Garden Waste Shredder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Garden Waste Shredder
        </h2>
       
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Our Garden Waste Shredder efficiently processes garden waste into fine mulch,
          helping reduce landfill use and promoting sustainable waste management.
          It is ideal for use in municipalities, residential societies, institutions,
          and commercial landscaping operations.
        </p>
      </div>
    </div>
  );
}
