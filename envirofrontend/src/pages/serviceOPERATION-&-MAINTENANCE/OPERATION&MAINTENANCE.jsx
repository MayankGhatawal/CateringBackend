import React, { useState } from 'react';
import OPMAINTENANCE from '../../public/productimg/OPERATION & MAINTENANCE.png'; // ✅ Confirm correct image path
import { Helmet } from 'react-helmet';
import { StickyQuoteButton } from '../../components/sticky-quote-button';

export default function OperationMaintenance() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">
      <Helmet>
        <title>Services - Operation & Maintenance - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Reliable operation and maintenance services by Varsha Enviro Technologies. Ensure continuous and efficient performance of STPs, ETPs, WTPs, and air treatment systems with expert O&M support."
        />
        <meta
          name="keywords"
          content="Operation and Maintenance, STP Operation, ETP O&M, WTP Maintenance, AMC Services, Varsha Enviro Technologies, Plant Management, Air Scrubber O&M"
        />
      </Helmet>

      {/* Inquiry Form Popup */}
      <StickyQuoteButton
        open={openForm}
        setOpen={setOpenForm}
        defaultService="Operation & Maintenance"
        defaultProduct=""
      />

      {/* Image */}
      <img
        src={OPMAINTENANCE}
        alt="Operation and Maintenance"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title + Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">
            OPERATION & MAINTENANCE
          </h2>
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
            Varsha Enviro Technologies offers professional Operation & Maintenance (O&M) services for a wide range of environmental systems including STPs, ETPs, WTPs, and air scrubbers.
            Our O&M services ensure consistent system performance, extended equipment life, and reduced downtime.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Our experienced team handles day-to-day operation, monitoring, troubleshooting, and maintenance activities to guarantee optimal performance, compliance with regulations, and minimal environmental impact.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>Round-the-clock operation & monitoring</li>
            <li>Preventive & corrective maintenance schedules</li>
            <li>Trained & certified O&M professionals</li>
            <li>Performance analysis and reporting</li>
            <li>Emergency breakdown assistance</li>
            <li>Cost-effective annual maintenance contracts (AMC)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
