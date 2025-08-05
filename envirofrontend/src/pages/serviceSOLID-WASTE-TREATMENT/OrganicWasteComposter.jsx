import React from 'react';
import owc from '../../public/productimg/Organic Waste Composter.png';
import { Helmet } from 'react-helmet';

export default function OrganicWasteComposter() {
  return (
    <div className="space-y-8">
      <Helmet>
  <title>Services - Organic Waste Composter (OWC) - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Transform organic waste into compost efficiently with our Organic Waste Composter (OWC) solutions at Varsha Enviro Technologies. Ideal for residential, commercial, and industrial waste management applications."
  />
  <meta
    name="keywords"
    content="Organic Waste Composter, OWC, Waste to Compost, Organic Waste Management, Varsha Enviro Technologies, Composting Machine, Food Waste Recycling, Sustainable Waste Solution, Industrial Composter"
  />
</Helmet>

      {/* Product Image */}
      <div className="relative h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={owc}
          alt="Organic Waste Composter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Product Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Organic Waste Composter (OWC)
        </h2>
       
      </div>

      {/* Product Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed text-lg">
          Our Organic Waste Composter (OWC) systems are designed to convert biodegradable waste into nutrient-rich compost.
          Ideal for households, apartments, institutions, and industries, these systems promote eco-friendly disposal and
          reduce landfill dependency. With minimal manual effort and odor control technology, OWC units are a sustainable step toward a greener planet.
        </p>
      </div>
    </div>
  );
}
