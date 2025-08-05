"use client";

import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Droplets,
  Recycle,
  Trash2,
  Wind,
  Settings,
  ArrowRight,
} from "lucide-react";
import WaterTreatment from "../public/images/Water Treatment.jpg";
import WastewaterTreatment from "../public/images/Wastewater Treatment.jpg";
import SolidWasteManagement from "../public/images/Solid Waste Management.jpg";
import RepairMaintenance from "../public/images/Maintenance & AMC.jpg";
import OperationMaintenance from "../public/images/Air Pollution Control.jpg";



export function ServicesOverview() {
  const navigate = useNavigate();

 const services = [
  {
    icon: Droplets,
    title: "Water Treatment",
    description:
      "Advanced RO plants, UF systems, DM plants, and water softeners for pure water solutions.",
    image: WaterTreatment,
    path: "/services/water-treatment",
  },
  {
    icon: Recycle,
    title: "Wastewater Treatment",
    description:
      "Complete STP, ETP, CETP, and ZLD systems for efficient wastewater management.",
    image: WastewaterTreatment,
    path: "/services/wastewater-treatment",
  },
  {
    icon: Trash2,
    title: "Solid Waste Management",
    description:
      "Organic waste composters and garden waste shredders for sustainable waste processing.",
    image: SolidWasteManagement,
    path: "/services/solid-waste-treatment",
  },
  {
    icon: Settings,
    title: "REPAIR & MAINTENANCE",
    description:
      "Quick repair and expert servicing for STPs, ETPs, WTPs, and air scrubbers to ensure consistent system performance.",
    image: RepairMaintenance,
    path: "/services/repair-maintenance",
  },
  {
    icon: Settings,
    title: "OPERATION & MAINTENANCE",
    description:
      "Professional O&M services for water and air treatment plants with AMC/CAMC support and real-time monitoring.",
    image: OperationMaintenance,
    path: "/services/operation-maintenance",
  },
];


  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="bg-white mt-auto py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🔧 Our Core Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From water purification to waste management, we offer end-to-end
            environmental engineering services tailored for industries and municipalities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                onClick={() => handleNavigate(service.path)}
                className="cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:bg-slate-50"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image + Icon */}
                  <div className="relative h-40 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-md z-10">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content & Button */}
                  <div className="flex flex-col justify-between flex-grow p-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-auto border border-slate-300 text-slate-700 bg-white hover:bg-gray-200 hover:text-black text-sm flex items-center justify-center gap-2 h-10 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleNavigate(service.path);
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
