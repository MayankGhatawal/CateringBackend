import React from 'react';
import { Helmet } from 'react-helmet';
import WATERTREATMENT from '../../public/images/Water Treatment.jpg'; // Update this path if needed

const WaterTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">
      <Helmet>
        <title>Services - Water Treatment - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Explore comprehensive water treatment solutions at Varsha Enviro Technologies. Providing advanced technologies for clean, safe, and sustainable water management."
        />
        <meta
          name="keywords"
          content="Water Treatment, Water Purification, Varsha Enviro Technologies, Sustainable Water Management, Clean Water Solutions"
        />
      </Helmet>

      {/* Image Section */}
      <img
        src={WATERTREATMENT}
        alt="Water Treatment"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">WATER TREATMENT</h2>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600 text-base leading-relaxed mt-1">
            Varsha Enviro Technologies offers comprehensive water treatment solutions tailored to meet the needs of various industries and applications. 
            Our advanced technologies ensure clean, safe, and sustainable water management.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            From filtration to purification, our water treatment services are designed to improve water quality, reduce contaminants, 
            and support environmental sustainability.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>Customized treatment plants for residential, industrial, and commercial use</li>
            <li>Advanced filtration, RO, and UV technologies</li>
            <li>Environment-friendly and energy-efficient systems</li>
            <li>Modular, compact, and scalable designs</li>
            <li>Real-time monitoring, automation, and IoT integration</li>
            <li>Annual Maintenance Contract (AMC) & technical support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WaterTreatment;
