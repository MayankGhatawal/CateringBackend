"use client"

import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, MessageCircle, Instagram, Twitter } from "lucide-react"
import logo from "../../src/public/images/white-logo.png"

export function Footer() {
  const location = useLocation()

  // ⬆️ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  const services = [
  { name: "Wastewater treatment", path: "/services/wastewater-treatment" },
  { name: "Water treatment", path: "/services/water-treatment" },
  { name: "Solid waste treatment", path: "/services/solid-waste-treatment" },
  { name: "Air scrubber", path: "/services/air-scrubber" },
  { name: "Repair & maintenance", path: "/services/repair-maintenance" },
  { name: "Operation & maintenance", path: "/services/operation-maintenance" },
];
  const handleWhatsApp = () => {
    window.open("https://wa.me/919728710720", "_blank")
  }

  const handleFacebook = () => {
    window.open("https://facebook.com", "_blank")
  }
  const handleInstagram = () => {
    window.open("https://instagram.com", "_blank")
  }
  const handleTwitter = () => {
    window.open("https://twitter.com", "_blank")
  }
  // const handleLinkedIn = () => {
  //   window.open("https://linkedin.com", "_blank")
  // }

  const handleCall = () => {
    window.location.href = "tel:+919728710720"
  }

  const handleEmail = () => {
    window.location.href = "mailto:varshaenvirocare@gmail.com"
  }

  const handleRashtechInfo = () => {
    window.open("https://rashtechinfo.com", "_blank")
  }

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex pl-3 items-center h-32 -mt-8 mb-3">
              <img
                src={logo}
                alt="Varsha Enviro Logo"
                className="h-full object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm pl-5 leading-relaxed">
              Leading environmental engineering firm providing advanced water treatment, wastewater management, and
              pollution control solutions across India.
            </p>
          </div>

      {/* Quick Links */}
<div>
  <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-sm">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <Link to="/" className="text-gray-300 hover:text-blue-500">Home</Link>
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <Link to="/about" className="text-gray-300 hover:text-blue-500">About Us</Link>
    </li>
   
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <Link to="/technology" className="text-gray-300 hover:text-blue-500">Technology</Link>
    </li>
   
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <Link to="/industries" className="text-gray-300 hover:text-blue-500">Industries</Link>
    </li>
    {/* <li><Link to="/gallery" className="text-gray-300 hover:text-blue-500">Gallery</Link></li> */}
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <Link to="/contact" className="text-gray-300 hover:text-blue-500">Contact</Link>
    </li>
  </ul>
</div>

 <div>
      <h4 className="text-sm font-semibold mb-4">Our Services</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {services.map((service, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
            <Link
              to={service.path}
              className="hover:text-blue-500 transition-colors block"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-green-400" />
                <div>
                  <p className="font-medium">Head Office:</p>
                  <p>Ward No:3, Haily Mandi, Pataudi Road, Gurugram, Haryana</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={handleCall}>
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91-9728710720</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={handleEmail}>
                <Mail className="w-4 h-4 text-green-400" />
                <span>varshaenvirocare@gmail.com</span>
              </div>
    <div className="flex space-x-3 mt-4">
  <button
    onClick={handleFacebook}
    className="text-gray-300 cursor-pointer hover:text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </button>
  <button
    onClick={handleInstagram}
    className="text-gray-300 cursor-pointer hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full transition-all"
  >
    <Instagram className="w-5 h-5" />
  </button>
  <button
    onClick={handleTwitter}
    className="text-gray-300 cursor-pointer hover:text-white hover:bg-blue-400 p-2 rounded-full transition-colors"
  >
    <Twitter className="w-5 h-5" />
  </button>
  <button
    onClick={handleWhatsApp}
    className="text-gray-300 cursor-pointer hover:text-white hover:bg-green-500 p-2 rounded-full transition-colors"
  >
    <MessageCircle className="w-5 h-5" />
  </button>
</div>
            </div>
          </div>
        </div>

     <div className="border-t border-gray-700 mt-5 pt-5 -mb-10 pb-4 px-4 flex flex-col items-center sm:flex-row sm:items-center sm:justify-start gap-2 text-center sm:text-left">
  <p className="text-gray-300 text-sm">
    © {new Date().getFullYear()} Varsha Enviro Technologies. All Rights Reserved.
  </p>

  <div className="flex items-center gap-1">
    <span className="text-gray-300 text-sm">Design & Developed by</span>
    <a
      href="https://rashtechinfo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src="../../src/public/images/rash-tech-logo.png"
        alt="Rashtech Logo"
        className="h-7 w-auto"
      />
    </a>
  </div>
</div>

      </div>
    </footer>
  )
}
