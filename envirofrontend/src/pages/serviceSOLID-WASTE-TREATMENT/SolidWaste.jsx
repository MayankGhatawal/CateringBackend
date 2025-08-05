import React from 'react';
import SOLIDWASTE from '../../public/images/Solid Waste Management.jpg';
import { Helmet } from 'react-helmet';

export default function SolidWaste() {
  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">

      <Helmet>
  <title>Services - Solid Waste Treatment - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Comprehensive solid waste treatment solutions by Varsha Enviro Technologies. Eco-friendly, efficient, and compliant systems for waste segregation, composting, and waste-to-energy conversion."
  />
  <meta
    name="keywords"
    content="Solid Waste Management, Waste Treatment, Waste Segregation, Composting System, Waste-to-Energy, Municipal Waste, Varsha Enviro Technologies"
  />
</Helmet>

      {/* Actual Image */}
      <img
        src={SOLIDWASTE}
        alt="Solid Waste Treatment"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">SOLID WASTE TREATMENT</h2>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600 text-base leading-relaxed mt-1">
            We offer complete solid waste treatment solutions using eco-friendly and innovative technologies.
            Our systems ensure compliance with environmental norms while prioritizing operational efficiency
            and long-term sustainability.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>Complies with environmental and municipal standards</li>
            <li>Energy-efficient systems with minimal human intervention</li>
            <li>Advanced waste segregation and composting units</li>
            <li>Waste-to-energy conversion capabilities</li>
            <li>Modular, scalable, and easy to integrate</li>
            <li>24/7 monitoring, automation, and support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
