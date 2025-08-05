"use client"

import { useState } from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Badge } from "../../components/ui/badge"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle,
  Download, CheckCircle, Building, User, FileText,
  ChevronRight, ChevronDown, ChevronUp, HelpCircle
} from "lucide-react"
import contactBg from "../../public/topimages/contacttop.png"
 import { Helmet } from "react-helmet"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "", // Changed from phone to number to match backend
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/addContactUs`, formData)
      
      if (response.status === 201) {
        toast.success('Message sent successfully!')
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        })
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCall = () => {
    window.location.href = "tel:+919728710720"
  }

  const handleEmail = () => {
    window.location.href = "mailto:varshaenvirocare@gmail.com"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919728710720", "_blank")
  }

  const faqs = [
    {
      question: "What is the typical timeline for project completion?",
      answer:
        "Project timelines vary based on complexity and scale. Small residential systems typically take 2–4 weeks, while large industrial projects may take 2–6 months. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide AMC services for installed systems?",
      answer:
        "Yes, we offer comprehensive AMC (Annual Maintenance Contract) services including preventive maintenance, emergency support, spare parts supply, and performance optimization for all our installed systems.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve clients across India with our head office in Gurugram and branch office in Alwar. Our service network covers 10+ states with local support teams for maintenance and emergency services.",
    },
    {
      question: "Are your systems compliant with environmental regulations?",
      answer:
        "Absolutely. All our systems are designed to meet or exceed CPCB, SPCB, and other relevant environmental standards. We ensure complete regulatory compliance and assist with necessary approvals.",
    },
    {
      question: "Do you provide financing options for projects?",
      answer:
        "We work with various financial institutions to provide flexible payment options and can assist with project financing solutions. Contact us to discuss available options for your specific requirements.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
  <title>Contact Us - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Get in touch with Varsha Enviro Technologies. Reach out for inquiries, service details, support, or custom environmental solutions related to water, air, and waste management."
  />
  <meta
    name="keywords"
    content="Contact Varsha Enviro Technologies, Get in Touch, Environmental Services Inquiry, Support, Water Treatment Contact, Waste Management Help"
  />
  <meta name="author" content="Varsha Enviro Technologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>
      {/* Hero Section */}
      <section
  className="py-4 h-min-screen bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url(${contactBg})`,
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
      📞 Contact Us
    </Badge>

    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Let's Discuss Your <br /> Environmental Needs
    </h1>

    <p className="text-lg text-white max-w-3xl mx-auto mb-8">
      Get in touch with our experts for tailored environmental solutions designed around your industry’s needs. We’re committed to helping you achieve compliance, efficiency, and long-term sustainability goals.
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
        <li className="text-white font-medium">Contact</li>
      </ol>
    </nav>
  </div>
</section>



      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="h-full">
              <Card className="h-full border border-gray-200 shadow-sm rounded-xl overflow-hidden flex flex-col">
                <CardContent className="p-6 sm:p-8 flex-grow">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">Thank you for contacting us. Our team will reach out to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10"
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <Input
                              
                               type="number"
                              name="number"
                              value={formData.number}
                              onChange={handleInputChange}
                              className="pl-10"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="pl-10 min-h-[120px]"
                            placeholder="Tell us about your requirements..."
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="h-full">
              <Card className="h-full border border-gray-200 shadow-sm rounded-xl overflow-hidden flex flex-col">
                <CardContent className="p-6 sm:p-8 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-5">
                    {/* Call */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                        <p className="text-gray-600 mb-2">Speak directly with our experts</p>
                        <div className="space-y-1">
                          <button onClick={handleCall} className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            +91-9728710720
                          </button>
                          <button onClick={() => (window.location.href = "tel:+918006297219")} className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            +91-8006297219
                          </button>
                          <button onClick={() => (window.location.href = "tel:+919467759425")} className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            +91-9467759425
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                        <p className="text-gray-600 mb-2">Send us your requirements</p>
                        <button onClick={handleEmail} className="text-green-600 hover:text-green-700 font-medium transition-colors">
                          varshaenvirocare@gmail.com
                        </button>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                        <p className="text-gray-600 mb-3">Quick chat support</p>
                        <Button
                          onClick={handleWhatsApp}
                          className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2"
                        >
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p>Sunday: 10:00 AM - 5:00 PM</p>
                          <Badge className="bg-green-100 text-green-800 mt-2 hover:bg-green-100">
                            24/7 Emergency Support
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our offices or schedule a site visit for your project requirements
            </p>
          </div>

          {/* Layout: Left Map, Right Info (Both Offices) */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* Left: Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Ward+No:3,+Haily+Mandi,+Pataudi+Road,+Gurugram,+Haryana&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-[460px] rounded-2xl border"
              ></iframe>
            </div>

            {/* Right: Both Office Details */}
            <div className="space-y-10">
              {/* Head Office */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Head Office</h3>
                    <Badge className="bg-blue-100 text-blue-800 mt-1">Main Operations</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p className="text-gray-600">
                      Ward No:3, Haily Mandi, Pataudi Road,<br />
                      Gurugram, Haryana - 122503
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Phone:</p>
                    <p className="text-gray-600">+91-9728710720</p>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Branch Office</h3>
                    <Badge className="bg-green-100 text-green-800 mt-1">Regional Operations</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p className="text-gray-600">
                      Shree Sawariya Tower, 6th Kailash Colony,<br />
                      Near Bhagat Singh Chowk, Alwar, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Phone:</p>
                    <p className="text-gray-600">+91-8006297219</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100 transition rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-[#7F1D1D] w-5 h-5" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <div
                  className={`px-6 pb-6 text-gray-600 leading-relaxed text-base transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-green-50 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and customized environmental solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row  gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8  py-4 text-base"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Send className="w-5 h-5 mr-2 cursor-pointer" />
              Send Message
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-indigo-200  bg-transparent px-8 py-4 text-base"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}