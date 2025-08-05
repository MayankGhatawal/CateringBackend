import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SlidersHorizontal,
  CloudRain,
  RefreshCw,
  Filter,
  ChevronRight,
} from 'lucide-react';
import { StickyQuoteButton } from '../components/sticky-quote-button'; // ✅ Import popup component

const waterTreatmentProducts = [
  {
    id: 'demineralization-plant',
    name: 'Demineralization Plant',
    path: '/services/demineralization-plant',
    icon: <SlidersHorizontal className="w-6 h-6" />,
  },
  {
    id: 'rain-water-harvesting',
    name: 'Rain Water Harvesting',
    path: '/services/rain-water-harvesting',
    icon: <CloudRain className="w-6 h-6" />,
  },
  {
    id: 'reverse-osmosis',
    name: 'Reverse Osmosis',
    path: '/services/reverse-osmosis',
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    id: 'softener-plant',
    name: 'Softener Plant',
    path: '/services/softener-plant',
    icon: <Filter className="w-6 h-6" />,
  },
  {
    id: 'ultra-filtration',
    name: 'Ultra Filtration',
    path: '/services/ultra-filtration',
    icon: <SlidersHorizontal className="w-6 h-6" />,
  },
];

export default function WaterTreatmentLayout({ children }) {
  const location = useLocation();
  const [openForm, setOpenForm] = useState(false);

  const matchedProduct = waterTreatmentProducts.find((p) => p.path === location.pathname);
  const currentService = matchedProduct ? matchedProduct.name : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Inquiry Popup */}
      <StickyQuoteButton
        open={openForm}
        setOpen={setOpenForm}
        defaultService={currentService}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 transition-colors duration-200">
            WATER TREATMENT
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced water treatment solutions for sustainable environmental management
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                PRODUCT NAME
              </h2>

              <div className="space-y-2">
                {waterTreatmentProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={product.path}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group hover:bg-blue-50 hover:shadow-md block ${
                      location.pathname === product.path
                        ? 'bg-blue-100 text-blue-900 shadow-md border border-blue-200'
                        : 'text-gray-700 hover:text-blue-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          location.pathname === product.path
                            ? 'bg-blue-200 text-blue-700'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-blue-200 group-hover:text-blue-700'
                        }`}
                      >
                        {product.icon}
                      </div>
                      <span className="font-medium text-sm leading-tight">
                        {product.name}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        location.pathname === product.path
                          ? 'rotate-90'
                          : 'group-hover:translate-x-1'
                      }`}
                    />
                  </Link>
                ))}
              </div>

              {/* Inquiry Button */}
              <button
                onClick={() => setOpenForm(true)}
                className="w-full mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 text-sm font-medium"
              >
                Make an Inquiry
              </button>

              <Link
                to="/services/water-treatment"
                className="w-full mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200 block text-center"
              >
                ← Back to Overview
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
