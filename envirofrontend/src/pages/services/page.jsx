"use client"

import { useState } from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import {
  Droplets,
  Recycle,
  Trash2,
  Wind,
  User,
  Settings,
  FileText,
  Mail,
  CheckCircle,
  ArrowRight,
  Filter,
  Leaf,
  Factory,
  Building,
  Hospital,
  ClipboardList,
  Calendar,
  Wrench,
  Shield,
  Phone,
  Waves,
  FlaskConical,
  Gauge,
  CloudRain,
  TreePine,
  Cog,
  PenToolIcon as Tool,
  MapPin,
  Users,
  Eye,
  Clock,
  Target,
  TrendingUp,
  X,
} from "lucide-react"
import environmentBg from "../../public/images/Air Pollution Control.jpg"
import { Link } from "react-router-dom"

export default function ServicesPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleServiceInquiry = (category) => {
    setSelectedService(category)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setSelectedService(null)
  }

  const serviceCategories = [
    {
      icon: Recycle,
      title: "Wastewater Treatment",
      description: "Complete sewage and effluent treatment solutions for environmental protection",
      color: "bg-blue-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/445741658/NM/HL/ED/208958112/industrial-sewage-water-treatment-plant-500x500.jpg",
      points: [
        "Municipal and residential sewage treatment",
        "Industrial wastewater treatment",
        "Multi-industry combined treatment",
        "Complete water recovery system",
      ],
      services: [
        { name: "Sewage Treatment Plant (STP)", icon: Recycle, desc: "Municipal and residential sewage treatment" },
        { name: "Effluent Treatment Plant (ETP)", icon: Factory, desc: "Industrial wastewater treatment" },
        { name: "Combined Effluent Treatment Plant (CETP)", icon: Building, desc: "Multi-industry combined treatment" },
        { name: "Zero Liquid Discharge (ZLD)", icon: Droplets, desc: "Complete water recovery system" },
      ],
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Advanced water purification systems for clean, safe drinking water",
      color: "bg-teal-500",
      image: "https://samudhrawatersolutions.in/samudra_panel/img/images/product/320f792a819173e658dc383ae5fd191c.jpg",
      points: [
        "Advanced membrane filtration",
        "High-purity water production",
        "Complete mineral removal",
        "Water hardness reduction",
        "Sustainable water collection",
      ],
      services: [
        { name: "Ultra-Filtration (UF)", icon: Filter, desc: "Advanced membrane filtration" },
        { name: "Reverse Osmosis (RO)", icon: Waves, desc: "High-purity water production" },
        { name: "Demineralization Plant (DM)", icon: FlaskConical, desc: "Complete mineral removal" },
        { name: "Softener Plant", icon: Gauge, desc: "Water hardness reduction" },
        { name: "Rain-Water Harvesting", icon: CloudRain, desc: "Sustainable water collection" },
      ],
    },
    {
      icon: Trash2,
      title: "Solid Waste Treatment",
      description: "Sustainable waste processing and composting solutions",
      color: "bg-green-500",
      image: "https://togocomposter.com/wp-content/uploads/2022/06/TG-CC-2000-2.jpg",
      points: [
        "Food and organic waste processing",
        "Garden waste size reduction",
        "Composting solutions",
        "Waste segregation systems",
      ],
      services: [
        { name: "Organic Waste Composter (OWC)", icon: Leaf, desc: "Food and organic waste processing" },
        { name: "Garden Waste Shredder", icon: TreePine, desc: "Garden waste size reduction" },
      ],
    },
    {
      icon: Wind,
      title: "Air Scrubber",
      description: "Industrial air treatment systems for pollution control",
      color: "bg-cyan-500",
      image: "https://www.emergyenviro.com/backend/assets/sub_services/DesignofAir.png",
      points: [
        "Industrial air pollution control",
        "Emission reduction systems",
        "Air quality improvement",
        "Odor control solutions",
      ],
      services: [{ name: "Air Scrubber Systems", icon: Wind, desc: "Industrial air pollution control" }],
    },
    {
      icon: Settings,
      title: "Repair & Maintenance",
      description: "Comprehensive repair and maintenance services",
      color: "bg-slate-500",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/TZ/RQ/FY/4227856/cpas.webp",
      points: ["Equipment repair services", "Preventive maintenance", "Emergency support", "Spare parts supply"],
      services: [{ name: "Repair & Maintenance", icon: Tool, desc: "Equipment repair services" }],
    },
    {
      icon: Cog,
      title: "Operation & Maintenance",
      description: "Professional operation and maintenance services",
      color: "bg-indigo-500",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/TZ/RQ/FY/4227856/cpas.webp",
      points: ["Complete O&M services", "24/7 monitoring", "Performance optimization", "Cost-effective solutions"],
      services: [{ name: "Operation & Maintenance", icon: Cog, desc: "Complete O&M services" }],
    },
  ]

  const processSteps = [
    {
      icon: ClipboardList,
      title: "Requirement Analysis",
      description: "Detailed consultation to understand your specific needs and challenges",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calendar,
      title: "Site Assessment",
      description: "Free on-site evaluation by our experienced technical team",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: Wrench,
      title: "System Design",
      description: "Custom solution design tailored to your specific requirements",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Settings,
      title: "Installation",
      description: "Professional installation by certified and experienced technicians",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Shield,
      title: "Quality Testing",
      description: "Rigorous testing and commissioning to ensure optimal performance",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Phone,
      title: "Ongoing Support",
      description: "24/7 maintenance support and technical assistance",
      color: "text-blue-400",
      bgColor: "bg-blue-50",
    },
  ]

  const industries = [
    { name: "Pharmaceutical", icon: Hospital, color: "blue" },
    { name: "Textile", icon: Factory, color: "teal" },
    { name: "Food Industry", icon: Building, color: "green" },
    { name: "Chemical", icon: Factory, color: "cyan" },
    { name: "Oil & Gas", icon: Factory, color: "blue" },
    { name: "Municipal", icon: Building, color: "emerald" },
  ]

  const achievements = [
    { number: "500+", label: "Products Delivered", icon: Target },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Cities Served", icon: MapPin },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Inquiry Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header with blue background */}
            <div className="bg-blue-600 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Inquiry for {selectedService?.title}</h3>
                    <p className="opacity-90">Tell us about your project requirements</p>
                  </div>
                </div>
                <button
                  onClick={closeForm}
                  className="bg-white text-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 ">
              {isSubmitted ? (
                <div className="text-center py-12 ">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Inquiry Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for your interest. Our team will contact you within 24 hours.
                  </p>
                  <button
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={() => {
                      setIsSubmitted(false)
                      closeForm()
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsSubmitted(true)
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your company (if applicable)"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                      value={selectedService?.title}
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Requirements *</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe your requirements in detail..."
                      required
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Our expert will contact you within 24 hours</li>
                      <li>• Free site visit and requirement analysis</li>
                      <li>• Detailed technical proposal with pricing</li>
                      <li>• Professional installation and support</li>
                    </ul>
                  </div>

                  <div className=" pt-4">
                    <button
                      type="submit"
                      className={` w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ${selectedService?.color}`}
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${environmentBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-200 mb-6 px-4  text-sm font-medium"
              >
                <Droplets className="w-4 h-4" />
                Complete Environmental Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Water & Environmental Treatment Systems
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                Comprehensive treatment solutions designed for efficiency, sustainability and compliance with
                environmental regulations across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{achievement.number}</div>
                  <div className="text-slate-600 text-sm">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Categories - Updated Card Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 mb-4">
              <Settings className="w-4 h-4 mr-2" /> Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Complete Environmental Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From water treatment to waste management, we provide end-to-end environmental solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg?height=240&width=400&query=service"}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Service Name/Title */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Service Points */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.points.slice(0, 3).map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                        {service.points.length > 3 && (
                          <li className="text-sm text-gray-500 font-medium">
                            +{service.points.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => handleServiceInquiry(service)}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Get {service.title} Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 mb-4">
              <Settings className="w-4 h-4 mr-2" /> Our Process
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From consultation to ongoing support, we ensure seamless project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <div className="flex items-center text-sm font-medium text-blue-600">
                      <span>Step {index + 1}</span>
                      <div className="w-8 h-px bg-blue-200 mx-3"></div>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white text-blue-600 border-blue-200 mb-4">
              <Factory className="w-4 h-4 mr-2" /> Industries Served
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Specialized Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Custom treatment systems tailored to your industry requirements
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              const colorClass = `bg-${industry.color}-100 text-${industry.color}-600`
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-slate-800">{industry.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-100 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Water Management?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our experts will design a custom solution tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919728710720">
                {" "}
                <Button
                  variant="outline"
                  className="text-black border-black hover:bg-white/10 bg-transparent"
                  size="lg"
                >
                  Call Now: +91 9728710720
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
