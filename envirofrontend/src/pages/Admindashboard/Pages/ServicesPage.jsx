"use client"

import { useEffect, useState } from "react"
import { Settings, Search, CheckCircle, Upload, X, Plus, Edit, Trash2, ImageIcon } from "lucide-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const ServicesPage = () => {
  const [services, setServices] = useState([])

  const [selectedServices, setSelectedServices] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [newService, setNewService] = useState({
    name: "",
    category: "",
    points: [""],
    description: "",
    image: "",
  })

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getAllServices")
        setServices(response.data)
        
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    fetchServices()
  }, [])

  const categories = ["Development", "Infrastructure", "Marketing", "Analytics", "Design", "Consulting"]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border border-green-200"
      case "Inactive":
        return "bg-red-100 text-red-800 border border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300"
    }
  }

  const handleSelectService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSelectAll = () => {
    if (selectedServices.length === filteredServices.length) {
      setSelectedServices([])
    } else {
      setSelectedServices(filteredServices.map((s) => s.id))
    }
  }

  const handleDeleteSelected = () => {
    if (selectedServices.length === 0) return
    if (confirm(`Are you sure you want to delete ${selectedServices.length} service(s)?`)) {
      setServices((prev) => prev.filter((s) => !selectedServices.includes(s.id)))
      setSelectedServices([])
      toast.success(`${selectedServices.length} service(s) deleted successfully!`)
    }
  }

  const handleDeleteService = (serviceId) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((s) => s.id !== serviceId))
      toast.success("Service deleted successfully!")
    }
  }

  const handleStatusChange = (serviceId, newStatus) => {
    setServices((prev) => prev.map((s) => (s.id === serviceId ? { ...s, status: newStatus } : s)))
    toast.success(`Service status changed to ${newStatus}`)
  }

  const handleImageUpload = (e, isEdit = false) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (isEdit) {
          setSelectedService((prev) => ({ ...prev, image: reader.result }))
        } else {
          setNewService((prev) => ({ ...prev, image: reader.result }))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddPoint = (isEdit = false) => {
    if (isEdit) {
      setSelectedService((prev) => ({ ...prev, points: [...prev.points, ""] }))
    } else {
      setNewService((prev) => ({ ...prev, points: [...prev.points, ""] }))
    }
  }

  const handleRemovePoint = (index, isEdit = false) => {
    if (isEdit) {
      setSelectedService((prev) => ({
        ...prev,
        points: prev.points.filter((_, i) => i !== index),
      }))
    } else {
      setNewService((prev) => ({
        ...prev,
        points: prev.points.filter((_, i) => i !== index),
      }))
    }
  }

  const handlePointChange = (index, value, isEdit = false) => {
    if (isEdit) {
      setSelectedService((prev) => ({
        ...prev,
        points: prev.points.map((point, i) => (i === index ? value : point)),
      }))
    } else {
      setNewService((prev) => ({
        ...prev,
        points: prev.points.map((point, i) => (i === index ? value : point)),
      }))
    }
  }

  const handleAddService = (e) => {
    e.preventDefault()
    if (!newService.name || !newService.category || !newService.description) {
      toast.error("Please fill in all required fields")
      return
    }
    try {
      const response = axios.post("http://localhost:8000/addServices", newService,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true
        }
      )
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleEditService = (e) => {
    e.preventDefault()
    if (!selectedService.name || !selectedService.category || !selectedService.description) {
      toast.error("Please fill in all required fields")
      return
    }

    const updatedService = {
      ...selectedService,
      points: selectedService.points.filter((point) => point.trim() !== ""),
    }

    setServices((prev) => prev.map((service) => (service.id === selectedService.id ? updatedService : service)))
    setShowEditForm(false)
    setSelectedService(null)
    toast.success("Service updated successfully!")
  }

  const handleEditClick = (service) => {
    setSelectedService({ ...service })
    setShowEditForm(true)
  }

  const filteredServices = services.filter((service) => {
    const matchesFilter = filter === "All" || service.status === filter
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getServiceCount = (status) => {
    if (status === "Total") return services.length
    return services.filter((s) => s.status === status).length
  }

  const StatCard = ({ title, count, icon: Icon, color = "gray" }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p
            className={`text-3xl font-bold mt-1 ${
              color === "green" ? "text-green-600" : color === "red" ? "text-red-600" : "text-gray-900"
            }`}
          >
            {count}
          </p>
        </div>
        <div
          className={`p-3 rounded-lg ${
            color === "green" ? "bg-green-50" : color === "red" ? "bg-red-50" : "bg-gray-50"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${
              color === "green" ? "text-green-600" : color === "red" ? "text-red-600" : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
            <p className="text-gray-600 mt-2">Manage your services and offerings efficiently</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              <span>Add Service</span>
            </button>
            {selectedServices.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                <Trash2 className="w-5 h-5" />
                <span>Delete Services</span>
              </button>
            )}
          </div>
        </div>

        {/* Summary Stats - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Services" count={getServiceCount("Total")} icon={Settings} />
          <StatCard title="Active Services" count={getServiceCount("Active")} icon={CheckCircle} color="green" />
          <StatCard title="Inactive Services" count={getServiceCount("Inactive")} icon={Settings} color="red" />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none bg-white font-medium"
              >
                <option value="All">All Services</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center space-x-4 w-full lg:w-auto justify-between lg:justify-end">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedServices.length === filteredServices.length && filteredServices.length > 0}
                  onChange={handleSelectAll}
                  className="w-5 h-5 text-gray-600 bg-white border-2 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-600">
                  Select All {selectedServices.length > 0 && `(${selectedServices.length})`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-16 text-center">
            <Settings className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg?height=240&width=400&query=service"}
                    alt={service.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Checkbox */}
                  <div className="absolute top-4 left-4">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleSelectService(service.id)}
                      className="w-5 h-5 text-gray-600 bg-white border-2 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                    />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Service Name/Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 border border-gray-300">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Points */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.points.slice(0, 3).map((point, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
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

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Status Dropdown */}
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Update Status
                    </label>
                    <select
                      value={service.status}
                      onChange={(e) => handleStatusChange(service.id, e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none bg-white transition-colors"
                    >
                      <option value="Active">✅ Active</option>
                      <option value="Inactive">❌ Inactive</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(service)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Service Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Add New Service</h3>
                <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleAddService} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Name *</label>
                    <input
                      type="text"
                      value={newService.name}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Category *</label>
                    <select
                      value={newService.category}
                      onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none bg-white"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Image</label>
                  <div className="flex items-center space-x-4">
                    {newService.image && (
                      <img
                        src={newService.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
                      />
                    )}
                    <label className="cursor-pointer">
                      <span className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium">
                        <ImageIcon className="w-5 h-5" />
                        <span>{newService.image ? "Change Image" : "Upload Image"}</span>
                      </span>
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} className="hidden" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Points *</label>
                  <div className="space-y-3">
                    {newService.points.map((point, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => handlePointChange(index, e.target.value)}
                          placeholder={`Service point ${index + 1}`}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                        />
                        {newService.points.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemovePoint(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddPoint()}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-dashed border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Point</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                    required
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Add Service</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Service Form Modal */}
        {showEditForm && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Edit Service</h3>
                <button onClick={() => setShowEditForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleEditService} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Name *</label>
                    <input
                      type="text"
                      value={selectedService.name}
                      onChange={(e) => setSelectedService({ ...selectedService, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Category *</label>
                    <select
                      value={selectedService.category}
                      onChange={(e) => setSelectedService({ ...selectedService, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none bg-white"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Image</label>
                  <div className="flex items-center space-x-4">
                    {selectedService.image && (
                      <img
                        src={selectedService.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
                      />
                    )}
                    <label className="cursor-pointer">
                      <span className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium">
                        <ImageIcon className="w-5 h-5" />
                        <span>{selectedService.image ? "Change Image" : "Upload Image"}</span>
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, true)}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Points *</label>
                  <div className="space-y-3">
                    {selectedService.points.map((point, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => handlePointChange(index, e.target.value, true)}
                          placeholder={`Service point ${index + 1}`}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                        />
                        {selectedService.points.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemovePoint(index, true)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddPoint(true)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-dashed border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Point</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedService.status}
                    onChange={(e) => setSelectedService({ ...selectedService, status: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none bg-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={selectedService.description}
                    onChange={(e) => setSelectedService({ ...selectedService, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                    required
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Update Service
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEditForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
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
    </div>
  )
}

export default ServicesPage
