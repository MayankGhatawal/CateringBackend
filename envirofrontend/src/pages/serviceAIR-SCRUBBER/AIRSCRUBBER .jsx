import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AIRSCRUBBERIMG from '../../public/productimg/AIR SCRUBBER SYSTEM.png'; // ✅ Make sure this path is correct
import { StickyQuoteButton } from '../../components/sticky-quote-button';

export default function AirScrubber() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12">
      <Helmet>
        <title>Services - Air Scrubber - Varsha Enviro Technologies</title>
        <meta
          name="description"
          content="Efficient air scrubber systems by Varsha Enviro Technologies for controlling industrial air pollution. Remove toxic gases, dust, and odors with our advanced solutions."
        />
        <meta
          name="keywords"
          content="Air Scrubber, Air Pollution Control, Industrial Scrubber System, Wet Scrubber, Dry Scrubber, Varsha Enviro Technologies, Air Filtration Solutions"
        />
      </Helmet>

      {/* Quote Form Popup */}
      <StickyQuoteButton
        open={openForm}
        setOpen={setOpenForm}
        defaultService="Air Scrubber System"
        defaultProduct="Air Scrubber"
      />

      {/* Image */}
      <img
        src={AIRSCRUBBERIMG}
        alt="Air Scrubber"
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-8 space-y-6">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">AIR SCRUBBER SYSTEM</h2>
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
            Air Scrubbers are essential systems used to remove pollutants, toxic gases, and odors from industrial emissions.
            At Varsha Enviro Technologies, we offer advanced air scrubber systems designed to meet environmental regulations while improving indoor and outdoor air quality.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Our scrubbers utilize cutting-edge wet and dry scrubbing technologies to neutralize harmful chemicals and ensure the release of cleaner air into the atmosphere.
            These systems are highly effective in managing emissions from chemical plants, manufacturing units, and waste treatment facilities.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2 mt-2">
            <li>Removes toxic gases, odors, and airborne contaminants</li>
            <li>Available in wet scrubber and dry scrubber configurations</li>
            <li>Compact, corrosion-resistant, and durable design</li>
            <li>Custom-built for specific industrial applications</li>
            <li>High efficiency and low maintenance operation</li>
            <li>Meets national and international emission standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
