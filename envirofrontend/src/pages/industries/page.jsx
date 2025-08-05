import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import {
  Factory,
  Hospital,
  Building,
  Utensils,
  Shirt,
  Zap,
  Droplets,
  MapPin,
  CheckCircle,
  ArrowRight,
  Leaf,
  Gauge,
  ShieldCheck,
  Globe,
  Phone,
  GlassWater,
  Hammer,
  Car,
  FlaskConical,
  Flame,
  CircleDot,
  Microscope,
  Soup,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

// images
import industryBg from "../../public/topimages/Industry.png"
import pharmaImage from "../../public/Industriesimages/Pharmaceuticalsuccess.jpeg"
import textileImage from "../../public/Industriesimages/Textile.jpeg"
import foodImage from "../../public/Industriesimages/Food & Beverage.jpeg"
// import chemicalImage from "../../public/Industriesimages/Food & Beverage.jpeg"
import oilGasImage from "../../public/Industriesimages/Oil & Gas.jpeg"
// import municipalImage from "../../public/Industriesimages/Municipal.jpeg"
import dairyImage from "../../public/Industriesimages/Dairy Industries.jpeg"
import metalImage from "../../public/Industriesimages/Metal Finishing Industries.jpg"
import automobileImage from "../../public/Industriesimages/Automobile Industries.jpg"
import agroChemicalImage from "../../public/Industriesimages/Agro Chemical Industries.jpeg"
import petroChemicalImage from "../../public/Industriesimages/Petro-chemical Industries.jpeg"
import rubberPlasticImage from "../../public/Industriesimages/Rubber & Plastic Industries.jpg"
import laboratoryImage from "../../public/Industriesimages/Laboratories.jpeg"
import kitchenImage from "../../public/Industriesimages/Large Kitchens.jpeg"

export default function IndustriesPage() {
  const industries = [
    { icon: Shirt, name: "Textile Industries", image: textileImage, color: "bg-purple-100 text-purple-800" },
    { icon: GlassWater, name: "Dairy Industries", image: dairyImage, color: "bg-blue-100 text-blue-800" },
    { icon: Hospital, name: "Pharma & Drug Industries", image: pharmaImage, color: "bg-pink-100 text-pink-800" },
    { icon: Utensils, name: "Food & Beverage Industries", image: foodImage, color: "bg-green-100 text-green-800" },
    { icon: Hammer, name: "Metal Finishing Industries", image: metalImage, color: "bg-gray-100 text-gray-800" },
    { icon: Car, name: "Automobile Industries", image: automobileImage, color: "bg-indigo-100 text-indigo-800" },
    { icon: FlaskConical, name: "Agro Chemical Industries", image: agroChemicalImage, color: "bg-lime-100 text-lime-800" },
    { icon: Zap, name: "Oil & Gas Refineries", image: oilGasImage, color: "bg-yellow-100 text-yellow-800" },
    { icon: Flame, name: "Petro-chemical Industries", image: petroChemicalImage, color: "bg-orange-100 text-orange-800" },
    { icon: CircleDot, name: "Rubber & Plastic Industries", image: rubberPlasticImage, color: "bg-red-100 text-red-800" },
    { icon: Microscope, name: "Laboratories", image: laboratoryImage, color: "bg-cyan-100 text-cyan-800" },
    { icon: Soup, name: "Large Kitchens", image: kitchenImage, color: "bg-rose-100 text-rose-800" },
  ]

  const statistics = [
    { number: "350+", label: "Industrial Projects", icon: Factory, color: "bg-blue-100 text-blue-800" },
    { number: "150+", label: "Municipal Projects", icon: Building, color: "bg-red-100 text-red-800" },
    { number: "50+", label: "Hospital Projects", icon: Hospital, color: "bg-green-100 text-green-800" },
    { number: "10+", label: "States Covered", icon: MapPin, color: "bg-purple-100 text-purple-800" },
  ]

  const standards = [
    { name: "Central Pollution Control Board (CPCB)", icon: ShieldCheck, color: "bg-blue-100 text-blue-800" },
    { name: "State Pollution Control Board (SPCB)", icon: Leaf, color: "bg-green-100 text-green-800" },
    { name: "Bureau of Indian Standards (BIS)", icon: Gauge, color: "bg-orange-100 text-orange-800" },
    { name: "International Standards (ISO)", icon: Globe, color: "bg-purple-100 text-purple-800" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
  <title>Industries - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Explore the industries served by Varsha Enviro Technologies — from manufacturing and pharmaceuticals to hospitality and municipalities. Customized environmental solutions for every sector."
  />
  <meta
    name="keywords"
    content="Industries We Serve, Industrial Water Treatment, Air Pollution Control, Solid Waste Management, Environmental Solutions for Factories, Varsha Enviro Technologies"
  />
  <meta name="author" content="Varsha Enviro Technologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>

      {/* Hero Section */}
     <section
  className="py-4 h-min-screen bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url(${industryBg})`,
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
      🏭 Industries We Serve
    </Badge>

    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Tailored Solutions for <br /> Every Industry
    </h1>

    <p className="text-lg text-white max-w-3xl mx-auto mb-8">
      Custom environmental solutions designed to meet unique challenges and regulatory needs of each sector. We serve diverse industries with efficient, sustainable systems that ensure compliance and long-term environmental protection.
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
        <li className="text-white font-medium">Industries</li>
      </ol>
    </nav>
  </div>
</section>



      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide specialized solutions tailored to each industry's unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-6 ${industry.color} rounded-b-lg`}>
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-white bg-opacity-30 mr-4">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{industry.name}</h2>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that demonstrate our experience and capabilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${stat.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure all solutions meet or exceed industry standards and environmental regulations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${standard.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{standard.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our experts are ready to provide customized solutions for your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-white/90 shadow-lg px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
