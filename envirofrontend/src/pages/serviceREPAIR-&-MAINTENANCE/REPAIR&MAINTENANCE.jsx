import React, { useState } from 'react';
import REPAIRIMG from '../../public/productimg/REPAIR & MAINTENANCE.png'; // ✅ Replace with actual image path
import { Helmet } from 'react-helmet';
import { StickyQuoteButton } from '../../components/sticky-quote-button';

export default function RepairMaintenance() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">
      <Helmet>
        <title>Services - Repair & Maintenance - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Professional repair and maintenance services by Varsha Enviro Technologies. Ensure smooth operation of STPs, ETPs, WTPs, and air scrubbers with expert support and quick response."
        />
        <meta
          name="keywords"
          content="Repair and Maintenance, Equipment Servicing, STP Maintenance, ETP Repair, WTP Maintenance, Air Scrubber Repair, Varsha Enviro Technologies, AMC Services"
        />
      </Helmet>

      {/* Inquiry Form Popup */}
      <StickyQuoteButton
        open={openForm}
        setOpen={setOpenForm}
        defaultService="Repair & Maintenance"
        defaultProduct=""
      />

      {/* Image */}
      <img
        src={REPAIRIMG}
        alt="Repair and Maintenance"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title + Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">REPAIR & MAINTENANCE</h2>
          <button
            onClick={() => setOpenForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Make an Inquiry
          </button>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600 text-base leading-relaxed mt-1">
            We provide reliable and timely repair & maintenance services for environmental treatment plants and systems including STPs, ETPs, WTPs, and air treatment units.
            Our goal is to minimize system downtime, improve performance, and extend the operational life of your equipment.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Whether it's routine servicing or urgent breakdown repairs, our skilled technicians ensure your plant continues to operate smoothly with minimal disruption.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>24/7 emergency repair support</li>
            <li>On-site diagnosis and quick resolution</li>
            <li>Genuine spare parts and replacements</li>
            <li>Annual maintenance contract options</li>
            <li>Scheduled inspections and reports</li>
            <li>Support for electrical, mechanical, and instrumentation issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
