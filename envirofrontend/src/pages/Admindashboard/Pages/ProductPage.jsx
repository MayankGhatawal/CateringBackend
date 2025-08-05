"use client"

import { useState } from "react"
import { Package, Search, Trash2, Upload, Grid, List, X, Plus, Edit } from "lucide-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ProductPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Software Suite",
      service: "Software",
    
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
      description: "Comprehensive software solution for businesses",
    },
    {
      id: 2,
      name: "Cloud Storage Pro",
      service: "Service",
     
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
      description: "Secure cloud storage with advanced features",
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      service: "Software",
 
      status: "Draft",
      image: "/placeholder.svg?height=200&width=300",
      description: "Advanced analytics and reporting tools",
    },
    {
      id: 4,
      name: "Mobile App Framework",
      service: "Software",
    
      status: "Inactive",
      image: "/placeholder.svg?height=200&width=300",
      description: "Cross-platform mobile development framework",
    },
    {
      id: 5,
      name: "Database Management",
      service: "Service",
      
      status: "Draft",
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional database management service",
    },
  ])

  const [selectedProducts, setSelectedProducts] = useState([])
  const [viewMode, setViewMode] = useState("grid")
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [newProduct, setNewProduct] = useState({
    name: "",
    service: "",
   
    description: "",
    image: "",
  })
  const [editingProduct, setEditingProduct] = useState(null)

  const [showServiceModal, setShowServiceModal] = useState(false)
  const [services, setServices] = useState(["Software", "Service", "Hardware"])
  const [newService, setNewService] = useState("")

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border border-green-200"
      case "Draft":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200"
      case "Inactive":
        return "bg-red-100 text-red-800 border border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300"
    }
  }

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id))
    }
  }

  const handleDeleteSelected = () => {
    if (selectedProducts.length === 0) return
    if (confirm(`Are you sure you want to delete ${selectedProducts.length} product(s)?`)) {
      setProducts((prev) => prev.filter((p) => !selectedProducts.includes(p.id)))
      setSelectedProducts([])
      toast.success(`${selectedProducts.length} product(s) deleted successfully!`)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadProduct = (e) => {
    e.preventDefault()
    if (!newProduct.name || !newProduct.service) {
      toast.error("Please fill in all required fields")
      return
    }

    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      ...newProduct,
   
      status: "Active",
    }

    if (editingProduct) {
      setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)))
      setEditingProduct(null)
      toast.success("Product updated successfully!")
    } else {
      setProducts((prev) => [...prev, product])
      toast.success("Product added successfully!")
    }

    setNewProduct({ name: "", service: "", description: "", image: "" })
    setShowUploadForm(false)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setNewProduct({
      name: product.name,
      service: product.service,
    
      description: product.description,
      image: product.image,
    })
    setShowUploadForm(true)
  }

  const filteredProducts = products.filter((product) => {
    const matchesFilter = filter === "All" || product.status === filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getProductCount = (status) => {
    if (status === "Total") return products.length
    return products.filter((p) => p.status === status).length
  }

  const StatCard = ({ title, count, icon: Icon }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{count}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <Icon className="w-8 h-8 text-gray-600" />
        </div>
      </div>
    </div>
  )

  const ProductCard = ({ product }) => {
    const handleStatusChange = (productId, newStatus) => {
      setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, status: newStatus } : p)))
      toast.success(`Product status changed to ${newStatus}`)
    }

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
        {/* Image Section */}
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg?height=240&width=400&query=product"}
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Checkbox */}
          <div className="absolute top-4 left-4">
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleSelectProduct(product.id)}
              className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
              {product.status}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

          {/* Service Info */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Service Type</p>
                <p className="text-sm font-semibold text-gray-900 mt-1">{product.service}</p>
              </div>
           
            </div>
          </div>

          {/* Status Dropdown */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Change Status
            </label>
            <select
              value={product.status}
              onChange={(e) => handleStatusChange(product.id, e.target.value)}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-colors"
            >
              <option value="Active">✅ Active</option>
              <option value="Inactive">❌ Inactive</option>
              <option value="Draft">📝 Draft</option>
            </select>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => handleEditProduct(product)}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Product</span>
          </button>
        </div>
      </div>
    )
  }

  const ProductListItem = ({ product }) => {
    const handleStatusChange = (productId, newStatus) => {
      setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, status: newStatus } : p)))
      toast.success(`Product status changed to ${newStatus}`)
    }

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center space-x-6 hover:shadow-md transition-shadow">
        <input
          type="checkbox"
          checked={selectedProducts.includes(product.id)}
          onChange={() => handleSelectProduct(product.id)}
          className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />

        <img
          src={product.image || "/placeholder.svg?height=80&width=80&query=product"}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-lg"
        />

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Service: </span>
            <span className="text-sm font-semibold text-gray-900">{product.service}</span>
          </div>
        </div>

        <div className="text-center min-w-[100px]">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Stock</p>
          <p className={`text-sm font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.stock > 0 ? `${product.stock}` : "Out"}
          </p>
        </div>

        <div className="min-w-[140px]">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Status</p>
          <select
            value={product.status}
            onChange={(e) => handleStatusChange(product.id, e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
          >
            <option value="Active">✅ Active</option>
            <option value="Inactive">❌ Inactive</option>
            <option value="Draft">📝 Draft</option>
          </select>
        </div>

        <button
          onClick={() => handleEditProduct(product)}
          className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Edit className="w-5 h-5" />
        </button>
      </div>
    )
  }

  const handleAddService = (e) => {
    e.preventDefault()
    if (!newService.trim()) {
      toast.error("Please enter a service name")
      return
    }
    if (services.includes(newService.trim())) {
      toast.warning("Service already exists")
      return
    }
    setServices((prev) => [...prev, newService.trim()])
    setNewService("")
    toast.success("Service added successfully!")
  }

  const handleDeleteService = (serviceToDelete) => {
    if (confirm(`Are you sure you want to delete "${serviceToDelete}" service?`)) {
      setServices((prev) => prev.filter((service) => service !== serviceToDelete))
      setProducts((prev) =>
        prev.map((product) => (product.service === serviceToDelete ? { ...product, service: "Other" } : product)),
      )
      toast.success("Service deleted successfully!")
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <p className="text-gray-600 mt-2">Manage your products and services efficiently</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowServiceModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Package className="w-5 h-5" />
              <span>Manage Services</span>
            </button>
            <button
              onClick={() => {
                setEditingProduct(null)
                setNewProduct({ name: "", service:"", description: "", image: "" })
                setShowUploadForm(true)
              }}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              <span>Add Product</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Products" count={getProductCount("Total")} icon={Package} />
          <StatCard title="Active Products" count={getProductCount("Active")} icon={Package} />
          <StatCard title="Inactive Products" count={getProductCount("Inactive")} icon={Package} />
          <StatCard title="Draft Products" count={getProductCount("Draft")} icon={Package} />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white font-medium"
              >
                <option value="All">All Products</option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center space-x-4 w-full lg:w-auto justify-between lg:justify-end">
              {selectedProducts.length > 0 && (
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-600">{selectedProducts.length} selected</span>
                  <button
                    onClick={handleDeleteSelected}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                  onChange={handleSelectAll}
                  className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-600">Select All</span>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"} transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"} transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-16 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Upload/Edit Form Modal */}
        {showUploadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h3>
                <button onClick={() => setShowUploadForm(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleUploadProduct} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service *</label>
                  <select
                    value={newProduct.service}
                    onChange={(e) => setNewProduct({ ...newProduct, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

               

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Image</label>
                  <div className="flex items-center space-x-4">
                    {newProduct.image && (
                      <img
                        src={newProduct.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
                      />
                    )}
                    <label className="cursor-pointer">
                      <span className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium">
                        {newProduct.image ? "Change Image" : "Upload Image"}
                      </span>
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Upload className="w-5 h-5" />
                    <span>{editingProduct ? "Update Product" : "Add Product"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUploadForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Service Management Modal */}
        {showServiceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Manage Services</h3>
                <button onClick={() => setShowServiceModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Add New Service */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Service</h4>
                  <form onSubmit={handleAddService} className="space-y-4">
                    <input
                      type="text"
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      placeholder="Enter service name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Service</span>
                    </button>
                  </form>
                </div>

                {/* Existing Services */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Existing Services</h4>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <span className="text-sm font-medium text-gray-900">{service}</span>
                        <button
                          onClick={() => handleDeleteService(service)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  {services.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-8">No services available</p>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowServiceModal(false)}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 font-medium"
                >
                  Close
                </button>
              </div>
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
