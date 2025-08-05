"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import {
  X,
  Send,
  FileText,
  User,
  Mail,
  Phone,
  Building,
  CheckCircle,
} from "lucide-react"

export function StickyQuoteButton({ open, setOpen }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    product: "",
    message: "",
  })

  const services = [
    "OPERATION & MAINTENANCE",
    "REPAIR & MAINTENANCE",
    "AIR SCRUBBER",
    "SOLID WASTE TREATMENT",
    "WATER TREATMENT",
    "WASTEWATER TREATMENT",
  ]

  const products = [
    "Sewage Treatment Plant (STP)",
    "Effluent Treatment Plant (ETP)",
    "Combined Effluent Treatment Plant (CETP)",
    "Zero Liquid Discharge (ZLD)",
    "Ultra-Filtration (UF)",
    "Reverse Osmosis (RO)",
    "Demineralization Plant (DM)",
    "Softener Plant",
    "Rain-Water Harvesting",
    "Organic Waste Composter (OWC)",
    "Garden Waste Shredder",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Name is required.")
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email is required.")
      return false
    }
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email address.")
      return false
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Phone number is required.")
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage("Project details are required.")
      return false
    }
    setErrorMessage("")
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      // Prepare data to match backend model keys
      const postData = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        companyName: formData.company,
        service: formData.service,
        product: formData.product,
        description: formData.message,
      }
      // Adjust the backend URL as needed
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/submitInquiry`, postData)
      if (response.status === 201) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setOpen(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            product: "",
            message: "",
          })
        }, 3000)
      } else {
        setErrorMessage("Failed to submit inquiry. Please try again.")
      }
    } catch (error) {
      console.log("error----", error)
      setErrorMessage("An error occurred while submitting the inquiry.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setOpen(false)
    setIsSubmitted(false)
    setErrorMessage("")
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="relative bg-blue-600 text-white p-6 rounded-t-lg">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white text-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <FileText className="w-8 h-8 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Inquiry</h2>
              <p className="opacity-90">Tell us about your project requirements</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">Quote Request Sent!</h3>
              <p className="text-slate-600">
                Thank you for your interest. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              {errorMessage && (
                <div className="mb-4 text-red-600 font-semibold text-center">{errorMessage}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                        type="number"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Product Required</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a product</option>
                      {products.map((product, i) => (
                        <option key={i} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                    placeholder="Describe your project requirements, capacity, timeline, etc."
                    required
                  />
                </div>

                {/* Key Points Below Form */}
                <ul className="mt-6 list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Customized water & waste treatment solutions</li>
                  <li>Free expert consultation</li>
                  <li>Pan-India service & installation</li>
                  <li>Quality assurance & fast turnaround</li>
                </ul>
                <Button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
