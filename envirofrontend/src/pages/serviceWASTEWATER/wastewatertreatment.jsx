import React from 'react';
import TREATMENT from '../../public/images/Wastewater Treatment.jpg';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">
      <Helmet>
  <title>Services - Wastewater Treatment - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Discover advanced wastewater treatment solutions with Varsha Enviro Technologies. Engineered for efficiency, compliance, and sustainability across industries."
  />
  <meta
    name="keywords"
    content="Wastewater Treatment, Sewage Treatment Plant, STP, ETP, Effluent Treatment, Varsha Enviro Technologies, Industrial Wastewater Management, Sustainable Treatment Solutions"
  />
</Helmet>
      {/* Actual Image */}
      <img
        src={TREATMENT} // 👈 Replace this with your real image path
        alt="Wastewater Treatment"
        className=" w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">WASTEWATER TREATMENT</h2>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600 text-base leading-relaxed mt-1">
            We offer comprehensive solutions for wastewater treatment using modern technology.
            Our systems are engineered to meet regulatory compliance while focusing on cost-effectiveness,
            efficiency, and sustainability.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>Complies with national pollution control norms</li>
            <li>Energy-efficient and low maintenance systems</li>
            <li>Advanced biological & chemical processes</li>
            <li>Modular and scalable plant design</li>
            <li>Real-time monitoring and automation</li>
            <li>24/7 technical support and AMC services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
