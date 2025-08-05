import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Zap,
  Filter,
  Recycle,
  Leaf,
  Droplets,
  Wind,
  Settings,
  ArrowRight,
  CheckCircle,
  Beaker,
  Gauge,
  Shield,
  Factory,
} from "lucide-react"
import techBg from "../../public/topimages/Technology.png" // Adjust the path as necessary
import { Helmet } from "react-helmet"

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Factory,
      name: "ETP",
      fullName: "Effluent Treatment Plant",
      description:
        "Comprehensive system for treating industrial wastewater to remove contaminants before discharge or reuse.",
      features: [
        "Physical, chemical & biological treatment",
        "Customized for industry-specific effluents",
        "Meets regulatory standards",
        "Modular and scalable design",
        "Automated operation",
      ],
      applications: ["Textile", "Pharmaceutical", "Chemical", "Food processing", "Tanneries"],
      efficiency: "90-98%",
      color: "orange",
    },
    {
      icon: Zap,
      name: "MBBR",
      fullName: "Moving Bed Bio Reactor",
      description:
        "Advanced biological treatment technology using suspended plastic carriers for enhanced microbial growth and pollutant removal.",
      features: [
        "High treatment efficiency",
        "Compact design",
        "Low maintenance",
        "Flexible operation",
        "Energy efficient",
      ],
      applications: ["Municipal wastewater", "Industrial effluent", "Food processing", "Pharmaceutical"],
      efficiency: "95%",
      color: "blue",
    },
    {
      icon: Filter,
      name: "MBR",
      fullName: "Membrane Bio Reactor",
      description:
        "Combines biological treatment with membrane filtration for superior water quality and compact footprint.",
      features: [
        "Excellent effluent quality",
        "Small footprint",
        "High biomass concentration",
        "Pathogen removal",
        "Consistent performance",
      ],
      applications: ["Water reuse", "Municipal treatment", "Industrial wastewater", "Hospital effluent"],
      efficiency: "99%",
      color: "green",
    },
    {
      icon: Recycle,
      name: "SBR",
      fullName: "Sequential Batch Reactor",
      description:
        "Time-controlled biological treatment process offering flexibility and excellent nutrient removal capabilities.",
      features: [
        "Nutrient removal",
        "Operational flexibility",
        "No secondary clarifier",
        "Automated control",
        "Cost effective",
      ],
      applications: ["Small communities", "Industrial parks", "Hotels", "Residential complexes"],
      efficiency: "92%",
      color: "purple",
    },
    {
      icon: Droplets,
      name: "RO",
      fullName: "Reverse Osmosis",
      description:
        "Membrane-based water purification technology removing dissolved salts and contaminants with 0.0001 micron pore size.",
      features: [
        "99.9% salt removal",
        "Micron-level filtration",
        "Automated operation",
        "Energy recovery",
        "Modular design",
      ],
      applications: ["Drinking water", "Process water", "Boiler feed", "Electronics"],
      efficiency: "99.9%",
      color: "cyan",
    },
    {
      icon: Wind,
      name: "Air Scrubbers",
      fullName: "Industrial Air Pollution Control",
      description:
        "Advanced gas cleaning systems for removing SOx, NOx, chemical fumes, and toxic gases from industrial emissions.",
      features: [
        "Multi-pollutant removal",
        "High efficiency",
        "Corrosion resistant",
        "Automated monitoring",
        "Low pressure drop",
      ],
      applications: ["Chemical plants", "Refineries", "Power plants", "Metal processing"],
      efficiency: "98%",
      color: "indigo",
    },
    {
      icon: Leaf,
      name: "ZLD",
      fullName: "Zero Liquid Discharge",
      description:
        "Complete water recovery system with no liquid waste discharge, achieving maximum water conservation.",
      features: [
        "100% water recovery",
        "Zero liquid waste",
        "Salt recovery",
        "Environmental compliance",
        "Resource conservation",
      ],
      applications: ["Textile", "Chemical", "Power plants", "Pharmaceutical"],
      efficiency: "100%",
      color: "emerald",
    },
  ]

  const processFlow = [
    {
      title: "Pre-Treatment",
      description: "Screening, grit removal, and primary settling",
      icon: Filter,
    },
    {
      title: "Biological Treatment",
      description: "MBBR/MBR/SBR for organic matter removal",
      icon: Beaker,
    },
    {
      title: "Secondary Treatment",
      description: "Clarification and sludge separation",
      icon: Recycle,
    },
    {
      title: "Tertiary Treatment",
      description: "Filtration and disinfection for reuse",
      icon: Droplets,
    },
    {
      title: "Sludge Treatment",
      description: "Dewatering and disposal/composting",
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50/20">

      <Helmet>
  <title>Technology - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Discover the advanced technologies used by Varsha Enviro Technologies for water treatment, air purification, and solid waste management. We deliver innovative and sustainable environmental solutions."
  />
  <meta
    name="keywords"
    content="Technology, Environmental Technologies, Water Treatment Technology, Air Scrubber Technology, Solid Waste Solutions, Varsha Enviro Technologies"
  />
  <meta name="author" content="Varsha Enviro Technologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>
      {/* Hero Section */}
      <section
        className="py-4 h-min-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${techBg})`,
        }}
      >
        {/* 🔹 Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        {/* 🔹 Content */}
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <Badge
            variant="outline"
            className="bg-white text-blue-600 border-blue-200 mb-6 inline-flex items-center px-4 text-sm font-medium"
          >
            <Zap className="w-4 h-4 mr-2" />
            Advanced Technology Solutions
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cutting-Edge Treatment
            <br /> Technologies
          </h1>

          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            We leverage the latest environmental engineering technologies to deliver efficient,
            reliable, and sustainable treatment solutions for water, wastewater, and air pollution control.
          </p>

          {/* 🔹 Breadcrumb */}
          <nav className="text-white text-sm md:text-base">
            <ol className="list-reset flex justify-center space-x-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">Home</a>
              </li>
              <li>
                <span className="text-white">/</span>
              </li>
              <li className="text-white font-medium">Technologies</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Technology Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              const colorMap = {
                orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-300" },
                blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-300" },
                green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-300" },
                purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-300" },
                emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-300" },
                cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-300" },
                indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-300" },
              }
              const colors = colorMap[tech.color] || colorMap.blue
              
              return (
                <div
                  key={index}
                  className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mr-4`}
                      >
                        <IconComponent className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">{tech.name}</h2>
                          <Badge className={`${colors.bg} ${colors.text}`}>
                            {tech.efficiency} Efficiency
                          </Badge>
                        </div>
                        <h3 className={`text-lg font-semibold ${colors.text}`}>{tech.fullName}</h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{tech.description}</p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {tech.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0`} />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className={`${colors.border} ${colors.text}`}
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className={`text-center mb-6 p-6 ${colors.bg} rounded-lg`}>
                          <IconComponent className={`w-16 h-16 ${colors.text} mx-auto mb-4`} />
                          <h3 className="text-2xl font-bold text-slate-800">{tech.name} Technology</h3>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span className="font-medium">Treatment Efficiency</span>
                            <Badge className={`${colors.bg} ${colors.text}`}>{tech.efficiency}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span className="font-medium">Maintenance</span>
                            <span className="text-green-600 font-medium">Low</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span className="font-medium">Energy Consumption</span>
                            <span className="text-green-600 font-medium">Optimized</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span className="font-medium">Footprint</span>
                            <span className="text-blue-600 font-medium">Compact</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 mb-4">
              <Recycle className="w-4 h-4 mr-2" /> Treatment Process
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Treatment Process Flow</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our systematic approach ensures optimal treatment efficiency at every stage
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {processFlow.map((process, index) => {
                const IconComponent = process.icon
                return (
                  <div key={index} className="text-center relative">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{process.title}</h3>
                    <p className="text-sm text-slate-600">{process.description}</p>

                    {/* Arrow */}
                    {index < processFlow.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-blue-200 transform -translate-y-1/2 z-0">
                        <ArrowRight className="w-4 h-4 text-blue-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ZLD Process Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 mb-4">
              <Leaf className="w-4 h-4 mr-2" /> Zero Liquid Discharge
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Zero Liquid Discharge (ZLD) Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete water recovery system: ETP/STP + UF + RO + MEE + ATFD
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-emerald-600 p-8 text-white text-center">
                  <Leaf className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">ZLD System Components</h3>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Process Stages:</h4>
                      <div className="space-y-3">
                        {[
                          "Primary Treatment (ETP/STP)",
                          "Ultra-Filtration (UF)",
                          "Reverse Osmosis (RO)",
                          "Multiple Effect Evaporator (MEE)",
                          "Agitated Thin Film Dryer (ATFD)",
                        ].map((stage, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-slate-700">{stage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Benefits:</h4>
                      <div className="space-y-3">
                        {[
                          "100% water recovery",
                          "Zero liquid discharge",
                          "Salt recovery for reuse",
                          "Environmental compliance",
                          "Reduced water footprint",
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-green-50 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Quality Assurance & Testing</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Rigorous testing and quality control measures ensure optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Performance Testing",
                description: "Comprehensive testing of all system parameters and efficiency metrics",
              },
              {
                icon: Shield,
                title: "Quality Control",
                description: "ISO certified processes and materials for guaranteed reliability",
              },
              {
                icon: Settings,
                title: "Commissioning",
                description: "Professional installation, testing, and system optimization",
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}