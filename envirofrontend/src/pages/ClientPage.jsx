import React from 'react'
import { Helmet } from 'react-helmet'
import { ExternalLink, Send, Phone } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Link } from "react-router-dom";
import { Card, CardContent } from '../components/ui/card'

// 🔹 Sample Background Image for Hero
import clientHeroBg from '../public/topimages/Technology.png'

// ✅ Client Logos Data
const clientLogos = [
  {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    
    
  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
 
  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
 
  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
 
  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
 
  },
    {
    id: 1,
    logoUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',

  },
  

  // ... add more clients
]

// ✅ Stats
const stats = [
  { value: "50+", label: "Happy Clients", color: "text-blue-600" },
  { value: "95%", label: "Client Satisfaction", color: "text-green-600" },
  { value: "5+", label: "Years Experience", color: "text-purple-600" },
]

// ✅ Call Handler
const handleCall = () => {
  window.location.href = "tel:+919728710720"
}

// ✅ Logo Card Component
const LogoCard = ({ logoUrl, linkUrl, linkText, companyName }) => (
  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
        <img src={logoUrl} alt={companyName} className="object-contain max-h-full max-w-full" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center text-sm font-medium">
        {linkText}
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </CardContent>
  </Card>
)

const ClientLogosPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Clients - Varsha Enviro Technologies</title>
        <meta name="description" content="Explore our esteemed client base at Varsha Enviro Technologies. Trusted by industry leaders for environmental solutions tailored to every sector." />
        <meta name="keywords" content="Client List, Environmental Solutions Clients, Varsha Enviro Clients, Happy Clients, Client Testimonials" />
        <meta name="author" content="Varsha Enviro Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* 🔹 Hero Section */}
      <section
        className="py-4 h-min-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${clientHeroBg})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <Badge className="bg-white text-blue-600 border-blue-200 mb-6 inline-flex items-center px-4 text-sm font-medium">
            🤝 Our Clients
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Trusted by Industry
            <br /> Leaders</h1>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
           We're honored to work with a wide array of respected companies. Our commitment to excellence drives long-term relationships built on trust and mutual success.
We strive to deliver value that not only meets expectations but elevates every collaboration we undertake.  </p>
          <nav className="text-white text-sm md:text-base">
            <ol className="list-reset flex justify-center space-x-2">
              <li><a href="/" className="text-blue-500 hover:underline">Home</a></li>
              <li><span className="text-white">/</span></li>
              <li className="text-white font-medium">Clients</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A track record of satisfaction and success</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Client Logo Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Work With</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the amazing companies we’ve partnered with
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clientLogos.map((client) => (
              <LogoCard key={client.id} {...client} />
            ))}
          </div>  
          
          
        </div>  
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-16 bg-green-50 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can bring value to your organization with our tailored environmental solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact">
  <Button className="bg-white text-blue-600 hover:bg-white/90 shadow-lg px-8 py-4 text-lg">
    <Send className="w-5 h-5 mr-2" />
    Send Message
  </Button>
</Link>
            <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg" onClick={handleCall}>
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientLogosPage
